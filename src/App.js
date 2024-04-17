import './App.css';
import DisplayCard from './Components/DisplayCard/DisplayCard';
import Footer from './Components/Footer/Footer';
import Hero from './Components/Hero/Hero';
import Navbar from './Components/Navbar/Navbar';
import Sidebar from './Components/Sidebar/Sidebar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Sidebar/>
      <Hero />
      <DisplayCard />
      <Footer/>
    </div>
  );
}

export default App;
