import React from 'react'

const busca = ({ establecerBuscar, establecerNumPag }) => {
  return <form className='d-flex justify-content-center gap-4 mb-5'>
    <input 
    onChange={e=>{
      establecerNumPag(1);
      establecerBuscar(e.target.value);
    }}
    placeholder="Busca por nombre de personaje" 
    type="text" 
    className='col-5 rounded shadow'>
    </input>
    <button 
    onClick={e=>{e.preventDefault();
    }}
    className="btn btn-primary fs-5 paddin shadow">Buscar</button>
  </form>  
}

export default busca
