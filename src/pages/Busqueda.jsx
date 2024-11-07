import { Fragment, useState } from "react";
import "../styles/Busqueda.css";
import { Link } from "react-router-dom";
import logo from "../assets/logoBazar.jpg";

const Busqueda = () => {
    const [search, setSearch] = useState("");
    const [error, setError] = useState(false);

    const handleSearch = (event) => {
        setSearch(event.target.value);
        if (event.target.value.trim() === "") {
            setError(true);
        } else {
            setError(false);
        }
    };

  return (
    <Fragment>
      <div className="container d-flex justify-content-center align-items-center mt-2">
        <img
          src={logo}
          className="logo"
          alt="Logo del sitio"
        />
      </div>
      <div className="container d-flex justify-content-center align-items-center">
        <input 
          type="text" 
          placeholder="Buscar..." 
          className="form-control" 
          style={{ width: "500px" }} 
          value={search} 
          onChange={handleSearch}
        />
        {error && <p className="text-danger">El campo de búsqueda no puede ir vacío</p>}
      </div>
      <div className="container d-flex justify-content-center align-items-center">
        <button 
          className="btn btn-primary mt-3 mb-3" 
          disabled={!search.trim()}
          onClick={() => window.location.href = `/items/${search}`}
        >
          Buscar
        </button>
      </div>
      <div className="container d-flex justify-content-center align-items-center">
        <Link to="/sales" className="btn btn-primary mt-3 mb-3">Ver Compras</Link>
      </div>
    </Fragment>
  );
};

export default Busqueda;
  