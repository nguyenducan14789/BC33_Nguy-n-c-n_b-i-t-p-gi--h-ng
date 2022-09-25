import React, { Component } from 'react'
import ProductItem from './ProductItem'

export default class ProductList extends Component {
  render() {
    const {arrProd, xemChiTiet, addToCart} = this.props
    return (
      <div className='container'>
        <div className='row'>
            {arrProd.map((prod, index) => {
                return (
                    <div className='col-4' key={index}>
                        <ProductItem prod = {prod} xemChiTiet = {xemChiTiet} addToCart = {addToCart}/>
                    </div>
                )
            })}
        </div>
        
      </div>
    )
  }
}
