import React from 'react'
import './Midbar.css'
import BeachAccessIcon from '@mui/icons-material/BeachAccessOutlined';
import { Button } from '@mui/material';
import PoolOutlinedIcon from '@mui/icons-material/PoolOutlined';
import ParkOutlinedIcon from '@mui/icons-material/ParkOutlined';
import VillaOutlinedIcon from '@mui/icons-material/VillaOutlined';
import CabinOutlinedIcon from '@mui/icons-material/CabinOutlined';
import CottageOutlinedIcon from '@mui/icons-material/CottageOutlined';
import AcUnitOutlinedIcon from '@mui/icons-material/AcUnitOutlined';
import HouseboatOutlinedIcon from '@mui/icons-material/HouseboatOutlined';
import LocalCafeOutlinedIcon from '@mui/icons-material/LocalCafeOutlined';
import KitesurfingOutlinedIcon from '@mui/icons-material/KitesurfingOutlined';
import GolfCourseOutlinedIcon from '@mui/icons-material/GolfCourseOutlined';
import SailingOutlinedIcon from '@mui/icons-material/SailingOutlined';
import DownhillSkiingOutlinedIcon from '@mui/icons-material/DownhillSkiingOutlined';
import SnowmobileOutlinedIcon from '@mui/icons-material/SnowmobileOutlined';

function Midbar() {
  return (
    <div className='btn1'>
        <button className='button'>
        <BeachAccessIcon/>
        <p className='text-muted bottom-text beach'>Beaches</p>
        </button>
        <button className='button'>
        <PoolOutlinedIcon/>
        <p className='text-muted bottom-text beach'>Pools</p>
        </button>
        <button className='button'>
        <ParkOutlinedIcon/>
        <p className='text-muted bottom-text beach'>Forests</p>
        </button>
        <button className='button'>
        <VillaOutlinedIcon/>
        <p className='text-muted bottom-text beach'>Villas</p>
        </button>
        <button className='button'>
        <CottageOutlinedIcon/>
        <p className='text-muted bottom-text beach'>House</p>
        </button>
        <button className='button'>
        <AcUnitOutlinedIcon/>
        <p className='text-muted bottom-text beach'>Artic</p>
        </button>
        

        <button className='button'>
        <LocalCafeOutlinedIcon/>
        <p className='text-muted bottom-text beach'>Cafe</p>
        </button>

        <button className='button'>
        <KitesurfingOutlinedIcon/>
        <p className='text-muted bottom-text beach'>Surfing</p>
        </button>

        <button className='button'>
        <SailingOutlinedIcon/>
        <p className='text-muted bottom-text beach'>Sailing</p>
        </button>

        <button className='button'>
        <DownhillSkiingOutlinedIcon/>
        <p className='text-muted bottom-text beach'>Ski</p>
        </button>

        <button className='button'>
        <SnowmobileOutlinedIcon/>
        <p className='text-muted bottom-text beach'>SnowMobile</p>
        </button>

        <button className='button house_boat'>
        <HouseboatOutlinedIcon/>
        <p className='text-muted bottom-text beach'>Houseboat</p>
        </button>


        

        
        
    </div>
  )
}

export default Midbar