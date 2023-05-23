import React from "react";
import ProductCard from "../../components/Card/ProductCard";
import products from "../../common/products.json";

export default function Products() {
  return (
    <div className="products">
    {products.map((product)=>(
      <a href={"products/" + product.id.toString()}>
    <ProductCard
    key={product.id}
    imageURL={product.imageURL}
    title={product.title}
    price={product.price}
    quantity={product.quantity}
    discountPercentage={product.discountPercentage}
    discountedPrice={product.discountedPrice}
      /> </a> 
    ))}
    </div>
  );
}
