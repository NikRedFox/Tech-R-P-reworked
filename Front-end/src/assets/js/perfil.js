const usuarioId = localStorage.getItem("usuarioId")

let cpf = document.getElementById("cpf")
let nome = document.getElementById("nome")
let dataNasc = document.getElementById("data_nasc")
let email = document.getElementById("email")
let endereco = document.getElementById("endereco")
let telefone = document.getElementById("telefone")


window.addEventListener('DOMContentLoaded', () => {

    fetch(`https://techrpsearch-hpccewfuaxfph6dc.eastus-01.azurewebsites.net/api/cadastro/${usuarioId}`)
        .then((res) => res.json())

        .then((data) => {
            console.log(data)
            cpf.innerText = data.cpf
            nome.innerText = data.nome
            dataNasc.innerText = data.dataNasc
            email.innerText = data.email
            endereco.innerText = data.endereco
            telefone.innerText = data.telefone
        })

        .catch((err) => {
            nome.innerText = "Cliente não encontrado"


        })


})