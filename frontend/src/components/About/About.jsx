import React from 'react'
import BgPolygon from '../../assets/polygon.png'
import Vector from '../../assets/vector-wave.png'
import { FaUser} from 'react-icons/fa'


const bgStyle = {
    backgroundImage: `url(${BgPolygon})`,
    backgroundRepeat: "no-repeat", 
    backgroundPosition: "center",
    backgroundSize: "cover", 
    width: "100%",
    height: "100%",
    position: "relative",
}

const About = ({HandlePopup}) => {
  return (
    <>
    <div style={bgStyle} className="py-14">
        <div className="container min-h-[500px] relative z-10 ">
            <h1 className="pt-20 tracking-wider text-4xl font-semibold text-white text-center">About Us</h1>
            {/*My cart section*/}
            <div className="bg-white/80 p-10 my-10 ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Id vel eum eaque reprehenderit, at omnis earum facere. Dicta ea repellat labore unde pariatur velit, nostrum mollitia veritatis necessitatibus modi impedit.
            <div className="pt-10 flex justify-center">
            <button onClick={HandlePopup} className="flex justify-center items-center gap-2 bg-primary text-xl h-[40px] text-white px-5 py-2 hover:scale-105 duration-300">
                            <FaUser/>
                            My Account
                        </button>
            </div>
            </div>
        </div>

        {/*My wave vector*/}
        <div className="absolute top-0 right-0 w-full">
            <img src={Vector} alt="" className="mx-auto"/>
        </div>

    </div>
    
    
    
    </>
  )
}

export default About