import { NavLink } from 'react-router-dom'
import Logo from '../../assets/logo.png'
import '../../styles/components/header/header_site.scss'


export function Header() {
  return (
    <nav className="header">
      <div className="header__logo">
        <img src={Logo} alt="Logo de Kasa" className="header__logo-img" />
      </div>
      <div className="header__nav">
        <NavLink
          to="/"
          className={({ isActive }) => isActive ? "header__link header__link--active" : "header__link"}
        >
          Accueil
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) => isActive ? "header__link header__link--active" : "header__link"}
        >
          A propos
        </NavLink>
      </div>
    </nav>
  );
}