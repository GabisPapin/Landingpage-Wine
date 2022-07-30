import './App.css';
import brinde from './assets/brinde.webp';
import colheita from './assets/colheita.webp';
import Footer from './components/Footer';
import Header from './components/Header';
import Carousel from './components/TopCarousel';

function App() {
  return (
    <div className='container'>
      <Header />
      <Carousel />
      <img className="top-image" src={brinde} alt="Uma imagem" />
      <img className="colheita-image" src={colheita} alt="Uma imagem" />

      {/* <Card /> */}
      <Footer />
    </div>
  );
}

export default App;
