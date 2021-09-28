import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import './css/style.css'

export default function ActionAreaCard({title,src,className,children}) {
  return (
    <Card className={`${className}`} sx={{ maxWidth: {md:500}, m:1 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          image={src}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" className="headingColor" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
           {children}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
