import { NavLink } from 'react-router-dom'
import Logo from '../../assets/logo.png'
import '../../styles/components/header/headerStyle.scss'


export function Header() {
  return (
    <nav>
      <div className='logoImg'>
        <img src={Logo} alt="Logo de Kasa" />
      </div>
      <div className='navLinks'>
      <NavLink to="/" activeclassname="active">Accueil</NavLink>
      <NavLink to="/about" activeclassname="active">A propos</NavLink>
      </div>
    </nav>
  )
}