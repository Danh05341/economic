import { BiChevronRight } from "react-icons/bi";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

function ProductDetail() {
    return (
        <div className="product-detail">
            <div className="container">
                <div className="bread-crumbs">
                    <ul className="n">
                        <li className="">
                            <a href="#">Trang chủ</a>
                            <BiChevronRight></BiChevronRight>
                        </li>
                        <li className="">
                            <a href="#">Giày nam</a>
                            <BiChevronRight></BiChevronRight>
                        </li>
                        <li className="">
                            <a href="#">Giày bóng đá sân cỏ nhân tạo</a>
                            <BiChevronRight></BiChevronRight>
                        </li>
                    </ul>
                </div>
                <div className="product-category-title">
                    Giày nam
                </div>
                <div className="product-info">
                    <div className="product-image">
                        <img src="https://bizweb.dktcdn.net/thumb/small/100/342/645/products/bd30ea8934835dfbad4dca4072b1ba3b.jpg?v=1545572480550"></img>
                    </div>
                    <div className="product-option">
                        <div className="product-color">
                            <div className="product-image">
                                <img src="https://bizweb.dktcdn.net/thumb/small/100/342/645/products/1788475-l.jpg?v=1545572481460"></img>
                            </div>
                            <div className="product-image">
                                <img src="https://bizweb.dktcdn.net/thumb/small/100/342/645/products/1788475-l.jpg?v=1545572481460"></img>
                            </div>
                            <div className="product-image">
                                <img src="https://bizweb.dktcdn.net/thumb/small/100/342/645/products/1788475-l.jpg?v=1545572481460"></img>
                            </div>
                            <div className="product-image">
                                <img src="https://bizweb.dktcdn.net/thumb/small/100/342/645/products/1788475-l.jpg?v=1545572481460"></img>
                            </div>
                        </div>
                        <div className="product-bot">
                            <div className="product-name">
                                Giày đá bóng sân cỏ nhân tạo
                            </div>
                            <div className="product-group-status">
                                <span className="lable-name">
                                    Thương hiệu: <span className="status-name">Nike</span>
                                </span>
                                <span className="lable-name">
                                    Kho: <span className="status-name">Còn hàng</span>
                                </span>
                            </div>
                            <div className="product-guild-size">
                                <span>
                                    Hướng dẫn chọn size
                                </span>
                            </div>
                            <div className="product-price">
                                <span className="special-price">
                                    1.200.000₫
                                </span>
                                <span className="old-price">
                                    1.500.000₫
                                </span>
                            </div>
                            <div className="product-quantity">
                                <div className="lable-name">
                                    Số lượng:
                                </div>
                                <div className="custom-quantity">
                                    <button className="minus-btn">
                                        <AiOutlineMinus></AiOutlineMinus>
                                    </button>
                                    <input className="input-quantity" value='1'></input>
                                    <button className="plus-btn">
                                        <AiOutlinePlus></AiOutlinePlus>
                                    </button>
                                </div>
                            </div>
                            <div className="product-action">
                                <button className="product-order">MUA NGAY</button>
                                <button className="product-contact">
                                    <span>Mua số lượng lớn</span>
                                    <span>Gọi ngay 19006750</span>
                                </button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default ProductDetail