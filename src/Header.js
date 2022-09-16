import React from 'react'
import './Header.css'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import logo from './Images/logo.png'
import Nav from 'react-bootstrap/Nav';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import SearchTwoToneIcon from '@mui/icons-material/SearchTwoTone';





function Header() { 
  return (
    <div className='header'>
      
        <Navbar collapseOnSelect expand="lg" variant="dark">
            <Navbar.Brand>  
           <img className='logo_image' src={logo} alt='logo'/>
            </Navbar.Brand>
            <div className='middle__box'>
            <span className='element-1'>Anywhere </span> <span >|</span><span>Any Week</span><span className='dash'>|</span><span className='element-3'>Search Destination <SearchTwoToneIcon className='search'/></span>
            </div>
            <div className='last_text'>
                <span>Become a host <LanguageOutlinedIcon className='globe'/> <AccountCircleOutlinedIcon className='avatar'/>  </span>
            </div>
        </Navbar>
    </div>
  )
}

export default Header