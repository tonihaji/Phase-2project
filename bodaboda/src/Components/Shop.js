import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";

function Shop() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("/items")
      .then((r) => r.json())
      .then((data) => setProducts(data));
  }, []);

  const handleAddToCart = (product) => {
    const newProduct = { ...product, name: product.name };
    const newCart = [...cart, newProduct];
    setCart(newCart);
    fetch("/items", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(newProduct),
    })
      .then((r) => r.json())
      .then((data) => console.log(data));
  };

  const handleRemoveFromCart = (product) => {
    const existingProduct = cart.find((p) => p.id === product.id);
    if (existingProduct.amount > 1) {
      setCart(
        cart.map((p) =>
          p.id === product.id ? { ...p, amount: p.amount - 1 } : p
        )
      );
    } else {
      setCart(cart.filter((p) => p.id !== product.id));
    }
  };

  return (
    <div>
      <Navbar cart={cart} />
      <div className="container text-center mt-5">
        <h1>view available items in store</h1>
        <div className="row">
          {products.map((product) => (
            <div className="col mx-4">
              <div key={product.id} className="card" style={{ width: "18rem", marginBottom: "10px" }}>
                <img  src={product.image_url} className="img" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{product.name}</h5>
                  <p className="card-text">{product.price}</p>
                  <p className="card-text">{product.status_pay}</p>
                  <button className="btn btn-warning" onClick={() => handleAddToCart(product)}>
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Shop;
