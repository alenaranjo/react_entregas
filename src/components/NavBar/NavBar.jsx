import { CartWidget } from '../CartWidget/CartWidget';
import './NavBar.css';

export const NavBar = ({ inicio = 'Inicio', acerca = 'Acerca de', servicios = 'Servicios', contacto = 'Contacto' }) => {
    return (
        <nav className="navbar">
          <ul className="nav-menu">
            <li className="logo-icon"></li>
            <li><a href="/">{inicio}</a></li>
            <li><a href="/acerca">{acerca}</a></li>
            <li><a href="/servicios">{servicios}</a></li>
            <li><a href="/contacto">{contacto}</a></li>
          </ul>
          <CartWidget className="cart-widget" />
        </nav>
    );
};
