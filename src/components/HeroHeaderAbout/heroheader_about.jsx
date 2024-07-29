import Img from '../../assets/BackgroundAbout.png'
import '../../styles/components/heroHeader/heroheader_site.scss'


export function HeroHeaderAbout() {
  return (
    <section className="hero-header">
      <div className="hero-header__image-container">
      <img src={Img} alt="Photo de montagnes" />
      </div>
   </section>
  )
}
