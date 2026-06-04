import React, { useState } from 'react'
import styled from 'styled-components';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import Container from '@mui/material/Container';
import './RnM.css';

const RnM = () => {


  return (
    <div>
      <Container maxWidth="xl" sx={{backgroundColor:'rgb(39, 43, 51)', display:'flex', gap:'30px',paddingBottom:'30px'}}>
        <Box>
          <Card sx={{display: 'flex', backgroundColor:'rgb(60, 62, 68)', height: '200px', width: '600px',marginTop:'30px', borderRadius:'10px'}}>
            <Box sx={{display: 'flex', flexDirection: 'row'}}>
            <CardMedia
            image='https://rickandmortyapi.com/api/character/avatar/62.jpeg'
            sx={{width: '250px', height: '200px', backgroundSize: 'contain',marginLeft:'-25px'}}
            />
            <CardContent>
            <Typography component="div" sx={{fontSize: '30px', marginLeft: '-30px', marginTop:'-15px', fontWeight:'800', color: 'white'}}>
            Canklanker Thom
            </Typography>
            <Typography variant="subtitle1" gutterBottom sx={{color:'white' , fontWeight:'bold', marginTop:'-7px'}}>
              <FiberManualRecordIcon sx={{height: '1rem', width: '0.75rem', marginRight: '0.375rem', marginLeft: '-20px', color : 'rgb(214, 61, 46)',borderRadius: '50%'}}/>
                Dead - Alien
            </Typography>
            <Typography gutterBottom sx={{ display: 'block', color: 'grey', fontSize:'15px' , fontWeight:'bold', marginLeft: '-20px',  marginTop:"10px"}}>
            Last known location:
            </Typography>
            <Typography  gutterBottom sx={{ display: 'block', color: 'white', marginLeft: '-20px' }}>
            unknown
            </Typography>
            <Typography gutterBottom sx={{ display: 'block', color: 'grey', fontSize:'15px' , fontWeight:'bold', marginLeft: '-20px',  marginTop:"10px"}}>
            First seen in:
            </Typography>
            <Typography  gutterBottom sx={{ display: 'block', color: 'white', marginLeft: '-20px' }}>
            Pilot
            </Typography>
            </CardContent>
            </Box>
          </Card>

          <Card sx={{display: 'flex', backgroundColor:'rgb(60, 62, 68)', height: '200px', width: '600px', marginTop:'30px', borderRadius:'10px'}}>
            <Box sx={{display: 'flex', flexDirection: 'row'}}>
            <CardMedia
            image='https://rickandmortyapi.com/api/character/avatar/314.jpeg'
            sx={{width: '250px', height: '200px', backgroundSize: 'contain',marginLeft:'-25px'}}
            />
            <CardContent>
            <Typography component="div" sx={{fontSize: '27px', marginLeft: '-30px', marginTop:'-15px', fontWeight:'800', color: 'white'}}>
            Shmlamantha Shmlicelli
            </Typography>
            <Typography variant="subtitle1" gutterBottom sx={{color:'white' , fontWeight:'bold', marginTop:'-7px'}}>
              <FiberManualRecordIcon sx={{height: '1rem', width: '0.75rem', marginRight: '0.375rem', marginLeft: '-20px', color : 'rgb(85, 204, 68)',borderRadius: '50%'}}/>
                Alive - Human
            </Typography>
            <Typography gutterBottom sx={{ display: 'block', color: 'grey', fontSize:'15px' , fontWeight:'bold', marginLeft: '-20px',  marginTop:"10px"}}>
            Last known location:
            </Typography>
            <Typography  gutterBottom sx={{ display: 'block', color: 'white', marginLeft: '-20px' }}>
            Interdimensional Cable
            </Typography>
            <Typography gutterBottom sx={{ display: 'block', color: 'grey', fontSize:'15px' , fontWeight:'bold', marginLeft: '-20px',  marginTop:"10px"}}>
            First seen in:
            </Typography>
            <Typography  gutterBottom sx={{ display: 'block', color: 'white', marginLeft: '-20px' }}>
            Rixty Minutes
            </Typography>
            </CardContent>
            </Box>
          </Card>

           <Card sx={{display: 'flex', backgroundColor:'rgb(60, 62, 68)', height: '200px', width: '600px', marginTop:'30px', borderRadius:'10px'}}>
            <Box sx={{display: 'flex', flexDirection: 'row'}}>
            <CardMedia
            image='https://rickandmortyapi.com/api/character/avatar/420.jpeg'
            sx={{width: '250px', height: '200px', backgroundSize: 'contain',marginLeft:'-25px'}}
            />
            <CardContent>
            <Typography component="div" sx={{fontSize: '30px', marginLeft: '-30px', marginTop:'-15px', fontWeight:'800', color: 'white'}}>
            Plutonian Host
            </Typography>
            <Typography variant="subtitle1" gutterBottom sx={{color:'white' , fontWeight:'bold', marginTop:'-7px'}}>
              <FiberManualRecordIcon sx={{height: '1rem', width: '0.75rem', marginRight: '0.375rem', marginLeft: '-20px', color : 'rgb(85, 204, 68)',borderRadius: '50%'}}/>
                Alive - Alien
            </Typography>
            <Typography gutterBottom sx={{ display: 'block', color: 'grey', fontSize:'15px' , fontWeight:'bold', marginLeft: '-20px',  marginTop:"10px"}}>
            Last known location:
            </Typography>
            <Typography  gutterBottom sx={{ display: 'block', color: 'white', marginLeft: '-20px' }}>
           Pluto
            </Typography>
            <Typography gutterBottom sx={{ display: 'block', color: 'grey', fontSize:'15px' , fontWeight:'bold', marginLeft: '-20px',  marginTop:"10px"}}>
            First seen in:
            </Typography>
            <Typography  gutterBottom sx={{ display: 'block', color: 'white', marginLeft: '-20px' }}>
            Something Ricked This Way Comes
            </Typography>
            </CardContent>
            </Box>
          </Card>

        </Box>

        <Box >
          <Card sx={{display: 'flex', backgroundColor:'rgb(60, 62, 68)', height: '200px', width: '600px',marginTop:'30px', borderRadius:'10px'}}>
            <Box sx={{display: 'flex', flexDirection: 'row'}}>
            <CardMedia
            image='https://rickandmortyapi.com/api/character/avatar/155.jpeg'
            sx={{width: '250px', height: '200px', backgroundSize: 'contain',marginLeft:'-25px'}}
            />
            <CardContent>
            <Typography component="div" sx={{fontSize: '30px', marginLeft: '-30px', marginTop:'-15px', fontWeight:'800', color: 'white'}}>
            Harold
            </Typography>
            <Typography variant="subtitle1" gutterBottom sx={{color:'white' , fontWeight:'bold', marginTop:'-7px'}}>
              <FiberManualRecordIcon sx={{height: '1rem', width: '0.75rem', marginRight: '0.375rem', marginLeft: '-20px', color : 'rgb(85, 204, 68)',borderRadius: '50%'}}/>
                Alive - Cronenberg
            </Typography>
            <Typography gutterBottom sx={{ display: 'block', color: 'grey', fontSize:'15px' , fontWeight:'bold', marginLeft: '-20px',  marginTop:"10px"}}>
            Last known location:
            </Typography>
            <Typography  gutterBottom sx={{ display: 'block', color: 'white', marginLeft: '-20px' }}>
            Earth (C-137)
            </Typography>
            <Typography gutterBottom sx={{ display: 'block', color: 'grey', fontSize:'15px' , fontWeight:'bold', marginLeft: '-20px',  marginTop:"10px"}}>
            First seen in:
            </Typography>
            <Typography  gutterBottom sx={{ display: 'block', color: 'white', marginLeft: '-20px' }}>
           Rick Potion #9
            </Typography>
            </CardContent>
            </Box>
          </Card>

          <Card sx={{display: 'flex', backgroundColor:'rgb(60, 62, 68)', height: '200px', width: '600px', marginTop:'30px', borderRadius:'10px'}}>
            <Box sx={{display: 'flex', flexDirection: 'row'}}>
            <CardMedia
            image='https://rickandmortyapi.com/api/character/avatar/334.jpeg'
            sx={{width: '250px', height: '200px', backgroundSize: 'contain',marginLeft:'-25px'}}
            />
            <CardContent>
            <Typography component="div" sx={{fontSize: '27px', marginLeft: '-30px', marginTop:'-15px', fontWeight:'800', color: 'white'}}>
           Stealy
            </Typography>
            <Typography variant="subtitle1" gutterBottom sx={{color:'white' , fontWeight:'bold', marginTop:'-7px'}}>
              <FiberManualRecordIcon sx={{height: '1rem', width: '0.75rem', marginRight: '0.375rem', marginLeft: '-20px', color : 'rgb(85, 204, 68)',borderRadius: '50%'}}/>
               Alive - Poopybutthole
            </Typography>
            <Typography gutterBottom sx={{ display: 'block', color: 'grey', fontSize:'15px' , fontWeight:'bold', marginLeft: '-20px',  marginTop:"10px"}}>
            Last known location:
            </Typography>
            <Typography  gutterBottom sx={{ display: 'block', color: 'white', marginLeft: '-20px' }}>
            Interdimensional Cable
            </Typography>
            <Typography gutterBottom sx={{ display: 'block', color: 'grey', fontSize:'15px' , fontWeight:'bold', marginLeft: '-20px',  marginTop:"10px"}}>
            First seen in:
            </Typography>
            <Typography  gutterBottom sx={{ display: 'block', color: 'white', marginLeft: '-20px' }}>
           Interdimensional Cable 2: Tempting Fate
            </Typography>
            </CardContent>
            </Box>
          </Card>

           <Card sx={{display: 'flex', backgroundColor:'rgb(60, 62, 68)', height: '200px', width: '600px', marginTop:'30px', borderRadius:'10px'}}>
            <Box sx={{display: 'flex', flexDirection: 'row'}}>
            <CardMedia
            image='https://rickandmortyapi.com/api/character/avatar/533.jpeg'
            sx={{width: '250px', height: '200px', backgroundSize: 'contain',marginLeft:'-25px'}}
            />
            <CardContent>
            <Typography component="div" sx={{fontSize: '30px', marginLeft: '-30px', marginTop:'-15px', fontWeight:'800', color: 'white'}}>
            Monogatron Queen
            </Typography>
            <Typography variant="subtitle1" gutterBottom sx={{color:'white' , fontWeight:'bold', marginTop:'-7px'}}>
              <FiberManualRecordIcon sx={{height: '1rem', width: '0.75rem', marginRight: '0.375rem', marginLeft: '-20px', color : 'rgb(85, 204, 68)',borderRadius: '50%'}}/>
                Alive - Alien
            </Typography>
            <Typography gutterBottom sx={{ display: 'block', color: 'grey', fontSize:'15px' , fontWeight:'bold', marginLeft: '-20px',  marginTop:"10px"}}>
            Last known location:
            </Typography>
            <Typography  gutterBottom sx={{ display: 'block', color: 'white', marginLeft: '-20px' }}>
          Monogatron Mothership
            </Typography>
            <Typography gutterBottom sx={{ display: 'block', color: 'grey', fontSize:'15px' , fontWeight:'bold', marginLeft: '-20px',  marginTop:"10px"}}>
            First seen in:
            </Typography>
            <Typography  gutterBottom sx={{ display: 'block', color: 'white', marginLeft: '-20px' }}>
            The Old Man and the Seat
            </Typography>
            </CardContent>
            </Box>
          </Card>

        </Box>

      </Container>
    </div>
  )
}

export default RnM
