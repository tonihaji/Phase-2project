import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";

function Shop() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/shop")
      .then((r) => r.json())
      .then((data) => setProducts(data));
  }, []);

  const handleAddToCart = (boda) => {
    const newCart = [...cart, boda];
    setCart(newCart);
    fetch("http://localhost:3000/cart", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(boda),
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
          {products.map((boda) => (
            <div className="col mx-4">
              <div key={boda.id} className="card" style={{ width: "18rem", marginBottom: "10px" }}>
                <img  src={boda.image_url} className="img" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{boda.name}</h5>
                  <p className="card-text">{boda.price}</p>
                  <p className="card-text">{boda.status_pay}</p>
                  <button className="btn btn-warning" onClick={() => handleAddToCart(boda)}>
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
