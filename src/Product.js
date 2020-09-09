import React from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";

function Product({ id, title, image, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();

  const addToBasket = () => {
    //dispatch some item into the datalayer
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };
  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {/* whatever we pass in the prop value of product will be shown in star here
           */}
          {Array(rating)
            .fill()
            .map((_, i) => {
              return <p>&#9734;</p>;
            })}
        </div>
      </div>

      <img src={image} alt="product-image" />

      <button onClick={addToBasket}>Add to Basket</button>
    </div>
  );
}

export default Product;
