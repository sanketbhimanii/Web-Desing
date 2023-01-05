import React from 'react'
import './Island.css';
import Header from './Header';
import PlaceTovisit from './PlaceTovisit';

const Island = () => {
  return (
    <div className='classes-root'>
      <Header />
      <PlaceTovisit/>
    </div>
  )
}

export default Island;