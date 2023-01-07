import React from 'react'
import './SignIn.css'
import Container from '@mui/material/Container';
import { Box } from '@mui/system';
import Avatar from '@mui/material/Avatar';
import LockIcon from '@mui/icons-material/Lock';
import { Paper } from '@mui/material';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import GoogleIcon from '@mui/icons-material/Google';
import TwitterIcon from '@mui/icons-material/Twitter';

function SignIn() {
  const paperStyle = { padding: 20, height: "70vh", }
 
  return (
    <div className='bg-gradient-to-r from-sky-300 to-pink-300 main-login'>
      <Container className='login-box' maxWidth="sm">

        <div>
          <Box className="flex flex-wrap items-center" >
            <Paper elevation={20} style={paperStyle}>
              <Avatar sx={{ bgcolor: 'purple', margin: 'auto' }}>
                <LockIcon sx={{ color: 'pink' }} />
              </Avatar>
              <h1 className='text-purple-900 text-3xl p-5 font-bold text-center'>Sign in</h1>
              <div className='p-10 flex flex-wrap flex-row gap-3'>
                <TextField label="Username" placeholder='Enter user name' variant="standard" fullWidth required />
                <TextField label="Password" placeholder='Enter password' variant="standard" fullWidth required />
                <span className='text-purple-900 text-base ml-auto '>Forgot password?</span>
              </div>
              <div className=' text-center '>
                <Button sx={{ color: 'white ', fontSize: '16px' }} variant="contained" className=' w-4/5 bg-gradient-to-r from-sky-300 to-pink-300 '>Sign in</Button>
              </div>

              <div className='flex flex-wrap flex-col items-center py-14 '>
                <span className='text-purple-900 text-base capitalize font-semibold'>or sing up using</span>
                <div className='py-5 flex gap-5'>
                  <FacebookRoundedIcon sx={{ color: 'skyblue', padding:'' }} />
                  <GoogleIcon sx={{ color: 'red' }} />
                  <TwitterIcon sx={{ color: 'skyblue' }} />
                </div>
                <div className=' flex flex-wrap flex-col items-center pt-16'>
                  <span className='text-purple-900 text-base capitalize'>or sing up using</span>
                  <Button sx={{color:'purple'}} className='text-base capitalize' >Sign Up</Button>
                </div>
              </div>
            </Paper>
          </Box>
        </div>
      </Container>
    </div>
  );
}

export default SignIn;