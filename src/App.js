import React from "react";
import Crud from './compone/Crud';
import './App.css';
import CrudAPI from "./compone/CrudAPI";


const App = () => {
  return <div className="container">
    {/* <Crud /> */}
    <CrudAPI/>
  </div>
}






// import  {useState} from 'react';

// import bustinho from'./img/busto.png';
// import post from "requests"



// function App() {
//   function  guardar(){
//     const nome = document.getElementById('nome')
//     const sobrenome = document.getElementById('sobrenome')
//     const id = document.getElementById('id')
//     const telefone = document.getElementById('telefone')
//     const email = document.getElementById('email')
    
//     post("http://localhost:3004/info/post/create", {JSON : 
//      {
//       id:id.value,
//       nome:nome.value,
//       sobrenome:sobrenome.value,
//       telefone: telefone.value,
//       email:email.value
//      }
//     }) 
//     console.log(nome.value)
//     }

//   return (
//     <div>
//       <h1>Agenda</h1>
//       <div id='agenda'>
//         <input className='inserir' id='nome' type="text" placeholder='Nome'></input>
//         <input className='inserir' id='id' type="text" placeholder='ID'></input>
//         <input className='inserir' id='sobrenome' type="text" placeholder='Sobrenome'></input>
//         <input className='inserir' id='telefone' type="text" placeholder='Telefone'></input>
//         <input className='inserir' id='email' type="text" placeholder='Email'></input>
//         <button className='Btn1' onClick={guardar}>Guardar</button>
//       </div>
//       <div id='Contatos'>
//         <img className='busto' src={bustinho }/>
//         <input id='datos' type="text" placeholder='Nome'></input>
//         <input id='datos' type="text" placeholder='Sobrenome'></input>
//         <input id='datos' type="text" placeholder='Telefone'></input>
//         <input id='datos' type="text" placeholder='Email'></input>
//         <button id='boton' className='Btn' >Editar</button>
//         <button className='Btn' >Eliminar</button>
//         </div>
//     </div>
//   );
// }



export default App;
