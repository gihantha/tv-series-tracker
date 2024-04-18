import "./App.css";
import DisplayCard from "./Components/DisplayCard/DisplayCard";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import Sidebar from "./Components/Sidebar/Sidebar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="hero-container">
        <Sidebar />
        <DisplayCard />
      </div>
      <Footer />
    </div>
  );
}

export default App;
