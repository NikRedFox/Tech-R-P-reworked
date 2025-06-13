const formFaleConosco = document.getElementById("form-fale-conosco");

formFaleConosco.addEventListener('submit', function(event) {
  event.preventDefault();


  let nomeCompleto = document.getElementById("nome-completo").value;
  let email = document.getElementById("email").value;
  let telefone = document.getElementById("telefone").value;
  let assunto = document.getElementById("assunto").value;
  let mensagem = document.getElementById("mensagem").value;


  console.log(nomeCompleto, email, telefone, assunto, mensagem)

  fetch("https://techrpsearch-hpccewfuaxfph6dc.eastus-01.azurewebsites.net/api/fale-conosco", {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      nomeCompleto: nomeCompleto,
      email: email,
      telefone: telefone,
      assunto:assunto,
      mensagem: mensagem
    })
  })
  .then(response => {
    if (!response.ok) {
      throw new Error(`Erro HTTP: status ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
    // console.log("Cadastro realizado com sucesso!", data);
    //  window.location.href = "../../src/pages/about.html"
    alert('Mensagem enviada com sucesso! Aguarde nosso retorno...');
  })
  .catch(error => {
    alert('Erro ao enviar os dados: ' + error.message);
  });
});
