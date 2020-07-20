import React from "react";
import './App.css';
import ProductCard from "./Products/ProductCard.js";

const Product = [
  {
    image: "https://cutt.ly/MaOSgv2" ,
    name: "milk" ,
    price: "5 dollars/the 2 littre " ,
    category: "Drings" ,
  },
 {
    image: "https://cutt.ly/zaPVK1M" ,
    name: "mais" ,
    price: "3 dollars/the unit " ,
    category: "food" ,
  },
 {
    image: "https://cutt.ly/8aPB26K" ,
    name: "doritos pack" ,
    price: "14 dollars/per pack " ,
    category: "food" ,
  },
 {
    image: "https://cutt.ly/5aPMz02" ,
    name: "water pack " ,
    price: "7.3 dollars " ,
    category: "drinks" ,
  },
 {
    image: "https://cutt.ly/8aAqW9J" ,
    name: "fruit pack" ,
    price: "34 dollars /per pack (special offer) " ,
    category: "food" ,
  },
  

  {
    image: "https://cutt.ly/eaAhMrR" ,
    name: "leds " ,
    price: "2 dollars/ 4 units " ,
    category: "Electronics" ,
  }, {
    image: "https://cutt.ly/LaAnDf0" ,
    name: "red dead redemption II" ,
    price: "26.99 dollars " ,
    category: "video games" ,
  }, {
    image: "https://cutt.ly/taAQGhU" ,
    name: "tv samsung 8k " ,
    price: "‎1 666,80  dollars " ,
    category: "Electronics" ,
  }, {
    image: "https://cutt.ly/EaAUZzw" ,
    name: "web hosting service" ,
    price: "3 dollars /per month " ,
    category: "services" ,
  },


]

function App() {
  return (
    <div className="App">
      <h1> Product Card</h1>
      <h3>Our Products</h3>
      <ProductCard x={Product} />

    </div>
  );
}


export default App;
