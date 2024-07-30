import Img from '../../assets/BackgroundHome.png';
import '../../styles/components/heroHeader/heroheader_site.scss';

export function HeroHeader() {
  return (
    <section className="hero-header">
      <div className="hero-header__image-container">
        <img src={Img} alt="Photo de montagnes" />
        <h1 className="hero-header__title">Chez vous,<br className='hero-header__br'/> partout et ailleurs</h1>
      </div>
    </section>
  );
}