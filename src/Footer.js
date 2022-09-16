import React from 'react'
import './Footer.css'
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';

function Footer() {
  return (
    <div className='footer'>
        <div className='inner-div' >
        <span className='para text-mute'>©2022 Airbnb Clone,Inc. <button  className='btn2 text-mute'> Privacy   </button></span>
        <button  className='btn2 text-mute'>  Terms  </button>
        <button  className='btn2 text-mute'>  Sitemap</button>
        <button  className='btn2 text-mute'>  Company details </button>
        <button  className='btn2 text-mute'>  Destinations </button>
        
        <span className='left-text' ><LanguageOutlinedIcon/> <span className='launguage' >English(IN) </span> <span className='currency' >₹ INR</span>  Support and Resources </span>
        </div>
        
    </div>
  )
}

export default Footer