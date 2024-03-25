document.addEventListener('submit', sendMail);

function sendMail(e) {
  e.preventDefault();
  let name = document.getElementById('name').value;
  let phone = document.getElementById('phone').value;
  let mail = document.getElementById('email').value;
  let message = document.getElementById('mensaje').value;
  var validEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;

  if (name == '') {
    alert('Te falta agregar un nombre');
    return;
  } else if (mail == '') {
    alert('Te falta agregar un correo');
    return;
  } else if (phone == '') {
    alert('Te falta agregar un telefono');
    return;
  } else if (message == '') {
    alert('Te falta agregar un mensaje');
    return;
  } else if (validEmail.test(mail)) {

    let _datos = {
      from: mail,
      to: "ahnatalia25@gmail.com",
      text: message,
      name: name,
      phone: phone,
      mail: mail,
      message:message,
      pass: "ofpiqbvozxznzqyt"
    }

    fetch('http://127.0.0.1:3000/api/sendmail', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(_datos)
    })
      .then(response => response.text())
      .then(res => {
        console.log(res);
        alert("Se envió el correo, gracias!!!");
        document.getElementById('form').reset();
      })
      .catch(err => console.log(err));
  } else {
    console.log('Correo no valido');
    alert('Correo no valido');
    return;}
}