let btnContinuar = document.getElementById("btn-continuar");
let overlay = document.getElementById("modal-overlay");

btnContinuar.addEventListener("click", () => {
  const tipoPagamento = document.querySelector("input[name=metodo]:checked");

  if (!tipoPagamento) {
    alert("Selecione uma forma de pagamento.");
    return;
  }

  document
    .querySelectorAll(".form-cartao")
    .forEach((div) => div.classList.add("hidden"));

  switch (tipoPagamento.value) {
    case "pix":
      document.getElementById("pix-info").classList.remove("hidden");
      break;
    case "credito":
      document.getElementById("form-cartao-credito").classList.remove("hidden");
      break;
    case "debito":
      document.getElementById("form-cartao-debito").classList.remove("hidden");
      break;
  }

  overlay.classList.remove("hidden");
});

overlay.addEventListener("click", () => {
  overlay.classList.add("hidden");
  document
    .querySelectorAll(".form-cartao")
    .forEach((div) => div.classList.add("hidden"));
});

document.querySelectorAll('.btn-fechar').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.form-cartao').forEach(form => {
      form.classList.add('hidden');
    });

    if (overlay) overlay.classList.add('hidden');
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const modalOverlay = document.getElementById("modal-overlay");
  const formCredito = document.getElementById("form-cartao-credito");
  const formDebito = document.getElementById("form-cartao-debito");
  const pixInfo = document.getElementById("pix-info");

  let tipoSelecionado = null;
  let valorPago = null;
  const locacaoId = localStorage.getItem("locacaoId");

  if (!locacaoId) {
    alert("Nenhuma locação encontrada. Retorne à página anterior.");
    window.location.href = "./products.html";
    return;
  }

  // Buscar valor da locação
  fetch(`https://techrpsearch-hpccewfuaxfph6dc.eastus-01.azurewebsites.net/api/locacoes/${locacaoId}`)
    .then(response => {
      if (!response.ok) throw new Error("Erro ao buscar locação.");
      return response.json();
    })
    .then(data => {
      valorPago = data.valorTotal;
      document.querySelectorAll(".valor-total .total-geral p:last-child").forEach(p => {
        p.textContent = `R$ ${valorPago.toFixed(2)}`;
      });
      document.querySelector(".preco-box-pix h1").textContent = `R$: ${valorPago.toFixed(2)}`;
    })
    .catch(err => {
      alert("Erro ao carregar informações de pagamento.");
      console.error(err);
    });

  // Abrir modal
  btnContinuar.addEventListener("click", () => {
    const metodoSelecionado = document.querySelector('input[name="metodo"]:checked');
    if (!metodoSelecionado) {
      alert("Selecione um método de pagamento.");
      return;
    }

    tipoSelecionado = metodoSelecionado.value;

    modalOverlay.classList.remove("hidden");

    if (tipoSelecionado === "credito") {
      formCredito.classList.remove("hidden");
    } else if (tipoSelecionado === "debito") {
      formDebito.classList.remove("hidden");
    } else if (tipoSelecionado === "pix") {
      pixInfo.classList.remove("hidden");
    }
  });

  // Fechar modal
  document.querySelectorAll(".btn-fechar").forEach(btn => {
    btn.addEventListener("click", () => {
      modalOverlay.classList.add("hidden");
      formCredito.classList.add("hidden");
      formDebito.classList.add("hidden");
      pixInfo.classList.add("hidden");
    });
  });

  // Função para enviar pagamento
  function enviarPagamento(formulario, tipoCartao) {
    formulario.addEventListener("submit", (e) => {
      e.preventDefault();
  
      const numeroCartao = formulario.querySelector('input[name="numeroCartao"]').value;
      const nomeTitular = formulario.querySelector('#titularCartao').value;
      const validadeMes = formulario.querySelector('#validadeMes').value;
      const validadeAno = formulario.querySelector('#validadeAno').value;
      const cvv = formulario.querySelector('#codigoSeguranca').value;
  
      const validade = `${validadeMes}/${validadeAno}`;
      const clientesId = localStorage.getItem("usuarioId");
      const locacaoId = localStorage.getItem("locacaoId");
  
      console.log(numeroCartao, nomeTitular, validade, cvv, tipoCartao, locacaoId, clientesId);
  
      fetch("https://techrpsearch-hpccewfuaxfph6dc.eastus-01.azurewebsites.net/api/pagamentos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          numeroCartao: numeroCartao,
          nomeTitular: nomeTitular,
          validade: validade,
          cvv: cvv,
          tipoCartao: tipoCartao,
          locacao: { locacaoId: parseInt(locacaoId) },
          cliente: { clientesId: parseInt(clientesId) }
        })
      })
      .then(response => {
        if (!response.ok) {
          return response.json().then(errData => {
            console.error("Erro da API:", errData);
            throw new Error(errData.mensagem || "Erro no pagamento.");
          }).catch(() => {
            throw new Error("Erro no pagamento e não foi possível ler o erro da API.");
          });
        }
        return response.json();
      })
      .then(data => {
        console.log("Pagamento registrado:", data);
        formulario.querySelector(".mensagem-sucesso").style.display = "block";
        alert("Pagamento realizado com sucesso!");
        localStorage.removeItem("locacaoId");
      })
      .catch(error => {
        console.error("Erro final:", error);
        alert(error.message || "Pagamento falhou. Verifique os dados e tente novamente.");
      });
    });
  }
  
  enviarPagamento(formCredito, "credito");
  enviarPagamento(formDebito, "debito");
});
