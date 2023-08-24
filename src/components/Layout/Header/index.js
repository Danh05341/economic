import { AiOutlineSearch } from "react-icons/ai";
import { BsTelephone, BsCart4, BsFillTelephoneFill, BsChevronDown } from "react-icons/bs";
import { CiUser } from "react-icons/ci";
import { FiChevronDown } from "react-icons/fi";

import './Header.scss'

function Header() {
    return (
        <>
            <div className='header'>
                <div className="container">
                    <div className='logo'>
                        <img src='https://bizweb.dktcdn.net/100/342/645/themes/701397/assets/logo.png?1677377108874'></img>
                    </div>
                    <div className='header-menu'>
                        <div className='search'>
                            <input className="search-input" placeholder='Tìm kiếm...'></input>
                            <button className="search-icon">
                                <AiOutlineSearch></AiOutlineSearch>
                            </button>

                        </div>
                        <a className='hotline-link' href="#">
                            <div className="hotline-content">
                                <p>Tư vấn bán hàng</p>
                                <h3>Gọi ngay 19006750</h3>
                            </div>
                            <div className="hotline-icon">
                                <BsFillTelephoneFill></BsFillTelephoneFill>
                            </div>
                        </a>

                        <div className="login">
                            <CiUser></CiUser>
                            <div className="hover-position">
                                <a className="hover-position-btn" href="#">Đăng nhập</a>

                                <a className="hover-position-btn" href="#">Đăng ký</a>
                            </div>
                        </div>
                        <div className="cart">
                            <BsCart4></BsCart4>
                        </div>
                    </div>
                </div>



            </div>
            <div className="menu">
                <ul className="list-menu">
                    <li><a href="" className="task">TRANG CHỦ</a></li>
                    <li className="li sp"><a href="" className="task">SẢN PHẨM </a><FiChevronDown className="icon" />
                        <div className="li-sp">
                            <a className="li-sp-btn" href="#">GIÀY NAM</a>
                            <a className="li-sp-btn" href="#">GIÀY NAM</a>
                            <a className="li-sp-btn" href="#">GIÀY NAM</a>
                            <a className="li-sp-btn" href="#">GIÀY NAM</a>
                            <a className="li-sp-btn" href="#">GIÀY NAM</a>
                        </div>

                    </li>
                    <li className="li gtt"><a href="" className="task">GIÀY THỂ THAO</a><FiChevronDown className="icon" />
                        <div className="gtt-li">
                            <a className="gtt-li-btn" href="#">Proplayer</a>
                            <hr/>
                            <a className="gtt-li-btn" href="#">Proplayer</a>
                            <hr/>
                            <a className="gtt-li-btn" href="#">Proplayer</a>
                            <hr/>
                            <a className="gtt-li-btn" href="#">Proplayer</a>
                            <hr/>
                            <a className="gtt-li-btn" href="#">Proplayer</a>
                        </div>

                    </li>
                    <li><a href="" className="task">LIÊN HỆ</a></li>
                    <li><a href="" className="task">GIỚI THIỆU</a></li>
                    <li><a href="" className="task">TIN TỨC</a></li>
                </ul>
            </div>

        </>
    )
}

export default Header