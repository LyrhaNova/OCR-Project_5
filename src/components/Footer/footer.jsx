import LogoFooter from '../../assets/logoFooter.png'
import '../../styles/components/footer/footerStyle.scss'

export function Footer() {
  return (
    <footer className='footer'>
      <div className='footer__logo'>
        <img src={LogoFooter} alt="Logo de Kasa" />
      </div>
      <p className='footer__text'>© 2020 Kasa. All<br className='footer__br'/> rights reserved</p>
      </footer>
  )
}