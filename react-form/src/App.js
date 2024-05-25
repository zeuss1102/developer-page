
import React, { useState } from 'react';
import './index.css'; // Asegúrate de tener un archivo de estilos si lo necesitas

function App() {
  const [nombre, setNombre] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [email, setEmail] = useState('');

  const handleNombreChange = (event) => {
    setNombre(event.target.value);
  };

  const handleMensajeChange = (event) => {
    setMensaje(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Nombre enviado: ${nombre}\nEmail enviado: ${email}\nMensaje enviado: ${mensaje}`);
  };

  return (
    <div className="App">
      <h1>Contacto</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="nombre">Nombre:</label>
          <input
            type="text"
            id="nombre"
            placeholder="Tu nombre"
            value={nombre}
            onChange={handleNombreChange}
            required // Campo requerido
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            placeholder="Tu email"
            value={email}
            onChange={handleEmailChange}
            required // Campo requerido
          />
        </div>
        <div>
          <label htmlFor="mensaje">Mensaje:</label>
          <textarea
            id="mensaje"
            placeholder="Tu mensaje"
            value={mensaje}
            onChange={handleMensajeChange}
            required // Campo requerido
          />
        </div>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default App;