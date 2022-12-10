import CartWidget from "../CartWidget/CartWidget";
import "./NavBar.css";
import { Link, useNavigate, useParams } from "react-router-dom";

function NavBar() {
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
  };

  return (
    <nav className="ulNav">
      <div onClick={() => handleNavigate("/")} xyz="hello">
          <img
            className="logo"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqNjIb6GQvFLqKCOKOZusb_z63m23Y-gOOKA&usqp=CAU"
            alt="react-icon"
        />
      </div>
      <div className="nav-center">
          <Link to='/category/Bulones Hexagonales'>Hexagonales</Link>
          <Link to='/category/Bulones con cabeza redonda'>Cabeza redonda</Link>
          <Link to='/category/Tuercas, arandelas planas y Grower'>Tuercas y Arandelas</Link>
          
      </div>
      <div>
      <CartWidget/>
      </div>
        
    </nav>
  );
}
export default NavBar;
