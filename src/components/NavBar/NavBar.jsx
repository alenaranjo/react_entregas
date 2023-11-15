import { Link, NavLink } from 'react-router-dom';
import { CartWidget } from '../CartWidget/CartWidget';
import './NavBar.css';

export const NavBar = ({ inicio = 'Inicio', ropa = 'Ropa', zapatos = 'Zapatos', bolsos = 'Bolsos', accesorios = 'Accesorios', tecnologia = 'Tecnologia' }) => {
  return (
    <nav className="navbar">
      <ul className="nav-menu">
        <li className="logo-icon"><NavLink to='/'></NavLink></li>
        <li><NavLink className={({ isActive }) => isActive ? 'activeState' : 'hoverState'} to='/'>{inicio}</NavLink></li>
        <li><NavLink className={({ isActive }) => isActive ? 'activeState' : 'hoverState'} to='/categoria/ropa'>{ropa}</NavLink></li>
        <li><NavLink className={({ isActive }) => isActive ? 'activeState' : 'hoverState'} to='/categoria/zapatos'>{zapatos}</NavLink></li>
        <li><NavLink className={({ isActive }) => isActive ? 'activeState' : 'hoverState'} to='/categoria/bolsos'>{bolsos}</NavLink></li>
        <li><NavLink className={({ isActive }) => isActive ? 'activeState' : 'hoverState'} to='/categoria/accesorios'>{accesorios}</NavLink></li>
        <li><NavLink className={({ isActive }) => isActive ? 'activeState' : 'hoverState'} to='/categoria/tecnologia'>{tecnologia}</NavLink></li>
      </ul>
      <Link className="btn" to='/carrito'><CartWidget className="cart-widget" /></Link>
    </nav>
  );
};
