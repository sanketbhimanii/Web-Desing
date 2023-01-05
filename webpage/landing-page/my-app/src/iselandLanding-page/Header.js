import React, { useEffect, useState } from 'react';
import { AppBar, Collapse, IconButton, Toolbar } from '@mui/material';
import SortIcon from '@mui/icons-material/Sort';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const Header = () => {
  const [checked, setChecked]=useState(false);
  useEffect(()=>{
    setChecked(true);
  },[])
  return (
   
   <div className='header'>
      <AppBar className='header-appBar'>
        <Toolbar className='appbar-wrapper'>
          <h1 className='appbarTitle'>My <span className='colorText'>Island.</span></h1>
          <IconButton>
            <SortIcon className='header-icone' />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Collapse in={checked} {...(checked ? { timeout: 1000 } : {})} collapsedHeight={20}>
        <div className='container'>
          <h1 className='headerTitle'>Welcome to<br />My <span className='colorText'>Island.</span></h1>
          <IconButton>
            <KeyboardArrowDownIcon className='containerArrowdown' />
          </IconButton>
        </div>
      </Collapse>
    </div>
  )
}

export default Header;