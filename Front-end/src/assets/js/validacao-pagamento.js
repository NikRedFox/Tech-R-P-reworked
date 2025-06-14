const botoesPagamento = document.querySelectorAll(".botao-pagamento");
const modal = document.getElementById("modal-pagamento");
const closeButton = document.querySelector(".close-button");
const forms = document.querySelectorAll('.form-cartao');

forms.forEach(form => {
    form.addEventListener("submit", function (event) {
        event.preventDefault();        

        const numeroCartao = form.querySelector('input[name="numeroCartao"]').value.trim();
        const validadeMes = form.querySelector('input[name="validadeMes"]').value.trim();
        const validadeAno = form.querySelector('input[name="validadeAno"]').value.trim();
        const codigoSeguranca = form.querySelector('input[name="codigoSeguranca"]').value.trim();

        if (!numeroCartao || !validadeMes || !validadeAno || !codigoSeguranca) {
            alert("Por favor, preencha todos os campos.");
            return;
        }

        if (!/^\d{13,19}$/.test(numeroCartao)) {
            alert("Número de cartão inválido. Use apenas números entre 13 e 19 dígitos.");
            return;
        }
        const mes = parseInt(validadeMes);
        const ano = parseInt(validadeAno);
        if (mes < 1 || mes > 12 || isNaN(mes) || isNaN(ano)) {
            alert("Data de validade inválida.");
            return;
        }

        const hoje = new Date();
        const dataValidade = new Date(2000 + ano, mes, 0); 
        if (dataValidade < hoje) {
            alert("O cartão está vencido.");
            return;
        }
      
        const mensagemSucesso = form.querySelector(".mensagem-sucesso");
        if (mensagemSucesso) {
            mensagemSucesso.style.display = "block";
        }

        modal.style.display = "flex";
    });
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
