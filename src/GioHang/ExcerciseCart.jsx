import React, { Component } from 'react'
import Cart from './Cart'
import ProductList from './ProductList'
import '../asset/css/Ex.css'
const dataPhone = [
    { "maSP": 1, "tenSP": "VinSmart Live", "manHinh": "AMOLED, 6.2, Full HD+", "heDieuHanh": "Android 9.0 (Pie)", "cameraTruoc": "20 MP", "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 5700000, "hinhAnh": "./img/vsphone.jpg" },
    { "maSP": 2, "tenSP": "Meizu 16Xs", "manHinh": "AMOLED, FHD+ 2232 x 1080 pixels", "heDieuHanh": "Android 9.0 (Pie); Flyme", "cameraTruoc": "20 MP", "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 7600000, "hinhAnh": "./img/meizuphone.jpg" },
    { "maSP": 3, "tenSP": "Iphone XS Max", "manHinh": "OLED, 6.5, 1242 x 2688 Pixels", "heDieuHanh": "iOS 12", "cameraSau": "Chính 12 MP & Phụ 12 MP", "cameraTruoc": "7 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 27000000, "hinhAnh": "./img/applephone.jpg" }
]

export default class ExcerciseCart extends Component {
    state = {
        details: { "maSP": "", "tenSP": "", "manHinh": "", "heDieuHanh": "", "cameraTruoc": "", "cameraSau": "", "ram": "", "rom": "", "giaBan": "", "hinhAnh": "", "soLuong": 0 },
        cartProduct: [{ "maSP": "", "tenSP": "", "manHinh": "", "heDieuHanh": "", "cameraTruoc": "", "cameraSau": "", "ram": "", "rom": "", "giaBan": "", "hinhAnh": "", "soLuong": 0 }]
    }

    xemChiTiet = (prodClick) => {
        console.log(prodClick)
        // thay đổi state = prodList
        this.setState({
            details: prodClick
        })
    }

    addToCart = (idClick) => {
        // debugger
        console.log(idClick)
        let prodCart = {
            "maSP": idClick.maSP,
            "tenSP": idClick.tenSP,
            "giaBan": idClick.giaBan,
            "hinhAnh": idClick.hinhAnh,
            "soLuong": idClick.soLuong
        }

        let cartUpdate = [...this.state.cartProduct]
        let index = cartUpdate.findIndex(sp => sp.maSP === prodCart.maSP);
        if (index !== -1) {
            cartUpdate[index].soLuong += 1;
        } else {
            prodCart.soLuong = 1;
            cartUpdate.push(prodCart)

        }

        this.setState({

            cartProduct: cartUpdate
        })
    }


    delProdCart = (idDell) => {
        // let cartUpdate = [...this.state.cartProduct]
        // let index = cartUpdate.findIndex(sp => sp.maSP === idDell);
        // if(index !== -1){
        //     cartUpdate.splice(index,1)
        // }
        let cartUpdate = this.state.cartProduct.filter(prod => prod.maSP !== idDell)
        this.setState({
            cartProduct: cartUpdate
        })
    }
    componentDidMount() {
        // window.addEventListener('onload', this.delFirst);
        this.delFirst()

    }
    delFirst = () => {
        let cartUpdate = [...this.state.cartProduct]
        cartUpdate.splice(0, 1)
        this.setState({
            cartProduct: cartUpdate
        })
    }
    plus = (idClick) => {
        let cartUpdate = [...this.state.cartProduct]
        let index = cartUpdate.findIndex(prod => prod.maSP === idClick)
        cartUpdate[index].soLuong += 1
        this.setState({
            cartProduct: cartUpdate
        })
    }

    subtract = (idClick) => {
        let cartUpdate = [...this.state.cartProduct]
        let index = cartUpdate.findIndex(prod => prod.maSP === idClick)
        if (cartUpdate[index].soLuong > 0) {
            cartUpdate[index].soLuong -= 1
        }
        this.setState({
            cartProduct: cartUpdate
        })
    }


    render() {
        let total = this.state.cartProduct.reduce((total, prod, index) => {
            return total += prod.soLuong;
        }, 0)
        let { maSP, tenSP, hinhAnh, ram, rom, heDieuHanh, cameraSau, cameraTruoc, giaBan, manHinh, soLuong } = this.state.details;
        return (

            <div className='container'>

                <Cart cartProduct={this.state.cartProduct} delProdCart={this.delProdCart} plus={this.plus} subtract={this.subtract} />
                <div className='cartProduct'>
                    <a href='#' data-bs-toggle="modal" data-bs-target="#modalId">Xem giỏ hàng ( {total} )</a>
                </div>
                <ProductList arrProd={dataPhone} xemChiTiet={this.xemChiTiet} addToCart={this.addToCart} />
                <div className='row mt-5'>
                    <div className='col-4'>
                        <h1>{tenSP}</h1>
                        <img src={hinhAnh}></img>
                    </div>
                    <div className='col-8' >
                        <h2>Thông tin chi tiết</h2>
                        <table className='table'>
                            <thead>
                                <tr>
                                    <th>màn hình</th>
                                    <th>{manHinh}</th>
                                </tr>
                                <tr>
                                    <th>Hệ điều hành</th>
                                    <th>{heDieuHanh}</th>
                                </tr>
                                <tr>
                                    <th>cam trước</th>
                                    <th>{cameraTruoc}</th>
                                </tr>
                                <tr>
                                    <th>cam sau</th>
                                    <th>{cameraSau}</th>
                                </tr>
                                <tr>
                                    <th>ram</th>
                                    <th>{ram}</th>
                                </tr>
                                <tr>
                                    <th>rom</th>
                                    <th>{rom}</th>
                                </tr>
                            </thead>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}
