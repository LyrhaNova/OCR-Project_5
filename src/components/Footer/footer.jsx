// import { Link } from 'react-router-dom'
import LogoFooter from '../../assets/logoFooter.png'
import '../../styles/components/footer/footerStyle.scss'

export function Footer() {
  return (
    <footer className='footer'>
      <div className='footer__logo'>
        <img src={LogoFooter} alt="Logo de Kasa" />
      </div>
      <p className='footer__text'>© Kasa. All rights reserved</p>
      </footer>
  )
}