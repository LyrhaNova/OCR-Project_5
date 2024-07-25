import Img from '../../assets/BackgroundAbout.png'
import '../../styles/components/heroHeader/heroHeaderStyle.scss'


export function HeroHeaderAbout() {
  return (
   <section id="heroHeader">
      <div className="Image">
      <img src={Img} alt="Photo de montagnes" />
      </div>
   </section>
  )
}