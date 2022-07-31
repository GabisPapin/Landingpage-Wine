import './App.css';
import brinde from './assets/brinde.webp';
import CardMod from './components/cardMod';
import CardSlider from './components/CardSlider';
import Footer from './components/Footer';
import Header from './components/Header';
import Carousel from './components/TopCarousel';
// import Carousel from './components/TopCarousel';
import PartnerCard from './components/partnerCard';

function App() {
  return (
    <div className='container'>
      <Header />
      <div className='teste'>
      <CardMod />
      <PartnerCard />
      </div>
      <Carousel />
      <img className="top-image" src={brinde} alt="Uma imagem" />
      <CardSlider />
      
      <Footer />
    </div>
  );
}

export default App;
