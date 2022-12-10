import Error404 from "../../img/error404.jpg";

function NotFound() {
  return (
    <div>
      <img src={Error404} alt="Error de ruta"></img>
    </div>
  );
}

export default NotFound;
