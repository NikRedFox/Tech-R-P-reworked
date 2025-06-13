// const container = document.querySelector('.cards-container');
//   const btnLeft = document.querySelector('.carrossel-btn.left');
//   const btnRight = document.querySelector('.carrossel-btn.right');

//   let scrollAmount = 0;
//   const cardWidth = 593 + 50; // largura do card + gap

//   btnRight.addEventListener('click', () => {
//     scrollAmount += cardWidth;
//     container.scrollTo({
//       left: scrollAmount,
//       behavior: 'smooth'
//     });
//   });

//   btnLeft.addEventListener('click', () => {
//     scrollAmount -= cardWidth;
//     container.scrollTo({
//       left: scrollAmount,
//       behavior: 'smooth'
//     });
//   });



  // const popupOverlay = document.getElementById("popupOverlay");
  // const closePopup = document.getElementById("closePopup");

  // const popupImage = document.getElementById("popupImage");
  // const popupTitle = document.getElementById("popupTitle");
  // const popupSpecs = document.getElementById("popupSpecs");
  // const popupPrice = document.getElementById("popupPrice");

  // // Pega todos os botões de alocação
  // const alocarButtons = document.querySelectorAll(".btn-alocar-produto");

  // alocarButtons.forEach((btn) => {
  //   btn.addEventListener("click", () => {
  //     const card = btn.closest(".informacoes-note-variaveis");

  //     // Pega dados do card
  //     const imageSrc = card.querySelector("img").getAttribute("src");
  //     const title = card.querySelector("h4").textContent;
  //     const specs = [...card.querySelectorAll(".descricao-note-variavel p")]
  //       .slice(1) // ignora o "Produto"
  //       .map((p) => p.textContent)
  //       .join("<br>");
  //     const price = card.querySelector(".preco-note-variavel").textContent;

  //     // Atualiza conteúdo do popup
  //     popupImage.src = imageSrc;
  //     popupTitle.textContent = title;
  //     popupSpecs.innerHTML = specs;
  //     popupPrice.textContent = price;

  //     popupOverlay.style.display = "flex";
  //   });
  // });

  // closePopup.addEventListener("click", () => {
  //   popupOverlay.style.display = "none";
  // });

  // popupOverlay.addEventListener("click", (e) => {
  //   if (e.target === popupOverlay) {
  //     popupOverlay.style.display = "none";
  //   }
  // });


// const popupOverlay = document.getElementById("popupOverlay");
// const closePopup = document.getElementById("closePopup");
// const popupImage = document.getElementById("popupImage");
// const popupTitle = document.getElementById("popupTitle");
// const popupPrice = document.getElementById("popupPrice");
// const popupForm = document.getElementById("popupForm");

// const alocarButtons = document.querySelectorAll(".btn-alocar-produto");

// alocarButtons.forEach((btn) => {
//   btn.addEventListener("click", () => {
//     const card = btn.closest(".informacoes-note, .informacoes-note-variaveis");

//     const imageSrc = card.querySelector("img").getAttribute("src");
//     const title = card.querySelector("h3, h4").textContent;
//     const priceElement = card.querySelector(".preco, .preco-note-variavel");
//     const price = priceElement ? priceElement.textContent : "Preço não disponível";

//     popupImage.src = imageSrc;
//     popupTitle.textContent = title;
//     popupPrice.textContent = price;

//     popupOverlay.style.display = "flex";
//   });
// });


// closePopup.addEventListener("click", () => {
//   popupOverlay.style.display = "none";
// });

// popupOverlay.addEventListener("click", (e) => {
//   if (e.target === popupOverlay) {
//     popupOverlay.style.display = "none";
//   }
// });

// popupForm.addEventListener("submit", function(e) {
//   e.preventDefault();
//   // Aqui você pode pegar os dados e enviar ao backend
//   const quantidade = document.getElementById("quantidade").value;
//   let dataInicio = dpcument.getElementById("data_inicio").value;
//   let dataFim = dpcument.getElementById("data-fiim").value;
//   // const tempoLoc = document.getElementById("tempo_loc").value;
//   // console.log("Alocado:", quantidade, tempoLoc);
//   console.log("Alocado:", quantidade, dataInicio,dataFim);

//   popupOverlay.style.display = "none";
// });


// // *-----------------------*



// popupForm.addEventListener("submit", function(e) {
//   e.preventDefault(); // evita envio padrão do formulário

//   const quantidade = document.getElementById("quantidade").value.trim();
//   let dataInicio = document.getElementById("data_inicio").value
//   let dataFim = document.getElementById("data-fim").value
//   // const tempoLoc = document.getElementById("tempo_loc").value.trim();

//   // Validações simples
//   if (quantidade === "" || tempoLoc === "") {
//     alert("Por favor, preencha todos os campos.");
//     return;
//   }

//   // Validação do número dentro dos limites (1 a 5)
//   const quantidadeNum = Number(quantidade);
//   if (isNaN(quantidadeNum) || quantidadeNum < 1 || quantidadeNum > 5) {
//     alert("Quantidade deve ser um número entre 1 e 5.");
//     return;
//   }

//   // Se passou nas validações, redireciona para a página de pagamento
//   window.location.href = "./pagamento.html";
// });


const popupOverlay = document.getElementById("popupOverlay");
const closePopup = document.getElementById("closePopup");
const popupImage = document.getElementById("popupImage");
const popupTitle = document.getElementById("popupTitle");
const popupPrice = document.getElementById("popupPrice");
const popupForm = document.getElementById("popupForm");

const alocarButtons = document.querySelectorAll(".btn-alocar-produto");

alocarButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const card = btn.closest(".informacoes-note, .informacoes-note-variaveis");

    const imageSrc = card.querySelector("img").getAttribute("src");
    const title = card.querySelector("h3, h4").textContent;
    const priceElement = card.querySelector(".preco, .preco-note-variavel");
    const price = priceElement ? priceElement.textContent : "Preço não disponível";

    popupImage.src = imageSrc;
    popupTitle.textContent = title;
    popupPrice.textContent = price;

    popupOverlay.style.display = "flex";
  });
});

closePopup.addEventListener("click", () => {
  popupOverlay.style.display = "none";
});

popupOverlay.addEventListener("click", (event) => {
  if (event.target === popupOverlay) {
    popupOverlay.style.display = "none";
  }
});

popupForm.addEventListener("submit", function(event) {
  event.preventDefault();

  const quantidade = document.getElementById("quantidade").value.trim();
  const dataInicio = document.getElementById("data_inicio").value;
  const dataFim = document.getElementById("data_fim").value;

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

  console.log("Alocado:", quantidadeNum, dataInicio, dataFim);

  // Redireciona
  window.location.href = "./pagamento.html";
});
