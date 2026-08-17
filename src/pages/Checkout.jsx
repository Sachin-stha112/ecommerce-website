import React from 'react'
import { useCart } from '../context/CartContext'

const Checkout = () => {
  const {getCartItemsWithProducts, removeFromCart, updateQuantity} = useCart()
  const cartItems = getCartItemsWithProducts()
  return (
    <div className="page">
      <div className="container">
        <h1 className='page-title'>Checkout</h1>
        <div className="checkout-container">
          <div className="checkout-items">
            <h2 className='checkout-section-title'>Order Summary</h2>
            {cartItems.map((item) => (
              <div className="checkout-item">
                <img src={item.product.image} alt={item.product.name} className='checkout-item-image'/>
                <div className="checkout-item-details">
                <h3 className='checkout-item-name'>{item.product.name}</h3>
                <p className='checkout-item-price'>${item.product.price} each</p>
              </div>
              <div className="checkout-item-controls">
                  <div className="quantity-controls">
                    <button
                      className="quantity-btn"
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    >
                      -
                    </button>
                    <span className="quantity-value">{item.quantity}</span>
                    <button
                      className="quantity-btn"
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    >
                      +
                    </button>
                  </div>

                  <p className="checkout-item-total">
                    ${(item.product.price * item.quantity).toFixed(2)}
                  </p>
                  <button
                    className="btn btn-secondary btn-small"
                    onClick={() => removeFromCart(item.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Checkout
