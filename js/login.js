let btnlogin = document.getElementById('btn-login')


btnlogin.addEventListener('click', async function(event) {
  event.preventDefault();

  const email = document.getElementById('email').value.trim();
  const senha = document.getElementById('senha').value.trim();
//   const api = "http://localhost:8080/api/empresas"
  const api = "https://techrpsearch-hpccewfuaxfph6dc.eastus-01.azurewebsites.net/api/login"

  console.log(email, senha)
  try {
    const response = await fetch(`${api}?email=${email}&senha=${senha}`, {
      method: 'GET'
    });

    if (!response.ok) {
      throw new Error('Erro ao conectar com o servidor');
    }

    const usuario = await response.json();
    console.log(usuario)

    if (usuario && usuario.id) {
      window.usuarioId = localStorage.setItem('usuarioId', usuario.id);
      window.location.href = "../../src/pages/page-perfil.html"
      console.log("funcionou")
      
    } else {
      document.getElementById('mensagem').textContent = 'E-mail ou senha incorretos!';
    }
  } catch (error) {
    document.getElementById('mensagem').textContent = 'Erro ao conectar com o servidor!';
    console.error(error);
  }
});
