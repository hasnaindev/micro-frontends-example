import React, {
  useEffect,
  useState,
  lazy,
  Suspense
} from 'react'
import { v4 } from 'uuid'
import ReactDOM from 'react-dom'
import { faker } from '@faker-js/faker'

import './index.css'

const Cart = lazy(() => import('cart/Cart'))
const Banner = lazy(() => import('banner/Banner'))

const App = () => {
  const [cats, setCats] = useState([])
  const [cart, setCart] = useState([])
  const [cartIsOpen, setCartIsOpen] = useState(false)

  useEffect(() => {
    const _cats = []

    for (let i = 0; i < 20; i++) {
      const _cat = {
        id: v4(),
        name: faker.name.findName(),
        price: faker.commerce.price(),
        image: faker.image.cats()
      }

      _cats.push(_cat)
    }

    setCats(_cats)
  }, [])

  const handleClick = cat => {
    handleCartOpen()
    setCart(cart => [...cart, cat])
  }

  const handleCartOpen = () => setCartIsOpen(true)

  const handleCartClose = () => setCartIsOpen(false)

  return (
    <div className="container">
      <Suspense fallback={null}>
        <Cart items={cart} isOpen={cartIsOpen} onClose={handleCartClose} />
      </Suspense>
      <Suspense fallback={null}>
        <Banner />
      </Suspense>
      <header className="header">
        <h2 className="headerTitle">iCats</h2>
      </header>
      <ul className="productsList">
        {cats.map(({ id, name, price, image }) => (
          <li key={id} className="productsListItem">
            <div className="productCard">
              <h4 className="productCardTitle">{name}</h4>
              <div>
                <img src={image} width={200} />
              </div>
              <p className="productCardPrice">${price}</p>
              <button onClick={() => handleClick({ id, name, price, image })}>
                Add To Cart
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
