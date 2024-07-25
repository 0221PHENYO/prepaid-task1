import React from 'react'
import Apple from '../../assets/png/apple.png'
import Kiwi from '../../assets/png/kiwi.png'
import Lemon from '../../assets/png/lemon.png'
import Leaf from '../../assets/png/leaf.png'
import Tomato from '../../assets/png/tomato.png'
import PrimaryButton from '../Shared/PrimaryButton'


const Banner = () => {
  return (
    <>
    <div className="container py-14 relative">
        <div>
            <h1 className="py-8 tracking-wider text-2xl font-semibold text-dark text-center ">Take the Healthy Difference</h1>
            

            {/*My Content section*/}
            <div className="space-y-10"> 
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-10">
                    <div>
                        <p>
                        {" "}
                        We know that<span className="text-primary"> 
                            time</span>
                        is the greatest value in the modern world. Our healthy meal plan delivery service Good Food in Miami is the answer for those who want 
                        to eat healthy, saving time for buying food and preparing delicioius, healthy meals.  
                    </p>
                    </div>
                </div>
                <div></div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-10">
                    <div></div>
                    <div>
                        <p>
                        {" "}
                        We know that<span className="text-primary"> 
                            time</span>
                        is the greatest value in the modern world. Our healthy meal plan delivery service Good Food in Miami is the answer for those who want 
                        to eat healthy, saving time for buying food and preparing delicioius, healthy meals.  
                    </p>
                    </div>
                </div>
            </div>
            {/*Button Section*/}
            <div className="flex justify-center mt-10 sm:mt-14">
                <PrimaryButton/>
            </div>
        </div>
        {/*bg fruits pngs*/}
        <div className="absolute top-5 -left-16 sm:bottom-0 sm:left-0 opacity-50 sm:opacity-100">
            <img src={Leaf} alt="" className="max-w-[160px]"/>
        </div>
        <div className="absolute -left-16 sm:bottom-16 sm:left-16 opacity-50 sm:opacity-100">
            <img src={Tomato} alt="" className="max-w-[200px]"/>
        </div>
        <div className="absolute top-10 -right-16 sm:right-20 opacity-50 sm:opacity-100">
            <img src={Lemon} alt="" className="max-w-[200px]"/>
        </div>
        <div className="hidden sm:block absolute bottom-0 right-0">
            <img src={Apple} alt="" className="max-w-[200px]"/>
        </div>
        <div className="absolute top-1/2 -translate-y-1/2 left-1/3 -translate-x-1/2 opacity-50 sm:opacity-100">
            <img src={Kiwi} alt="" className="max-w-[200px]"/>
        </div>

    </div>
    
    </>
  )
}

export default Banner