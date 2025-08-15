import React from 'react'
import "../../App.css";
import footerImg from '../../assets/Ani1.json';
import Lottie from 'react-lottie';
const Footer = () => {
  return (
      <footer>
      <p>Designed and Made By&nbsp;</p>
      <p>John wesly Uchula</p>
      <div className='lottie'>
      <Lottie options={{
         loop: true,           
         autoplay: true,     
         animationData: footerImg, 
         rendererSettings: {
           preserveAspectRatio: 'xMidYMid slice', 
         }
      }} height={30} width={50} />
      </div>
    </footer>
  )
}

export default Footer
