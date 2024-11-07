import { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import productsImage from "../assets/products.png";
import logo from "../assets/logoBazar.jpg";

const Compras = () => {
    const [compras, setCompras] = useState([]);

    const getSales = async () => {
        try {
            const response = await fetch(
                "https://app-3415b8c8-8b40-4d98-aa2b-3bc6564f023d.cleverapps.io/api/sales"
            );
            const data = await response.json();
            console.log(data);
            setCompras(data);
        } catch (error) {
            console.error("Error al obtener las compras:", error);
            setCompras([]);
        }
    };

    useEffect(() => {
        getSales();
    }, []);

    return (
        <Fragment>
            <div className="container d-flex flex-column align-items-center mt-4">
            <div className="container d-flex justify-content-center align-items-center mt-2">
                <img
                src={logo}
                className="logo"
                alt="Logo del sitio"
                />
            </div>
                <h1 className="mb-4">Compras</h1>
                {compras.length > 0 ? (
                    <div className="w-100">
                        {compras.map((compra) => (
                            <div
                                key={compra.id}
                                className="d-flex align-items-center border-bottom py-3"
                                style={{ width: "100%" }}
                            >
                                <img
                                    src={productsImage}
                                    alt="Producto"
                                    className="rounded-circle"
                                    style={{ width: "80px", height: "80px", objectFit: "cover", marginRight: "15px" }}
                                />
                                <div className="flex-grow-1">
                                    <div className="d-flex justify-content-between">
                                        <h5 className="mb-0">{compra.product.title}</h5>
                                        <span className="text-muted">{compra.product.category}</span>
                                    </div>
                                    <p className="text-muted mb-1">{compra.product.description}</p>
                                    <div className="d-flex align-items-center">
                                        <span className="h5 mb-0">${compra.product.price}</span>
                                        <div className="ml-2">
                                            {[...Array(Math.floor(compra.product.rating))].map((_, i) => (
                                                <i key={i} className="fa fa-star text-warning"></i>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p>No hay compras</p>
                )}
                <div className="mt-4">
                    <Link to="/" className="btn btn-primary">
                        Volver
                    </Link>
                </div>
            </div>
        </Fragment>
    );
};

export default Compras;
