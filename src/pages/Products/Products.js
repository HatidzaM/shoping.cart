// import React from "react";
// import ProductCard from "../../components/Card/ProductCard";
// import productsJSON from "../../common/productsJSON.json";

// export default function Products() {
//   return (
//     <div className="productovi">
//     {productsJSON.map((product)=>(
//     <ProductCard
//     key={product.id}
//     imageURL={product.imageURL}
//     title={product.title}
//     price={product.price}
//     quantity={product.quantity}
//     discountPercentage={product.discountPercentage}
//     discountedPrice={product.discountedPrice}
//       /> 
//     ))}
//     </div>
//   );
// }


import React, { useContext, useState } from "react";
import { AppContext } from "../../context/AppContext";
import "./Products.css";
import Pagination from "@mui/material/Pagination";
import ProductCard from "../../components/Card/ProductCard";
import { toast } from "react-hot-toast";

export default function Products() {
  const { products } = useContext(AppContext);
  const [page, setPage] = useState(1);
  const handleChange = (event, value) => {
    setPage(value);
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };
  const productsPerPage = 12;
  const numOfPages = Math.ceil(products.length / productsPerPage);
  // console.log(products);
  return (
    <>
      <div className="cards">
        {products
          .map((product) => (
            <ProductCard
              key={product.id}
              productName={product.title}
              productPrice={product.price}
              productImage={product.imageURL}
              addToCart={() => {
                toast.success("Successfully added to cart!");
              }}
              deleteFromCart={() => {
                toast.success("Successfully deleted to cart!");
              }}
            />
          ))
          .slice((page - 1) * productsPerPage, page * productsPerPage)}
      </div>
      <div className="pagination">
        <Pagination
          size="large"
          count={numOfPages}
          page={page}
          onChange={handleChange}
        />
      </div>
    </>
  );
}
