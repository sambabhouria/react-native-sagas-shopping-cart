import React, { Component } from 'react'
import ProductList from './ProductList'
import Cart from './Cart'

export default class App extends Component {
  render() {
    return (
      <div style={{display: 'flex'}}>
        <ProductList />
       <div style={{marginLeft : '400px',  marginTop: '50px'}}>
        <Cart />
       </div>
      </div>
    )
  }
}
