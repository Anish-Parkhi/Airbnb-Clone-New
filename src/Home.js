import React from 'react'
import Header from './Header'
import './Home.css'
import Card_View from './Card_View'
import { Card } from '@mui/material';
import Midbar from './Midbar';
import Footer from './Footer';

function Home() {
  return (
    <div className='home'>
        <Header/>
        <hr/>
        <Midbar/>
        <div className='Card__View'>
        <Card_View/>
        <Card_View/>
        <Card_View/>
        <Card_View/>
        </div>
        <Footer/>
    </div>
  )
}

export default Home