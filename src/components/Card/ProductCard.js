import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import "./ProductCard.css";
// import productsJSON from "../../common/productsJSON.json";

export default function ProductCard(productName, productPrice, productImage, onClick) {
    return (
<div className="kartica">
              <Card  sx={{ width: 300, height: 350 }}>
                <img
                  style={{ height: 300, width: 400, objectFit: "cover" }}
                  src={productImage}
                  alt="product"
                />
                <CardContent>
                  <div style={{background:"f00", height:70}}>
                    <Typography gutterBottom variant="h5" component="div">
                      {productName.title}
                    </Typography>
                  </div>
                  <div className="description">
                    <Typography variant="body1" color="text.primary" size="large" fontSize={20} fontWeight={600}>
                      Price: {productPrice.price} EUR
                    </Typography>
                    <Button size="medium" variant="outlined" color="success" onClick={onClick}> ADD TO CART </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
            );
          }