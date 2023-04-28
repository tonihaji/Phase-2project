import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Swal from 'sweetalert2';

function Cart() {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const [notification, setNotification] = useState('');

  useEffect(() => {
    fetch('/carts')
      .then(res => res.json())
      .then(data => {
        setCart(data);
        calculateTotal(data);
      });
  }, []);

  const handleAdd = item => {
    setNotification(`Added ${item.name} to cart`);
    Swal.fire({
      icon: 'success',
      title: 'Item added',
      showConfirmButton: false,
      timer: 1500
    });
    setTimeout(() => {
      setNotification('');
    }, 2000);
  };

  const handleRemove = index => {
    const itemId = cart[index].id;
    fetch(`/carts${itemId}`, {
      method: 'DELETE'
    })
    .then(() => {
      const newCart = [...cart];
      newCart.splice(index, 1);
      setCart(newCart);
      calculateTotal(newCart);
    })
    .catch(error => console.error('Error deleting item:', error));
  };

  const handleChange = (index, type) => {
    const newCart = [...cart];
    if (type === 'increase') {
      newCart[index].quantity++;
    } else if (newCart[index].quantity > 1) {
      newCart[index].quantity--;
    }
    setCart(newCart);
    calculateTotal(newCart);
  };

  const calculateTotal = data => {
    let newTotal = 0;
    data.forEach(item => {
      newTotal += item.price * item.quantity;
    });
    setTotal(newTotal);
  };

  return (
    <div>
      <Navbar cart={cart} />
      <div className="container text-center mt-5 pt-5 mb-5 pb-5">
        <h3 className='fixed'>Selected items in cart</h3>
        {notification && <div className="alert alert-success">{notification}</div>}
        <div className="row">
          {cart.map((item, index) => (
            <div className="col mx-4">
              <div className="card" style={{ width: "18rem", marginBottom: "10px" }}>
                <div className="card-body">
                  <img src={item.image_url} className="card-img-top" alt="..." />
                  <h5 className="card-title">{item.name}</h5>
                  <p className="card-text">
                    {item.price} x {item.quantity} = {item.price * item.quantity}
                  </p>
                  <button className="btn btn-warning" onClick={() => handleRemove(index)}>
                    Remove
                  </button>
                  <button className="btn btn-success mx-2" onClick={() => {
                    handleAdd(item);
                    handleChange(index, 'increase');
                  }}>
                    +
                  </button>
                  <button className="btn btn-danger" onClick={() => handleChange(index, 'decrease')}>
                    -
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <h3 className="my-3">Total: {total}</h3>
        <button className="btn btn-secondary">Buy</button>
      </div>
    </div>
  );
}

export default Cart;
