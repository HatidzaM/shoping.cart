import React from "react";
import ProductCard from "../../components/Card/ProductCard";
import productsJSON from "../../common/productsJSON.json";

export default function Products() {
  return (
    <div className="productovi">
    {productsJSON.map((product)=>(
    <ProductCard
    key={product.id}
    imageURL={product.imageURL}
    title={product.title}
    price={product.price}
    quantity={product.quantity}
    discountPercentage={product.discountPercentage}
    discountedPrice={product.discountedPrice}
      /> 
    ))}
    </div>
  );
}
