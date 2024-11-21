// import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';

function App() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');

  const enviarAlert = (event) => {
    event.preventDefault()
    console.log('Dados enviados');
    console.log('Nome:', nome);
    console.log('Email:', email)
    alert(`Formulario enviado com sucesso ${nome} ${email}`)
  }

  return (
    <div className="App">
      <form className='Form' onSubmit={enviarAlert}>
          <h1 className='Title'>Formulário</h1>
          <label className='Name'>
            Nome: 

            <input className='NameInput' type='text' value={nome} onChange={(event) => setNome(event.target.value)}></input>
          </label>
          <br />
          <label className='Email'>
            Email: 

            <input className='EmailInput' type='email' value={email} onChange={(event) => setEmail(event.target.value)}></input>
          </label>
          <br />
          <button className='SendButton' type='submit'>Enviar</button>
      </form>
    </div>
  );
}

export default App;
