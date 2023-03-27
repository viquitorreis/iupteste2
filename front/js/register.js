const createUser = () => {
    const name = document.getElementById('input_username').value
    const email = document.getElementById('input_email').value
    const phone = document.getElementById('input_phone').value
    const password = document.getElementById('input_password').value
    const confirmPassword = document.getElementById('input_confirm_password').value
  
    if (password !== confirmPassword) {
      alert('As senhas não são iguais')
      return;
    }
  
    fetch('http://localhost:4200/api/v1/users/create/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name: name, email, password, phone }),
    })
      .then((response) => {
        if (!response) {
          throw new Error('Não foi possível criar a conta')
        }
        alert('Conta criada com sucesso')
      })
      .catch((error) => {
        alert(error.message)
      })

}