import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        {/* banner */}
        <img
          className="home__image"
          src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_45M_v2_1x._CB432458380_.jpg"
          alt="banner-image"
        />

        <div className="home__row">
          <Product
            id="862746984614"
            title="The Lean Startup"
            price={29.99}
            image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/July/amazonbasics_520x520._SY304_CB442725065_.jpg"
            rating={5}
          />
          <Product
            id="862734255237614"
            title="The Baby Kit"
            price={19.99}
            image="https://images-na.ssl-images-amazon.com/images/I/51P-3iHitqL._AC_SY200_.jpg"
            rating={4}
          />
        </div>

        <div className="home__row">
          <Product
            id="863242364697614"
            title="Unique Headphones"
            price={19.99}
            image="https://images-na.ssl-images-amazon.com/images/I/719re3C8hQL._AC_SY220_.jpg"
            rating={5}
          />
          <Product
            id="8621345697614"
            title="The Button"
            price={3.99}
            image="https://images-na.ssl-images-amazon.com/images/I/310bMKQjT5L._AC_SY200_.jpg"
            rating={3}
          />
          <Product
            id="862746347614"
            title="The Kitchen stuff"
            price={9.99}
            image="https://images-na.ssl-images-amazon.com/images/I/41AZOLr72bL._AC_SY200_.jpg"
            rating={3}
          />
        </div>
        <div className="home__row">
          <Product
            id="8627465437614"
            title="Mobile Stuff"
            price={3.99}
            image="https://images-na.ssl-images-amazon.com/images/I/41TEawIMRfL._AC_SY200_.jpg"
            rating={4}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
