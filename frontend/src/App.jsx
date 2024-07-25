import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Banner from './components/Banner/Banner'
import About from './components/About/About'
import Popup from './components/Popup/Popup'
import Search from './components/Search/Search'

const App = () => {
  const[showPopup, setShowPopup] = React.useState(false);

  const HandlePopup = () => {
    setShowPopup(true);
  }
  return (
    <div className="overflow-x-hidden">
      <Navbar HandlePopup={HandlePopup}/>
      <Search/>
      <Hero/>
      <Banner/>
      <WhyChoose/>
      <About HandlePopup={HandlePopup}/>
      <Banner/>
      <Footer/>
      <Popup showPopup = {showPopup} setShowPopup = {setShowPopup}/>
      


    </div>
  )
}

export default App