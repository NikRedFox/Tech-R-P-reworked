// // === CONTROLE DO CARROSSEL DE PRODUTOS ===

// const container = document.querySelector('.cards-container');
// const btnLeft = document.querySelector('.carrossel-btn.left');
// const btnRight = document.querySelector('.carrossel-btn.right');

// //   let scrollAmount = 0;
// //   const cardWidth = 593 + 50; // largura do card + gap

// //   btnRight.addEventListener('click', () => {
// //     scrollAmount += cardWidth;
// //     container.scrollTo({
// //       left: scrollAmount,
// //       behavior: 'smooth'
// //     });
// //   });

// //   btnLeft.addEventListener('click', () => {
// //     scrollAmount -= cardWidth;
// //     container.scrollTo({
// //       left: scrollAmount,
// //       behavior: 'smooth'
// //     });
// //   });



//   // const popupOverlay = document.getElementById("popupOverlay");
//   // const closePopup = document.getElementById("closePopup");

//   // const popupImage = document.getElementById("popupImage");
//   // const popupTitle = document.getElementById("popupTitle");
//   // const popupSpecs = document.getElementById("popupSpecs");
//   // const popupPrice = document.getElementById("popupPrice");

//   // // Pega todos os botões de alocação
//   // const alocarButtons = document.querySelectorAll(".btn-alocar-produto");

//   // alocarButtons.forEach((btn) => {
//   //   btn.addEventListener("click", () => {
//   //     const card = btn.closest(".informacoes-note-variaveis");

//   //     // Pega dados do card
//   //     const imageSrc = card.querySelector("img").getAttribute("src");
//   //     const title = card.querySelector("h4").textContent;
//   //     const specs = [...card.querySelectorAll(".descricao-note-variavel p")]
//   //       .slice(1) // ignora o "Produto"
//   //       .map((p) => p.textContent)
//   //       .join("<br>");
//   //     const price = card.querySelector(".preco-note-variavel").textContent;

//   //     // Atualiza conteúdo do popup
//   //     popupImage.src = imageSrc;
//   //     popupTitle.textContent = title;
//   //     popupSpecs.innerHTML = specs;
//   //     popupPrice.textContent = price;

//   //     popupOverlay.style.display = "flex";
//   //   });
//   // });

//   // closePopup.addEventListener("click", () => {
//   //   popupOverlay.style.display = "none";
//   // });

//   // popupOverlay.addEventListener("click", (e) => {
//   //   if (e.target === popupOverlay) {
//   //     popupOverlay.style.display = "none";
//   //   }
//   // });


// const popupOverlay = document.getElementById("popupOverlay");
// const closePopup = document.getElementById("closePopup");
// const popupImage = document.getElementById("popupImage");
// const popupTitle = document.getElementById("popupTitle");
// const popupPrice = document.getElementById("popupPrice");
// const popupForm = document.getElementById("popupForm");

// const alocarButtons = document.querySelectorAll(".btn-alocar-produto");

// alocarButtons.forEach((btn) => {
//   btn.addEventListener("click", () => {
//     const card = btn.closest(".informacoes-note-variaveis");

//     const imageSrc = card.querySelector("img").getAttribute("src");
//     const title = card.querySelector("h4").textContent;
//     const price = card.querySelector(".preco-note-variavel").textContent;

//     popupImage.src = imageSrc;
//     popupTitle.textContent = title;
//     popupPrice.textContent = price;

//     popupOverlay.style.display = "flex";
//   });
// });

// closePopup.addEventListener("click", () => {
//   popupOverlay.style.display = "none";
// });

// popupOverlay.addEventListener("click", (event) => {
//   if (event.target === popupOverlay) {
//     popupOverlay.style.display = "none";
//   }
// });

// popupForm.addEventListener("submit", function(e) {
//   e.preventDefault();
//   // Aqui você pode pegar os dados e enviar ao backend
//   const quantidade = document.getElementById("quantidade").value;
//   const tempoLoc = document.getElementById("tempo_loc").value;
//   console.log("Alocado:", quantidade, tempoLoc);

//   popupOverlay.style.display = "none";
// });


// // *-----------------------*



// popupForm.addEventListener("submit", function(e) {
//   e.preventDefault(); // evita envio padrão do formulário

//   const quantidade = document.getElementById("quantidade").value.trim();
//   const dataInicio = document.getElementById("data_inicio").value;
//   const dataFim = document.getElementById("data_fim").value;

//   // Validações simples
//   if (quantidade === "" || tempoLoc === "") {
//     alert("Por favor, preencha todos os campos.");
//     return;
//   }

//   const quantidadeNum = Number(quantidade);
//   if (isNaN(quantidadeNum) || quantidadeNum < 1 || quantidadeNum > 5) {
//     alert("Quantidade deve ser um número entre 1 e 5.");
//     return;
//   }

//   // Se passou nas validações, redireciona para a página de pagamento
//   window.location.href = "./pagamento.html";
// });


  // === CONTROLE DO CARROSSEL DE PRODUTOS ===



const container = document.querySelector('.cards-container');
const btnLeft = document.querySelector('.carrossel-btn.left');
const btnRight = document.querySelector('.carrossel-btn.right');


const card = container.querySelector('.tela-card');
const cardWidth = card.getBoundingClientRect().width + 50; 

btnRight.addEventListener('click', () => {
  smoothScrollTo(container, container.scrollLeft + cardWidth, 500);
});

btnLeft.addEventListener('click', () => {
  smoothScrollTo(container, container.scrollLeft - cardWidth, 500);
});


function smoothScrollTo(element, target, duration) {
  const start = element.scrollLeft;
  const distance = target - start;
  const startTime = performance.now();

  function animate(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const ease = easeInOutQuad(progress);
    element.scrollLeft = start + distance * ease;

    if (progress < 1) {
      requestAnimationFrame(animate);
    }
  }

  requestAnimationFrame(animate);
}

function easeInOutQuad(t) {
  return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
}


let isDown = false;
let startX;
let scrollLeft;

container.addEventListener('mousedown', (e) => {
  isDown = true;
  container.classList.add('active');
  startX = e.pageX - container.offsetLeft;
  scrollLeft = container.scrollLeft;
});

container.addEventListener('mouseleave', () => {
  isDown = false;
  container.classList.remove('active');
});

container.addEventListener('mouseup', () => {
  isDown = false;
  container.classList.remove('active');
});

container.addEventListener('mousemove', (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - container.offsetLeft;
  const walk = (x - startX) * 2; 
  container.scrollLeft = scrollLeft - walk;
});



const popupOverlay = document.getElementById("popupOverlay");
const closePopup = document.getElementById("closePopup");
const popupImage = document.getElementById("popupImage");
const popupTitle = document.getElementById("popupTitle");
const popupPrice = document.getElementById("popupPrice");
const popupForm = document.getElementById("popupForm");

const alocarButtons = document.querySelectorAll(".btn-alocar-produto");

alocarButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const card = btn.closest(".informacoes-note")|| btn.closest(".informacoes-note-variaveis");

    if (!card) {
      alert("Erro ao identificar o produto.");
      return;
    }

    // const produtoId = card.dataset.produtoId;
    const produtoId =btn.id.replace("btn-alocar-", "");

    const usuarioId = localStorage.getItem("usuarioId");

    const produto = card.getElementsByClassName("idproduto").value
    const imageSrc = card.querySelector("img").getAttribute("src");
    const title = card.querySelector("h3, h4").textContent;
    const priceElement = card.querySelector(".preco, .preco-note-variavel");
    const price = priceElement ? priceElement.textContent : "Preço não disponível";

    popupImage.src = imageSrc;
    popupTitle.textContent = title;
    popupPrice.textContent = price;

    popupForm.setAttribute("data-produto-id", produtoId);

    popupOverlay.style.display = "flex";
  });
});

closePopup.addEventListener("click", () => {
  popupOverlay.style.display = "none";
});

popupOverlay.addEventListener("click", (e) => {
  if (e.target === popupOverlay) {
    popupOverlay.style.display = "none";
  }
});

popupForm.addEventListener("submit", function(e) {
  e.preventDefault();

  const quantidade = document.getElementById("quantidade").value.trim();
  const dataInicio = document.getElementById("data_inicio").value.trim();
  const dataFim = document.getElementById("data_fim").value.trim();
  const produtoId = popupForm.getAttribute("data-produto-id");
  const usuarioId = localStorage.getItem("usuarioId");



  // Validação
  if (quantidade === "" || dataInicio === "" || dataFim === "") {
    alert("Por favor, preencha todos os campos.");
    return;
  }

  const quantidadeNum = Number(quantidade);
  if (isNaN(quantidadeNum) || quantidadeNum < 1 || quantidadeNum > 5) {
    alert("Quantidade deve ser um número entre 1 e 5.");
    return;
  }

  console.log (quantidadeNum, dataInicio, dataFim,produtoId,usuarioId);

  // // Redireciona
  // window.location.href = "./pagamento.html";

  fetch("https://techrpsearch-hpccewfuaxfph6dc.eastus-01.azurewebsites.net/api/locacoes", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      dataInicio: dataInicio,
      dataFim: dataFim,
      produtoId: produtoId,
      clientesId: usuarioId,
      quantidade: quantidadeNum
    })
  })
  .then(response => {
    if (!response.ok) {
      throw new Error("Erro ao enviar dados.");
    }
    return response.json();  // Só agora transformamos em JSON
  })
  .then(data => {
    console.log("Valor total: ", data.valorTotal);
    console.log("Sucesso:", data);
    // Redireciona ou exibe mensagem de sucesso
    localStorage.setItem("locacaoId", data.locacaoId);
    window.location.href = "./pagamento.html";
  })
  .catch(error => {
    console.error("Erro detalhado:", error);
    alert("Houve um problema ao enviar os dados. Tente novamente.");
});
});
