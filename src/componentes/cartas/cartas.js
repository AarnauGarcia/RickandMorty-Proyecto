import React from 'react';
import { Link } from 'react-router-dom';

const cartas = ({ results, page }) => {
    let display;
    console.log(results);

    if (results) {
        display = results.map(x => {
            let { id, name, image, origin, status } = x
            return (
                <Link style={{textDecoration: "none"}} to={`${page}${id}`} key={id} className="col-3 mb-4 position-relative text-dark">
                    <div className="border border-primary rounded">
                        <img src={image} alt="" className={`border border-primary img-fluid rounded`} />
                        <div style={{ padding: "10px" }} className="content">
                            <div className="fs-4 fw-bold mb-4">{name}</div>
                            <div className="fs-6">Origen</div>
                            <div className="fs-5">{origin.name}</div>
                        </div>
                    </div>
                    <div style={{ position: "absolute", top: 10, right: 30 }}>
                        {(() => {
                            if (status === "Dead") {
                                return (
                                    <div className="fs-6 badge bg-danger">
                                        {status}
                                    </div>
                                );
                            }
                            else if (status === "Alive") {
                                return (
                                    <div className="fs-6 badge bg-success">
                                        {status}
                                    </div>
                                );
                            } else {
                                return (
                                    <div className="fs-6 badge bg-warning">
                                        {status}
                                    </div>
                                );
                            }
                        })()}
                    </div>
                </Link>
            );
        });
    } else {
        display = "No se han encontrado personajes.";
    }


    return <>{display}</>;
}

export default cartas
