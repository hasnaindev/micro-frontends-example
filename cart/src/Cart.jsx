import React from 'react'

import './cart.css'

export default function Cart ({
  items = [],
  isOpen = false,
  onClose = () => null
}) {
  const isEmpty = !items.length

  if (!isOpen) return null

  return (
    <div className="cartContainer">
      <div className="cartOverlay" role="button" onClick={onClose} />
      <div className="cart">
        <div className="cartHeader">
          <p>My Cart</p>
          <a
            href="#"
            role="button"
            className="cartCloseBtn"
            onClick={(event) => {
              onClose()
              event.preventDefault()
            }}
          >
            <svg
              width="42"
              height="42"
              viewBox="0 0 752 752"
              className="cartCloseBtnIcon"
            >
              <g>
                <path d="m513.73 527.94c-3.0312 0-6.0586-1.1562-8.3711-3.4648l-278.23-278.23c-4.625-4.6211-4.625-12.117 0-16.742 4.6211-4.625 12.125-4.625 16.742 0l278.23 278.23c4.625 4.625 4.625 12.117 0 16.742-2.3164 2.3086-5.3398 3.4648-8.3711 3.4648z" />
                <path d="m235.5 527.94c-3.0312 0-6.0625-1.1562-8.3711-3.4648-4.625-4.625-4.625-12.117 0-16.742l278.23-278.23c4.625-4.625 12.117-4.625 16.742 0 4.625 4.6211 4.625 12.117 0 16.742l-278.23 278.23c-2.3086 2.3086-5.3398 3.4648-8.3711 3.4648z" />
              </g>
            </svg>
          </a>
        </div>
        <div className="cartBody">
          {
            isEmpty
              ? (
                <p className="cartBodyEmptyMessage">Your cart is empty!</p>
              )
              : (
                <>
                  <ol className="cartList">
                    {items.map(item => (
                      <li key={item.id} className="cartCard">
                        <img src={item.image} className="cartCardImg" />
                        <div className="cartCardBody">
                          <p className="cartCardTitle">{item.name}</p>
                          <p className="cartCardPrice">${item.price}</p>
                        </div>
                      </li>
                    ))}
                  </ol>
                  <div className="total">
                    <p>Total: ${items.reduce((accumulator, item) => accumulator + Number.parseInt(item.price), 0)}</p>
                  </div>
                </>
              )
          }
        </div>
      </div>
    </div>
  )
}
