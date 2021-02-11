import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ProductItem from './ProductItem'

import { connect } from 'react-redux'
import { addToCart } from '../actions'
import { getVisibleProducts } from '../reducers/products'

class ProductList extends Component {
  render() {
    const { products, addToCart } = this.props

    return (
      <div>
        <h1 style={{color: 'red', fontWeight: 600, textAlign:'center', top: '50%', width: '20%', margin: 'auto', position: 'relative',  marginBottom: '12px', marginTop: '12px'}}>Products</h1>
        {products.map(product => (
          <ProductItem key={product.id} product={product} onAddToCartClicked={() => addToCart(product.id)} />
        ))}
      </div>
    )
  }
}

ProductList.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      inventory: PropTypes.number.isRequired,
    }),
  ).isRequired,
  addToCart: PropTypes.func.isRequired,
}

export default connect(
  state => ({ products: getVisibleProducts(state.products) }),
  { addToCart },
)(ProductList)
