import React, { Component } from 'react'

export default class ProductItem extends Component {
    render() {
        const {prod, xemChiTiet, addToCart} = this.props
        return (
            <div>
                <div className="card text-white bg-primary">
                    <img src=   {prod.hinhAnh} alt="..."  height={350} className="w-100" style={{ ojectFit: 'cover' }}/>
                    <div className="card-body">
                        <h4 className="card-title">{prod.tenSP}</h4>
                        <button className='btn btn-success mx-3' 
                        onClick={() => {
                            xemChiTiet(prod)
                        }}
                        >Xem chi tiết</button>
                        <button className='btn btn-danger' onClick={() => {
                            addToCart(prod)
                        }}>thêm vào giỏ hàng</button>
                    </div>
                </div>
            </div>
        )
    }
}
