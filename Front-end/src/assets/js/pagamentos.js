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

    const overlay = document.querySelector('.modal-overlay');
    if (overlay) overlay.classList.add('hidden');
  });
});
