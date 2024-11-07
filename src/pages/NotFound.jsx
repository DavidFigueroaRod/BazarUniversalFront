
const NotFound = () => {
  return (
    <div className="container d-flex justify-content-center align-items-center mt-5">
      <div className="alert alert-danger" role="alert">
        <h4 className="alert-heading">Error 404 - Página no encontrada</h4>
        <p>La página que estás buscando no existe</p>
        <hr />
        <p className="mb-0">Vuelve a la página de inicio</p>
      </div>
    </div>
  )
}

export default NotFound
