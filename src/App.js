import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Ecosystem from './components/Ecosystem';
import Stats from './components/Stats';
import About from './components/About';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Services />
      <Ecosystem />
      <Stats />
      <About />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;
