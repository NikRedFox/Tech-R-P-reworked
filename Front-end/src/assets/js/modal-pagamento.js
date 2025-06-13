const closeButton = document.querySelector(".close-button");
const botaoPagamento = document.getElementById("botao-pagamento");
const modal = document.getElementById("modal-pagamento");

botaoPagamento.addEventListener("click", function (event) {
    event.preventDefault(); 

    const numeroCartao = document.querySelector('input[name="numeroCartao"]').value.trim();
    const validadeMes = document.querySelector('input[name="validadeMes"]').value.trim();
    const validadeAno = document.querySelector('input[name="validadeAno"]').value.trim();
    const codigoSeguranca = document.querySelector('input[name="codigoSeguranca"]').value.trim();

    if (!numeroCartao || !validadeMes || !validadeAno || !codigoSeguranca) {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    // Verificar número do cartão
    const numeroCartaoLimpo = numeroCartao.replace(/\D/g, ""); // remove espaços e traços
    if (numeroCartaoLimpo.length !== 16) {
        alert("Número de cartão inválido.");
        return;
    }

    // Verificar validade
    const mes = parseInt(validadeMes);
    const ano = parseInt(validadeAno);
    if (mes < 1 || mes > 12 || isNaN(mes) || isNaN(ano)) {
        alert("Data de validade inválida.");
        return;
    }

    const hoje = new Date();
    const dataValidade = new Date(ano, mes, 0); // último dia do mês
    if (dataValidade < hoje) {
        alert("O cartão está vencido.");
        return;
    }

    // Tudo ok, exibe o modal
    modal.style.display = "flex";
});

closeButton.addEventListener("click", function () {
    modal.style.display = "none";
});

window.addEventListener("click", function (event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});

document.getElementById("confirmar-ok").addEventListener("click", function () {
    window.location.href = "../../index.html";
});
