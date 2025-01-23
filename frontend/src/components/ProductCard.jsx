import React from 'react'
import PropTypes from 'prop-types';
function ProductCard({product}) {
  return (
    <div className="product-card">
    <div className="image-container">
      <img src={product.image} alt={product.name} />
      {product.label && (
        <div className={`label ${product.label.type}`}>
          {product.label.text}
        </div>
      )}
    </div>
    <div className="product-info">
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <div className="price">
        <span className="current-price">{product.currentPrice}</span>
        {product.originalPrice && (
          <span className="original-price">{product.originalPrice}</span>
        )}
      </div>
    </div>
  </div>
  )
}

ProductCard.propTypes = {
    product: PropTypes.shape({
      image: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      currentPrice: PropTypes.string.isRequired,
      originalPrice: PropTypes.string,
      label: PropTypes.shape({
        type: PropTypes.string,
        text: PropTypes.string,
      }),
    }).isRequired,
  };

export default ProductCard