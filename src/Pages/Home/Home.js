import React from 'react';

import Navbar from '../../Components/Navbar/Navbar'
import Sidebar from '../../Components/Sidebar/Sidebar'
import DisplayCard from '../../Components/DisplayCard/DisplayCard'
import Footer from '../../Components/Footer/Footer';

const Home = () => {
  return (
    <div className='Home'>
      <Navbar />
      <div className="hero-container">
        <Sidebar />
        <DisplayCard />
        
      </div>
      <Footer />
    </div>
  )
}

export default Home
