import React, { useState } from 'react';

import { 
  Card, 
  CardMedia, 
  CardContent, 
  Typography, 
  CardActionArea, 
  Dialog, 
  DialogTitle, 
  DialogContent, 
  Button,
  Grid
} from '@mui/material';

import watch1 from './srcassets/ai_product_pic_1.jpg';
import watch2 from './srcassets/ai_product_pic_2.jpg';
import watch3 from './srcassets/ai_product_pic_3.jpg';

const watchCollection = [
  { id: 1, name: 'Velocità Aero', specs: 'Automatic, Ø 41mm', price: '$250.00', img: watch1 },
  { id: 2, name: 'Velocità Corsa', specs: 'Quartz, Ø 44mm', price: '$430.00', img: watch2 },
  { id: 3, name: 'Velocità Vita', specs: 'Automatic, Ø 42mm', price: '$360.00', img: watch3 },
];

const Sample = () => {
    const [selectedWatch, setSelectedWatch] = useState(null);
    
  return (
    <div>
      
   <Grid container spacing={4}>
      {watchCollection.map((watch) => (
        
       
        <Grid item xs={12} sm={6} md={4} key={watch.id}>
          
          <CardActionArea onClick={() => setSelectedWatch(watch)}>
            <Card sx={{ boxShadow: 'none', bgcolor: 'transparent', textAlign: 'center' }}>
              <CardMedia
                component="img"
                image={watch.img}
                alt={watch.name}
                sx={{ height: '300px', objectFit: 'contain' }}
              />
              <CardContent>
                <Typography variant="h5">{watch.name}</Typography>
                <Typography variant="body2" color="text.secondary">{watch.specs}</Typography>
                <Typography variant="body1" sx={{ mt: 1, fontWeight: 'bold' }}>{watch.price}</Typography>
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
      
      <DialogContent sx={{ textAlign: 'center' }}>
        <img 
          src={selectedWatch.img} 
          alt={selectedWatch.name} 
          style={{ width: '100%', maxHeight: '250px', objectFit: 'contain', marginBottom: '15px' }} 
        />
        <Typography variant="subtitle1" color="text.secondary" gutterBottom>
          {selectedWatch.specs}
        </Typography>
        <Typography variant="body2" sx={{ my: 2 }}>
          This masterpiece is crafted with precision engineering, premium materials, and a scratch-resistant design built for true collectors.
        </Typography>
        <Typography variant="h6" color="primary" sx={{ fontWeight: 'bold', mb: 2 }}>
          {selectedWatch.price}
        </Typography>
        <Button variant="contained" fullWidth onClick={() => setSelectedWatch(null)}>
          Close Details
        </Button>
      </DialogContent> 
    </> 
  )}
</Dialog>

    </div>
  )
}

export default Sample
