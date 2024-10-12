 import React from 'react'
 import Title from "./Title"
 import galler_1 from "../assets/gallery-1.png"
 import galler_2 from "../assets/gallery-2.png"
 import galler_3 from "../assets/gallery-3.png"
 import galler_4 from "../assets/gallery-4.png"
 import white_arrow from '../assets/white-arrow.png'
 import './Compus.css'
 
 const Compus = () => {
   return (
    <>
      <Title subTitle="Gallery"  title="Compus Photos"/>
     <div className='compus'> 
        <div className="gallery">
            <img src={galler_1} alt="" />
            <img src={galler_2} alt="" />
            <img src={galler_3} alt="" />
            <img src={galler_4} alt="" />
        </div>
        <button className='btn dark-btn'>See more Here<img src={white_arrow} alt="" /></button>
     </div>
    </>
   )
 }
 
 export default Compus