import React, { useContext } from "react";
import "./CartCards.css";
import { AppContext } from "../../context/AppContext";
import { Modal } from "@mui/material";
import ModalClose from "@mui/joy/ModalClose";
import Typography from "@mui/joy/Typography";
import ModalDialog from "@mui/joy/ModalDialog";
import Button from "@mui/joy/Button";

import { useState } from "react";
import DeleteButton from "../Button/DeleteButton";
export default function CartCards({
  id,
  productName,
  productPrice,
  productImage,
  currencySign,
  quantity,
}) {
  const { deleteFromCart, increase, decrease } = useContext(AppContext);
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="cart-card">
      <img className="product-image" src={productImage} alt={productName} />
      <div className="product-details">
        <h2 className="productName">{productName}</h2>
        <p className="productPrice"> Price of item: {productPrice}{currencySign}EUR</p>
        <p className="productPricet"> Total price: {productPrice * quantity}{currencySign}EUR </p>
        <div className="details2">
        
        <button className="plusminus"
              color="success"
              onClick={() => {
                increase(id);
              }}
              style={{ width: 30 }}
            >
              +
            </button>
        {/* <p></p> */}
        <p className="product-quantity">Quantity: {quantity}</p>
        <button className="plusminus"
              color="success"
              onClick={() => {
                decrease(id);
              }}
              style={{ width: 30, marginTop:"4px" }}
            >
              -
            </button>
        </div>
        {/* <div>
          <DeleteButton 
            onDelete={() => {
              deleteFromCart(id);
            }}
          />
        </div> */}
        <div>
          <DeleteButton className="clr-button" onDelete={handleOpen}>
            Open modal
          </DeleteButton>
          <Modal open={open} onClose={handleClose}>
            <ModalDialog color="danger" size="lg" variant="soft">
              <Typography style={{ margin: "20px" }}>
                Are you sure you want to remove <br></br>this product?
              </Typography>
              <div
                className="buttons"
                style={{ display: "flex", justifyContent: "center", gap:"15px"}}
              >
                <Button
                  onClick={() => {
                    deleteFromCart(id);
                  }}
                >
                YES  
                </Button>

                <Button onClick={handleClose}>NO</Button>
              </div>
              <ModalClose onClick={handleClose} />
            </ModalDialog>
          </Modal>
        </div>
      </div>
    </div>
  );
}
