import React from 'react'

function ProductCard(props) {
    return (
      <div className="list">
        {props.x.map((product) => (
          <div className="card">
            <img width="100px" src={product.image} className="image" alt="product image" />
            <h1>{product.name}</h1>
            <h2>{product.price}</h2>
            <p>{product.category}</p>
          </div>
        ))}
      </div>
    );
  }
  export default ProductCard;
