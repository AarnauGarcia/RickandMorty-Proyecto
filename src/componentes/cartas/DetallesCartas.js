import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import jsPDF from 'jspdf';
import axios from 'axios';



const descargarPDF = () => {
    const element = document.getElementById('pdf-content');

    // Obtener las dimensiones del elemento
    const width = element.offsetWidth;
    const height = element.offsetHeight;

    // Crear una instancia de jsPDF con el tamaño personalizado
    const doc = new jsPDF({
        orientation: 'p',
        unit: 'px',
        format: [width, height]
    });

    // Reducir el tamaño del contenido para que se ajuste a la página
    const scaleFactor = 0.5; // Puedes ajustar este valor según tus necesidades
    doc.setFontSize(12 * scaleFactor);

    // Generar el PDF con el contenido del elemento
    doc.html(element, {
        callback: function (pdf) {
            pdf.save('detalles_cartas.pdf');
        }
    });
};

const DetallesCartas = () => {

    let { id } = useParams();
    let [obtencionInfo, actObtencionInfo] = useState([]);
    let { name, image, location, origin, gender, species, status, type } = obtencionInfo
    let api = `https://rickandmortyapi.com/api/character/${id}`;
    useEffect(() => {
        (async function () {
            let info = await fetch(api).then(res => res.json());
            actObtencionInfo(info);
        })();
    }, [api]);

    const guardarFavorito = async () => {
        try {
            await axios.post('guardar_favorito.php', {
                usuario_id: 123, // Reemplaza 123 con el ID del usuario actual
                favorito_id: id,
            });
            console.log('Favorito guardado correctamente.');
        } catch (error) {
            console.error('Error al guardar el favorito:', error);
        }
    };

    return <div className='container d-flex justify-content-center'>
        <div className='d-flex flex-column gap-4' id='pdf-content'>
            <h1 className='text-center'>
                {name}
            </h1>
            <img src={image} alt='' className='img-fluid' />
            {(() => {
                if (status === "Dead") {
                    return (
                        <div className="fs-5 badge bg-danger">
                            {status}
                        </div>
                    );
                }
                else if (status === "Alive") {
                    return (
                        <div className="fs-5 badge bg-success">
                            {status}
                        </div>
                    );
                } else {
                    return (
                        <div className="fs-5 badge bg-warning">
                            {status}
                        </div>
                    );
                }
            })()}
            <div className='content'>
                <div className=''>
                    <span className='fw-bold'>
                        Genero :
                    </span>
                    {gender}
                </div>
                <div className=''>
                    <span className='fw-bold'>
                        Especie :
                    </span>
                    {species}
                </div>
                <div className=''>
                    <span className='fw-bold'>
                        Tipo :
                    </span>
                    {type === "" ? " Desconocido" : type}
                </div>
                <div className=''>
                    <span className='fw-bold'>
                        Localización :
                    </span>
                    {location?.name}
                </div>
                <div className=''>
                    <span className='fw-bold mb-4'>
                        Origen :
                    </span>
                    {origin?.name}
                </div>
            </div>
        </div>
        <div className='container '>
            <button
                onClick={guardarFavorito}
                className="btn btn-primary fs-5 paddin shadow">Favoritos</button>
            <button
                onClick={descargarPDF}
                className="btn btn-primary fs-5 paddin shadow">Descargar PDF</button>
        </div>
    </div>;
};

export default DetallesCartas
