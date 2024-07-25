import Img from '../../assets/BackgroundHome.png'
import '../../styles/components/heroHeader/heroHeaderStyle.scss'


export function HeroHeader() {
  return (
   <section id="heroHeader">
      <div className="Image">
      <img src={Img} alt="Photo de montagnes" />
      <h1>Chez vous, partout et ailleurs</h1>
      </div>
   </section>
  )
}