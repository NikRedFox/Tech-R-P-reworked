// let btnEntrar = document.getElementById("button-entrar")

// btnEntrar.addEventListener('click', function (event) {
//     event.preventDefault();


//     let cpf = document.getElementById("cpf").value
//     let nome = document.getElementById("nome").value
//     let dataNasc = document.getElementById("data_nasc").value
//     let email = document.getElementById("email").value
//     let senha = document.getElementById("senha").value
//     let telefone = document.getElementById("telefone").value
//     let cep = document.getElementById("cep").value
//     let endereco = document.getElementById("endereco").value


//     fetch("https://techrpsearch-hpccewfuaxfph6dc.eastus-01.azurewebsites.net/api/cadastro", {
//         method: 'POST',
//         headers: {
//            'Content-Type': 'application/json'

//         },
//         body: JSON.stringify({
//             cpf: cpf,
//             nome: nome,
//             dataNasc: dataNasc,
//             email: email,
//             senha: senha,
//             telefone: telefone,
//             cep: cep,
//             endereco: endereco
//         })
//     })
//     .then(response =>{
//         if(!response.ok){
//             throw new Error (`Erro HTTP: status ${response.status}`);
//         }
//         return response.json();
//     })

//     .then(data =>{
//         console.log("Deu ruim")
//     })

//     .catch(error=>{
//         alert('Erro ao enviar aos dados:',error)
//     })
// }
// )

const formCadastro = document.getElementById("form-cadastro");

formCadastro.addEventListener('submit', function(event) {
  event.preventDefault();

  let cpf = document.getElementById("cpf").value;
  let nome = document.getElementById("nome").value;
  let dataNasc = document.getElementById("data_nasc").value;
  let email = document.getElementById("email").value;
  let senha = document.getElementById("senha").value;
  let telefone = document.getElementById("telefone").value;
  let cep = document.getElementById("cep").value;
  let endereco = document.getElementById("endereco").value;

  console.log(cpf, nome, dataNasc, email, senha, telefone, cep, endereco)

  fetch("https://techrpsearch-hpccewfuaxfph6dc.eastus-01.azurewebsites.net/api/cadastro", {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      cpf: cpf,
      nome: nome,
      dataNasc: dataNasc,
      email: email,
      senha: senha,
      telefone: telefone,
      cep: cep,
      endereco: endereco
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
     window.location.href = "../../src/pages/login.html"
    // alert('Cadastro realizado com sucesso!');
  })
  .catch(error => {
    alert('Erro ao enviar os dados: ' + error.message);
  });
});
