import CartWidget from "../CartWidget/CartWidget";
import "./NavBar.css";

function NavBar() {
  return (
    <nav className="ulNav">
      <ul className="ulNav">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Productos</a>
        </li>
        <li>
          <a href="#">Contacto</a>
        </li>
      </ul>
      <CartWidget />
    </nav>
  );
}
export default NavBar;
