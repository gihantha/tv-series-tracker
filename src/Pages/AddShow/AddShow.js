import React from 'react'

import Footer from '../../Components/Footer/Footer'
import Sidebar from '../../Components/Sidebar/Sidebar'
import Navbar from '../../Components/Navbar/Navbar'
import ActionCard from '../../Components/ActionCard/ActionCard'

const AddShow = () => {
  return (
    <div className='add-a-show'>
      <Navbar />
      <div className="hero-container">
        <Sidebar />  
        <ActionCard />      
      </div>
      <Footer />
    </div>
    
  )
}

export default AddShow
