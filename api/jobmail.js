const form = document.getElementById('form-solicitud');
const button = document.getElementById('button-job');
const validEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;

button.addEventListener('click', (e) => {
  e.preventDefault();
  let formData = new FormData(form);
  let data = {
    nombre: formData.get('nombre'),
    email: formData.get('email'),
    telefono: formData.get('telefono'),
    direccion: formData.get('direccion'),
    experiencia: formData.get('experiencia'),
    educacion: formData.get('educacion'),
    habilidades: formData.get('habilidades'),
    proyecto: formData.get('proyecto'),
  }

  if (data.nombre == '') {
    alert('Te falta agregar un nombre');
    return;
  } else if (data.email == '' || !validEmail.test(data.email)) {
    alert('Te falta agregar un correo o el correo no es válido');
    return;
  } else if (data.telefono == '') {
    alert('Te falta agregar un teléfono');
    return;
  } else if (data.direccion == '') {
    alert('Te falta agregar una dirección');
    return;
  } else if (data.experiencia == '') {
    alert('Te falta agregar experiencia');
    return;
  } else if (data.educacion == '') {
    alert('Te falta agregar educación');
    return;
  } else if (data.habilidades == '') {
    alert('Te falta agregar habilidades');
    return;
  } else if (data.proyecto == null || data.proyecto == '') {
    alert('Falta seleccionar proyecto');
    return;
  }

  fetch('http://127.0.0.1:3000/sendJobMail', {
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data)
  })
    .then(response => response.text())
    .then(res => {
      console.log(res);
      alert("Se envió el correo, gracias!!!");
      form.reset();
    })
    .catch(err => console.log(err));
});

