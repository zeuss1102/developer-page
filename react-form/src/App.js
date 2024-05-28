import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './index.css'; // Asegúrate de tener un archivo de estilos si lo necesitas

function App() {
  const [nombre, setNombre] = useState('');
  const [telefono, setTelefono] = useState('');
  const [email, setEmail] = useState('');
  const [mensaje, setMensaje] = useState('');

  const handleNombreChange = (event) => {
    setNombre(event.target.value);
  };

  const handleTelefonoChange = (event) => {
    setTelefono(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleMensajeChange = (event) => {
    setMensaje(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    
    const templateParams = {
      from_name: nombre,
      from_email: email,
      from_phone: telefono,
      message: mensaje,
    };

    emailjs.send('service_7ocan4l', 'template_3i4o1mz', templateParams, 'YOUR_USER_ID')
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        alert('Correo enviado exitosamente');
      }, (error) => {
        console.log('FAILED...', error);
        alert('Error al enviar el correo');
      });
  };

  return (
    <section>
      <h1>Contacto</h1>
      <form onSubmit={handleSubmit} className="formulario">
        <fieldset>
        <legend>Contactanos llenando todos los campos</legend>
        <div className='contenedor-campos'>
        <div className='campo'>
          <label htmlFor="nombre">Nombre:</label>
          <input className='input-text'
            type="text"
            id="nombre"
            placeholder="Tu nombre"
            value={nombre}
            onChange={handleNombreChange}
            required // Campo requerido
          />
        </div>
        <div className='campo'>
          <label htmlFor="telefono">Teléfono:</label>
          <input className='input-text'
            type="tel"
            id="telefono"
            placeholder="Tu teléfono"
            value={telefono}
            onChange={handleTelefonoChange}
            required // Campo requerido
          />
        </div>
        <div className='campo'>
          <label htmlFor="email">Email:</label>
          <input className='input-text'
            type="email"
            id="email"
            placeholder="Tu email"
            value={email}
            onChange={handleEmailChange}
            required // Campo requerido
          />
        </div>
        <div className='campo'>
          <label htmlFor="mensaje">Mensaje:</label>
          <textarea className='input-text'
            id="mensaje"
            placeholder="Tu mensaje"
            value={mensaje}
            onChange={handleMensajeChange}
            required // Campo requerido
          />
        </div>

        <div className='ali-derecha flex'>
        <input className='boton'  type="submit" value="Enviar"></input>
        </div>

        </div>
        </fieldset>
      </form>
    </section>
  );
}

export default App;
