import React, { Component } from 'react'
import '../asset/css/Cart.css'
export default class Cart extends Component {
    render() {
        const { cartProduct, delProdCart,plus,subtract } = this.props
        return (
            <div>
                <div>
                    <div className="modal fade" id="modalId" tabIndex={-1} data-bs-backdrop="static" data-bs-keyboard="false" role="dialog" aria-labelledby="modalTitleId" aria-hidden="true">
                        <div className="modal-dialog modal-dialog-scrollable modal-dialog-centered modal-lg" role="document">
                            <div className="modal-content" >
                                <div className="modal-header">
                                    <h5 className="modal-title" id="modalTitleId">Giỏ hàng</h5>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                                </div>
                                <div className="modal-body">
                                    <table>
                                        <thead>
                                            <tr >
                                                <td>Mã SP</td>
                                                <td>Hình ảnh</td>
                                                <td>Tên SP</td>
                                                <td>Số lượng</td>
                                                <td>Đơn giá</td>
                                                <td>Thành tiền</td>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {cartProduct.map((cartProd, index) => {
                                                return (
                                                    <tr key={index}>
                                                        <td>{cartProd.maSP}</td>
                                                        <td><img src={cartProd.hinhAnh} width={100}></img></td>
                                                        <td>{cartProd.tenSP}</td>
                                                        <td>
                                                            <button className='btn btn-primary' onClick={()=>{
                                                                plus(cartProd.maSP)
                                                            }}>+</button>
                                                            {cartProd.soLuong}  
                                                            <button className='btn btn-primary' onClick={()=> {
                                                                subtract(cartProd.maSP)
                                                            }}>-</button>
                                                        </td>
                                                        <td>{cartProd.giaBan}</td>
                                                        <td>{cartProd.soLuong * cartProd.giaBan}</td>
                                                        <td>
                                                            <button className='btn btn-danger' onClick={() => {
                                                                delProdCart(cartProd.maSP)
                                                            }}>Xóa</button>
                                                        </td>
                                                    </tr>
                                                )
                                            })}
                                        </tbody>
                                        <tfoot>
                                            <td>Tổng tiền</td>
                                            <td>{
                                                this.props.cartProduct.reduce((total, cartProd, index)=>{
                                                    return total += cartProd.soLuong*cartProd.giaBan 
                                                },0)
                                            }</td>
                                        </tfoot>
                                    </table>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    <button type="button" className="btn btn-primary">Save</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}
