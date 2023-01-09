import React from 'react'
import { AppBar, IconButton, Toolbar } from '@mui/material';
import SortIcon from '@mui/icons-material/Sort';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

function Header() {
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
      <div className='container'>
        <h1 className='headerTitle'>Welcome to<br />My <span className='colorText'>Island.</span></h1>
        <IconButton>
        <KeyboardArrowDownIcon className='containerArrowdown'/>
        </IconButton>
      </div>
    </div>
  )
}

export default Header;