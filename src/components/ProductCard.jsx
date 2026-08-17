import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import { getQuantityLabel } from '../utils/cart'

const ProductCard = ({product}) => {
  const {addToCart, cartItems} = useCart();
  const productQuantityLabel = getQuantityLabel(cartItems, product.id);
  return (
    <div className='product-card'>
      <img src={product.image} alt={product.name} className='product-card-image' />
      <div className="product-card-content">
        <h3 className='product-card-name'>{product.name}</h3>
        <p className='product-card-price'>${product.price}</p>
        <div className="product-card-actions">
            <Link className='btn btn-secondary' to = {`/products/${product.id}`} >View Details</Link>
            <button className='btn btn-primary' onClick={() => addToCart(product.id)} >
              Add to cart {productQuantityLabel}
              </button>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
