
import './index.scss'
const Product = (props) => {
    return (

        <a href='#' className='product'>
            <div className='product-top'>
                <img
                    src='https://bizweb.dktcdn.net/thumb/medium/100/342/645/products/bd30ea8934835dfbad4dca4072b1ba3b.jpg?v=1545572480550'>
                
                </img>
                <div className='flash'>
                    <img className='flash-img' src='https://www.nicepng.com/png/full/28-289956_for-sale-banner-png-now-selling.png'></img>
                </div>
                <p>Giày đá bóng sân cỏ nhân tạo</p>
            </div>
            <div className="product-bottom">
                <div className='product-bottom-left'>
                    <p className='price-final'>1.200.000đ</p>
                    <p className='price-real'>1.500.000đ
                        <hr className='block-price-real' />
                    </p>

                </div>
                <div className='product-bottom-right'>
                    <a href='#' className='product-btn'>Chi tiết</a>
                </div>
            </div>
        </a>
    )
}
export default Product