import { Fragment, useEffect, useState } from "react";
import Busqueda from "./Busqueda";
import { useParams } from "react-router-dom";
import Swal from 'sweetalert2';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const DetalleItem = () => {
  const { id } = useParams();
  const [item, setItem] = useState({});

  const getItem = async () => {
    try {
      const response = await fetch(
        "https://app-3415b8c8-8b40-4d98-aa2b-3bc6564f023d.cleverapps.io/api/items/" + id
        //"http://localhost:8080/api/items/" + id
      );
      const data = await response.json();
      console.log(data);
      setItem(data);
    } catch (error) {
      console.error("Error al obtener el producto:", error);
    }
  };

  const addSale = async () => {
    try {
      const response = await fetch(
        "https://app-3415b8c8-8b40-4d98-aa2b-3bc6564f023d.cleverapps.io/api/addSale",
        //"http://localhost:8080/api/addSale",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            product_id: item.id,
            price: item.price,
            sale_date: new Date().toISOString(),  
          }),          
        }
      );
      const data = await response.json();
      console.log(data);
      Swal.fire({
        icon: 'success',
        title: 'Compra exitosa',
        text: 'El producto ha sido añadido a la lista de compras.',
      });
    } catch (error) {
      console.error("Error al intentar añadir el producto a la lista de compras:", error);
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Hubo un problema al intentar añadir el producto a la lista de compras.',
      });
    }
  };
  

  useEffect(() => {
    getItem();
  }, [id]);

  return (
    <Fragment>
      <div className="container d-flex flex-column align-items-center mt-5">
        <Busqueda />

        <div className="card" style={{ width: "24rem" }}>
          {/* Carousel de Bootstrap */}
          <div id="productCarousel" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
              {item.images && JSON.parse(item.images).map((image, index) => (
                <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={index}>
                  <img src={image} className="d-block w-100" alt={`Producto ${index + 1}`} />
                </div>
              ))}
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#productCarousel" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Anterior</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#productCarousel" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Siguiente</span>
            </button>
          </div>

          <div className="card-body">
            <h5 className="card-title">{item.title}</h5>
            <p className="card-text">{item.description}</p>
            <p className="card-text">Categoría: {item.category}</p>
            <p className="card-text">Stock: {item.stock}</p>
            <p className="card-text">Rating: {item.rating}</p>
            <p className="card-text">Precio: ${item.price}</p>
          </div>
        </div>

        <div className="mt-3">
          <button
            className="btn btn-success"
            onClick={() => addSale()}
          >
            Comprar
          </button>
        </div>
        <div className="mt-3">
          <button
            className="btn btn-warning"
            onClick={() => window.history.back()}
          >
            Volver
          </button>
        </div>
      </div>
    </Fragment>
  );
};

export default DetalleItem;
