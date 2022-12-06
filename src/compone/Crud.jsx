import React, {useState, useEffect} from "react";
import Crudcards from "./Crudcards";
import CrudForm from './CrudForm';




const Crud = () => {
 
  const [editData, setEditData] = useState(null);
  const [contactos, setContactos] = useState(() => {
    const saveContactos = window.localStorage.getItem('contactosData');
    if (saveContactos) {
      return JSON.parse(saveContactos);
    } else {
      return []
    }
  });
  useEffect(() => {
    window.localStorage.setItem("contactosData", JSON.stringify(contactos))
  }, [contactos])

  const addContacto = (contacto) => {
    setContactos([
      ...contactos,
      contacto
    ])
}
const editContacto = (contacto) => {
  const newContactos = contactos.map(el => el.id === contacto.id ? contacto : el)
  setContactos(newContactos)
  setEditData(null)
}

const deleteContacto = (id) => {
  const isDelete = window.confirm(`Desejas eliminar o contato com id:${id}`)
  if(isDelete) {
    const newContactos = contactos.filter(el => el.id !== id)
    setContactos(newContactos);
  }
}

  return<>
  <h1> Mi Agenda</h1>
  <CrudForm addContacto={addContacto} editContacto={editContacto} editData={editData}/>
  <Crudcards contactos={contactos} setEditData={setEditData} deleteContacto={deleteContacto}/>

  </>
}
export default Crud