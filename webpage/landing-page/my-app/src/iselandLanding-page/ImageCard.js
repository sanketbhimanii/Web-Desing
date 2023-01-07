import * as React from 'react';
import "./Island.css"
import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
// import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
// import { makeStyles } from '@mui/material';
import image from "./assets/island-one.jpg"
import imageTwo from "./assets/island-two.jpg"


export default function ImageCard() {
  return (
    <div className='card'>
      <Card sx={{ maxWidth: 645 }}>
        <CardMedia
          sx={{ height: 440 }}
          image={image}
          title="island-image"
        />
        <CardContent className='first-card card-information'>
          <Typography
            gutterBottom
            variant="h2"
            component="h1"
            color={'#7f9ac2'}
            fontFamily={'Nunito'}
            fontWeight={'bold'}
            fontSize={'2rem'}>

            Lizard
          </Typography>
          <Typography variant="h6" color="white">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </Card>

      <Card sx={{ maxWidth: 645 }}>
        <CardMedia
          sx={{ height: 440 }}
          image={imageTwo}
          title="island-image"
        />
        <CardContent className='first-card card-information'>
          <Typography
            gutterBottom
            variant="h2"
            component="h1"
            color={'#7f9ac2'}
            fontFamily={'Nunito'}
            fontWeight={'bold'}
            fontSize={'2rem'}>

            Lizard
          </Typography>
          <Typography variant="h6" className='text-white'>
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </Card>
    </div>



  );
}
