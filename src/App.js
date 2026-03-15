import './App.css';
import TopHeader from './components/header/TopHeader';
import Navbar from './components/header/Navbar';
import Slider from './components/slider/Slider';
import Footer from './components/footer/Footer';
import {Link} from 'react-router-dom';

function App() {
  return (
    <>
    <div className="app"> 
      <header>
        <TopHeader />
        <Navbar />
      </header>
      <main>
        <Slider />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
      
    </>
  );
}

export default App;
