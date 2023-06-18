import React, { useState, useEffect } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import Cartas from "./componentes/cartas/cartas";
import Buscar from "./componentes/busca/busca";
import Paginas from "./componentes/paginas/pagina";
import Navbar from './componentes/navbar/navbar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import DetallesCartas from './componentes/cartas/DetallesCartas';


function App() {
  return(
    <Router>
      <div className='App'>
        <Navbar />
      </div>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/:id' element={<DetallesCartas />}/>
      </Routes>
    </Router>
  )
}


const Home = () =>{

  let [numPag, establecerNumPag] = useState(1);
  let [buscar, establecerBuscar] = useState("");
  let [obtencionInfo, actObtencionInfo] = useState([]);
  let { info, results } = obtencionInfo;

  let api = `https://rickandmortyapi.com/api/character/?page=${numPag}&name=${buscar}`;

  useEffect(() => {
    (async function () {
      let info = await fetch(api).then(res => res.json());
      actObtencionInfo(info);
    })();
  }, [api]);


  return <div className="App">
    
    

    <Buscar establecerNumPag={establecerNumPag} establecerBuscar={establecerBuscar}/>

    <div className="container">
      <div className="row">
        <div className="col-3"></div>
        <div className="col-8"></div>
        <div className="row">
          <Cartas page="/" results={results} />
        </div>
        <div className="col">
        </div>
      </div>
    </div>

    <Paginas info={info} numPag={numPag} establecerNumPag={establecerNumPag}/>
  </div>;

}

export default App;
