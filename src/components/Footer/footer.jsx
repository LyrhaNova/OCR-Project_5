// import { Link } from 'react-router-dom'
import LogoFooter from '../../assets/logoFooter.png'
import '../../styles/components/footer/footerStyle.scss'

export function Footer() {
  return (
    <footer>
      <div className='logoImgFooter'>
        <img src={LogoFooter} alt="Logo de Kasa" />
      </div>
      <p>© Kasa. All rights reserved</p>
      </footer>
  )
}