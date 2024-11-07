import { Fragment, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Busqueda from "./Busqueda";
import products from "../assets/products.png"

const Items = () => {
    const { search } = useParams();
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    // Función para obtener los productos desde la API
    const getItems = async () => {
        setLoading(true);
        try {
            const response = await fetch(
                "https://app-3415b8c8-8b40-4d98-aa2b-3bc6564f023d.cleverapps.io/api/items?q=" + search
            );
            const data = await response.json();
            setFilteredProducts(data);
        } catch (error) {
            console.error("Error al obtener los productos:", error);
            setFilteredProducts([]);
        } finally {
            setLoading(false);
        }
    };

    // Efecto que se ejecuta cuando cambia el valor de `search`
    useEffect(() => {
        getItems();
    }, [search]);

    return (
        <Fragment>
            <div className="container d-flex flex-column align-items-center mt-4">
                {!loading && <Busqueda />}

                <h5 className="text-center mb-4">
                    Resultados de la búsqueda de {search}: {filteredProducts.length}
                </h5>
                
                {loading ? (
                    <p className="text-center">Cargando...</p>
                ) : filteredProducts.length > 0 ? (
                    <div className="w-100">
                        {filteredProducts.map(product => (
                            <div
                                key={product.id}
                                className="d-flex align-items-center border-bottom py-3"
                                style={{ width: "100%" }}
                            >
                                <img
                                    src={products}
                                    alt={product.title}
                                    className="rounded-circle"
                                    style={{ width: "80px", height: "80px", objectFit: "cover", marginRight: "15px" }}
                                />
                                <div className="flex-grow-1">
                                    <div className="d-flex justify-content-between">
                                        <h5 className="mb-0">{product.title}</h5>
                                        <span className="text-muted">{product.category}</span>
                                    </div>
                                    <p className="text-muted mb-1">{product.description}</p>
                                    <div className="d-flex align-items-center">
                                        <span className="h5 mb-0">${product.price}</span>
                                        <div className="ml-2">
                                            {[...Array(Math.floor(product.rating))].map((_, i) => (
                                                <i key={i} className="fa fa-star text-warning"></i>
                                            ))}
                                        </div>
                                    </div>
                                    <Link to={`/item/${product.id}`} className="btn btn-link mt-2">
                                        Ver detalles
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p className="text-center">
                        No se encontraron productos con el término de búsqueda {search}.
                    </p>
                )}

                <div className="mt-4">
                    <Link to="/" className="btn btn-primary">Volver al inicio</Link>
                </div>
            </div>
        </Fragment>
    );
};

export default Items;
