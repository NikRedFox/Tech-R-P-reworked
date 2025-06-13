// === CONTROLE DO CARROSSEL DE PRODUTOS ===

const container = document.querySelector('.cards-container');
const btnLeft = document.querySelector('.carrossel-btn.left');
const btnRight = document.querySelector('.carrossel-btn.right');

// Largura dinâmica do primeiro card
const card = container.querySelector('.tela-card');
const cardWidth = card.getBoundingClientRect().width + 50; // 50px gap

btnRight.addEventListener('click', () => {
  smoothScrollTo(container, container.scrollLeft + cardWidth, 500);
});

btnLeft.addEventListener('click', () => {
  smoothScrollTo(container, container.scrollLeft - cardWidth, 500);
});

// Função de scroll suave usando porcentagem para um deslize fluido
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

// === Scroll com arrasto (drag-to-scroll) ===
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
  const walk = (x - startX) * 2; // scroll mais rápido
  container.scrollLeft = scrollLeft - walk;
});

// === CONTROLE DO POPUP DE ALOCAÇÃO ===

const popupOverlay = document.getElementById("popupOverlay");
const closePopup = document.getElementById("closePopup");
const popupImage = document.getElementById("popupImage");
const popupTitle = document.getElementById("popupTitle");
const popupPrice = document.getElementById("popupPrice");
const popupForm = document.getElementById("popupForm");

const alocarButtons = document.querySelectorAll(".btn-alocar-produto");

alocarButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const card =
      btn.closest(".informacoes-note-variaveis") ||
      btn.closest(".informacoes-note");

    const imageSrc = card.querySelector("img").getAttribute("src");
    const titleEl = card.querySelector("h3, h4");
    const title = titleEl ? titleEl.textContent : "Produto";
    const priceEl = card.querySelector(".preco-note-variavel, .preco");
    const price = priceEl ? priceEl.textContent : "Preço não informado";

    popupImage.src = imageSrc;
    popupTitle.textContent = title;
    popupPrice.textContent = `Preço: ${price}`;

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

popupForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const quantidade = document.getElementById("quantidade").value.trim();
  const tempoLoc = document.getElementById("tempo_loc").value.trim();

  if (quantidade === "" || tempoLoc === "") {
    alert("Por favor, preencha todos os campos.");
    return;
  }

  const quantidadeNum = Number(quantidade);
  if (isNaN(quantidadeNum) || quantidadeNum < 1 || quantidadeNum > 5) {
    alert("Quantidade deve ser um número entre 1 e 5.");
    return;
  }

  console.log("Alocado:", quantidade, tempoLoc);
  window.location.href = "./pagamento.html";
});