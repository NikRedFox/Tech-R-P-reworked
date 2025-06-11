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

function validarCPF(cpf) {
    cpf = cpf.replace(/[^\d]+/g, ''); // Remove tudo que não for dígito

    if (cpf.length !== 11 || /^(\d)\1{10}$/.test(cpf)) {
        return false; // Elimina CPFs inválidos com todos os dígitos iguais
    }

    // Validação do primeiro dígito verificador
    let soma = 0;
    for (let i = 0; i < 9; i++) {
        soma += parseInt(cpf.charAt(i)) * (10 - i);
    }
    let resto = (soma * 10) % 11;
    if (resto === 10 || resto === 11) resto = 0;
    if (resto !== parseInt(cpf.charAt(9))) return false;

    // Validação do segundo dígito verificador
    soma = 0;
    for (let i = 0; i < 10; i++) {
        soma += parseInt(cpf.charAt(i)) * (11 - i);
    }
    resto = (soma * 10) % 11;
    if (resto === 10 || resto === 11) resto = 0;
    if (resto !== parseInt(cpf.charAt(10))) return false;

    return true; // CPF válido
}
// validacao do email
function validarEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}


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

    // Validação do CPF
  if (!validarCPF(cpf)) {
    alert("CPF inválido. Por favor, verifique e tente novamente.");
    return;
  }
   // Validação do e-mail
  if (!validarEmail(email)) {
    alert("E-mail inválido. Por favor, insira um e-mail válido.");
    return;
  }

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
