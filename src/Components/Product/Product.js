import React from "react";
import { addTodb } from "../../Utilities/fakedb";
import './Product.css'

const Product = (props) => {
  // console.log(props)
  const { name, id, price } = props.product;
  const addToCart = (id) => {
    addTodb(id)
  };
  return (
    <div className="product">
      <h1>Name:{name}</h1>
      <h2>Price: ${price}</h2>
      <h2>ID: {id}</h2>
      <button onClick={() => addToCart(id)}>Add to Cart</button>
    </div>
  );
};

export default Product;
