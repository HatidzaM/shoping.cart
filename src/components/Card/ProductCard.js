import React from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import "./ProductCard.css";

export default function ProductCard(productName, productPrice, productImage, onPress) {
    return (
              <Card sx={{ width: 400, height: 450}}>
                <CardMedia
                  sx={{ height: 140 }}
                  image="/static/images/cards/contemplative-reptile.jpg"
                  title="green iguana"
                />
                <CardContent>
                  <div style={{background:"f00", height:70}}>
                    <Typography gutterBottom variant="h5" component="div">
                      {productName}
                    </Typography>
                  </div>
                  <Typography variant="body1" color="text.primary">
                    Price: {productPrice} EUR
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="medium">ADD TO CART</Button>
                </CardActions>
              </Card>
            );
          }