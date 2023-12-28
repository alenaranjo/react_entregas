import { Link, NavLink } from 'react-router-dom';
import { CartWidget } from '../CartWidget/CartWidget';
import './NavBar.css';

const category = [
  {id: 'ABC1', name: 'Ropa', path: 'ropa', description: 'categoria'},
  {id: 'ABC2', name: 'Zapatos', path: 'zapatos', description: 'categoria'},
  {id: 'ABC3', name: 'Bolsos', path: 'bolsos', description: 'categoria'},
  {id: 'ABC4', name: 'Accesorios', path: 'accesorios', description: 'categoria'},
  {id: 'ABC5', name: 'Tecnología', path: 'tecnologia', description: 'categoria'},
]

export const NavBar = ({ inicio = 'Inicio'}) => {
  return (
    <nav className="navbar">
      <ul className="nav-menu">
        <li className="logo-icon"><NavLink to='/'></NavLink></li>
        <li><NavLink className={({ isActive }) => isActive ? 'activeState' : 'hoverState'} to='/'>{inicio}</NavLink></li>
        {category.map(category => <li key={category.id}><NavLink className={({ isActive }) => isActive ? 'activeState' : 'hoverState'} to={`/categoria/${category.path}`}>{category.name}</NavLink></li>)}
      </ul>
      <Link className="btn" to='/carrito'><CartWidget className="cart-widget" /></Link>
    </nav>
  );
};
