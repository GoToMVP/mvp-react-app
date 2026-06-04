import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';

import './Mui.css';
import { 
  Card, 
  CardMedia, 
  CardContent, 
  CardActionArea, 
  Dialog, 
  DialogTitle, 
  DialogContent, 
  Grid,
  TextField, 
  Link,
} from '@mui/material';

import watch1 from './srcassets/ai_product_pic_1.jpg';
import watch2 from './srcassets/ai_product_pic_2.jpg';
import watch3 from './srcassets/ai_product_pic_3.jpg';

const watchCollection = [
  { id: 1, name: 'Velocità Aero', specs: 'Automatic, Ø 41mm, Black', price: '$250.00', img: watch1 },
  { id: 2, name: 'Velocità Corsa', specs: 'Quartz Chronograph, Ø 44mm, Leather', price: '$430.00', img: watch2 },
  { id: 3, name: 'Velocità Vita', specs: 'Automatic, Ø 42mm, Black', price: '$360.00', img: watch3 },
];


const Mui = () => {
  const [selectedWatch, setSelectedWatch] = useState(null);

  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleChange = (event) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
     
    </Box>
  );
 
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
      <FormGroup>
        <FormControlLabel
          control={
            <Switch
              checked={auth}
              onChange={handleChange}
              aria-label="login switch"
            />
          }
          label={auth ? 'Logout' : 'Login'}
        />
      </FormGroup>
      <AppBar position="static">
        <Toolbar>
           <Button onClick={toggleDrawer(true)}>
             <IconButton
            size="large"
            edge="start"
            color="black"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
           </Button>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontFamily:'Ibarra Real Nova', fontSize:'25px' }}>
            orologio
          </Typography>
          {auth && (
            <div>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
                <MenuItem onClick={handleClose}>Log In</MenuItem>
              </Menu>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </Box>

     <Box
      sx={{
        
        width: '100vw',
        height: '100vh',

        
        backgroundImage: 'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfclDwWR3OkfhPIBkSv95WHvwKzA2Ol9QvSJiJ9Gkcfg&s")', 

       
        backgroundSize: 'cover',      
        backgroundPosition: 'center', 
        backgroundRepeat: 'no-repeat',
        
       
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
        backgroundBlendMode: 'overlay',

       
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#fff',
      }}
    >
      <Container maxWidth="md" sx={{ textAlign: 'center' }}>
        <Typography variant="h2" component="h1" sx={{ fontWeight: 'bold', mb: 2 }}>
          TIMELESS LUXURY
        </Typography>
        <Typography variant="h5" sx={{ mb: 4, opacity: 0.9 }}>
          Experience craftsmanship that lasts generations.
        </Typography>
        <Button variant="contained" color="primary" size="large">
          Explore Collection
        </Button>
      </Container>
    </Box>     

      <Box sx={{
        width : '100vw',
        height: '200px',
        backgroundColor : 'white',
        color: 'black'
      }}>
        <Container maxWidth="md" sx={{ textAlign: 'center' }}>
             <Typography  gutterBottom sx={{marginTop: '70px',
              fontStyle : 'Manrope',
              letterSpacing : '2px',
              fontSize : 'big'
             }}>
                DISCOVER
      </Typography>
      <Container sx={{ textAlign: 'center', 
        display : 'flex',
        justifyContent : 'center',
        gap : '20px'
      }}>
          <Typography  gutterBottom sx={{fontStyle : 'italic',
            fontFamily: 'Ibarra Real Nova',
            fontSize:'70px'
          }}>
        Our
          </Typography>
          <Typography  gutterBottom sx={{ fontFamily: 'Ibarra Real Nova',
            textTransform: 'uppercase',
            fontSize:'70px'
          }}>
        collection
      </Typography>
      </Container>
        </Container>
      </Box>

      <Grid container spacing={4} sx={{backgroundColor:'#fbf6f1'}}>
      {watchCollection.map((watch) => (
        
       
        <Grid item xs={12} sm={6} md={4} key={watch.id}>
          
          <CardActionArea onClick={() => setSelectedWatch(watch)} sx={{backgroundColor:'#fbf6f1'}}>
            <Card sx={{ boxShadow: 'none', bgcolor: '#fbf6f1', textAlign: 'center' }}>
              <CardMedia
                component="img"
                image={watch.img}
                alt={watch.name}
                sx={{ height: '390px', objectFit: 'contain' }}
              />
              <CardContent>
                <Typography variant="h5" sx={{fontFamily:'Ibbara Real Nova', marginBottom:'20px'}}>{watch.name}</Typography>
                <Typography variant="body2" color="text.secondary" sx={{fontSize:'17px',  marginBottom:'20px'}}>{watch.specs}</Typography>
                <Typography variant="body1" sx={{ mt: 1, fontWeight: '500', marginBottom:'20px',fontFamily:'Ibbara Real Nova', fontSize:'19px'}}>{watch.price}</Typography>
                <ShoppingBagOutlinedIcon sx={{color: 'grey'}}/>
              </CardContent>
            </Card>
          </CardActionArea>

        </Grid>
      ))}
    </Grid>

    <Dialog 
  open={Boolean(selectedWatch)} 
  onClose={() => setSelectedWatch(null)} 
  maxWidth="xs"
  fullWidth
>
  
  {selectedWatch && (
    <> 
      <DialogTitle sx={{ textAlign: 'center', fontWeight: 'bold' }}>
        {selectedWatch.name}
      </DialogTitle>
      
      <DialogContent sx={{ textAlign: 'center' ,backgroundColor:'#fbf6f1' }} >
        <img 
          src={selectedWatch.img} 
          alt={selectedWatch.name} 
          style={{ width: '385px', maxHeight: '250px', objectFit: 'contain', marginBottom: '15px' }} 
        />
        <Typography variant="subtitle1" color="text.secondary" gutterBottom>
          {selectedWatch.specs}
        </Typography>
        <Typography variant="body2" sx={{ my: 2 }}>
          This masterpiece is crafted with precision engineering, premium materials, and a scratch-resistant design built for true collectors.
        </Typography>
        <Typography variant="h6" color="primary" sx={{ fontWeight: 'bold', mb: 2, color:'black'}}>
          {selectedWatch.price}
        </Typography>
        <Button variant="contained" fullWidth onClick={() => setSelectedWatch(null)} sx={{backgroundColor:'brown'}}>
          Close Details
        </Button>
      </DialogContent> 
    </> 
  )}
</Dialog>

<Box 
  component="footer" 
  sx={{ 
    width: '100vw', 
    position: 'relative', 
    left: '50%', 
    right: '50%', 
    marginLeft: '-50vw', 
    marginRight: '-50vw',
    mt: 0,
    pt: 0,
    bgcolor: '#000000', 
    color: '#ffffff'
  }}
>
  
  <Box sx={{ bgcolor: '#F9F6F0', color: '#000000', py: 5, px: { xs: 3, md: 10 }, width: '100%' }}>
    <Container maxWidth="xl" disableGutters>
      <Grid container spacing={3} alignItems="center">
        <Grid item xs={12} md={5}>
          <Typography 
            variant="h4" 
            sx={{ 
              fontFamily: '"Playfair Display", serif', 
              fontStyle: 'italic',
              fontWeight: 400,
              fontSize: { xs: '2rem', md: '2.5rem' }
            }}
          >
            Sign up to Orologio
          </Typography>
        </Grid>
        
        <Grid item xs={12} md={7}>
          <Box 
            component="form" 
            sx={{ 
              display: 'flex', 
              alignItems: 'center', 
              borderBottom: '1px solid #c8c8c8', 
              pb: 1,
              maxWidth: '600px',
              ml: { md: 'auto' } 
            }}
          >
            <TextField
              variant="standard"
              placeholder="Your email address"
              fullWidth
              InputProps={{
                disableUnderline: true,
                style: { 
                  color: '#000000', 
                  fontFamily: 'sans-serif',
                  fontSize: '1rem',
                  letterSpacing: '0.05em'
                },
              }}
            />
            <Button 
              variant="text" 
              sx={{ 
                color: '#000000', 
                fontWeight: 600, 
                letterSpacing: '0.2em',
                fontSize: '0.75rem',
                minWidth: 'max-content', 
                p: 0,
                ml: 4
              }}
            >
              SIGN UP
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Container>
  </Box>

  
  <Box sx={{ py: 10, px: { xs: 3, md: 10 }, bgcolor: '#000000' }}>
    <Container maxWidth="xl" disableGutters>
      <Grid container spacing={4} justifyContent="space-between">
        
      
        <Grid item xs={12} md={4}>
          <Typography 
            variant="h3" 
            sx={{ 
              fontFamily: '"Playfair Display", serif', 
              fontWeight: 500, 
              fontSize: '3.2rem',
              letterSpacing: '-0.02em',
              mb: 1
            }}
          >
            .orologio
          </Typography>
          <Typography 
            variant="body2" 
            sx={{ 
              fontFamily: '"Playfair Display", serif', 
              fontStyle: 'italic', 
              color: '#A1A1A6',
              fontSize: '0.9rem',
              letterSpacing: '0.03em'
            }}
          >
            Orologio 
          </Typography>
        </Grid>

        
        <Grid item xs={12} md={7}>
          <Grid container spacing={2} justifyContent="flex-end">
            
            
            <Grid item xs={12} sm={4} sx={{ textAlign: { xs: 'left', sm: 'right' }, pr: { sm: 4 } }}>
              <Typography variant="subtitle2" sx={{ letterSpacing: '0.2em', fontWeight: 700, mb: 3, color: '#ffffff', fontSize: '0.8rem' }}>
                LINKS
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                {['ABOUT', 'COLLECTIONS', 'CONTACT'].map((text) => (
                  <Link 
                    key={text}
                    href="#" 
                    underline="none" 
                    sx={{ color: '#A1A1A6', fontSize: '0.8rem', letterSpacing: '0.15em', fontWeight: 600, '&:hover': { color: '#ffffff' } }}
                  >
                    {text}
                  </Link>
                ))}
              </Box>
            </Grid>

            
            <Grid item xs={12} sm={4} sx={{ textAlign: { xs: 'left', sm: 'right' }, pr: { sm: 4 } }}>
              <Typography variant="subtitle2" sx={{ letterSpacing: '0.2em', fontWeight: 700, mb: 3, color: '#ffffff', fontSize: '0.8rem' }}>
                SOCIAL
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                {['INSTAGRAM', 'FACEBOOK', 'LINKEDIN', 'TWITTER'].map((text) => (
                  <Link 
                    key={text}
                    href="#" 
                    underline="none" 
                    sx={{ color: '#A1A1A6', fontSize: '0.8rem', letterSpacing: '0.15em', fontWeight: 600, '&:hover': { color: '#ffffff' } }}
                  >
                    {text}
                  </Link>
                ))}
              </Box>
            </Grid>

            
            <Grid item xs={12} sm={4} sx={{ textAlign: { xs: 'left', sm: 'right' } }}>
              <Typography variant="subtitle2" sx={{ letterSpacing: '0.2em', fontWeight: 700, mb: 3, color: '#ffffff', fontSize: '0.8rem' }}>
                CONTACT
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <Typography sx={{ color: '#A1A1A6', fontSize: '0.85rem', letterSpacing: '0.05em' }}>
                  +91 97730 48013
                </Typography>
                <Link 
                  href="mailto:SERVICE@EMAIL.COM" 
                  underline="none" 
                  sx={{ color: '#A1A1A6', fontSize: '0.85rem', letterSpacing: '0.05em', '&:hover': { color: '#ffffff' } }}
                >
                  Pmaxx678@gmail.com
                </Link>
                
              </Box>
            </Grid>

          </Grid>
        </Grid>

      </Grid>
    </Container>
  </Box>
</Box>
          
    </div>
  )
}

export default Mui
