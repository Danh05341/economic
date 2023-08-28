import Layout from '../Layout/Layout'
import './MainComponents.scss'
import MainItem from './MainItem'
import Product from '../Products'
import { BiChevronRight } from "react-icons/bi";
const MainComponents = () => {
    let sizeImg = [
        {
            sizeimg: '782px',
            url: 'https://bizweb.dktcdn.net/100/342/645/themes/701397/assets/banner_project_1.jpg?1677377108874',
            name: 'Giày Nike Jordan'
        },
        {
            sizeimg: '379px',
            url: 'https://bizweb.dktcdn.net/100/342/645/themes/701397/assets/banner_project_2.jpg?1677377108874',
            name: 'Giày Ultra boost'
        },
        {
            sizeimg: '379px',
            url: 'https://bizweb.dktcdn.net/100/342/645/themes/701397/assets/banner_project_3.jpg?1677377108874',
            name: 'Giày đi phượt'
        },
        {
            sizeimg: '379px',
            url: 'https://bizweb.dktcdn.net/100/342/645/themes/701397/assets/banner_project_4.jpg?1677377108874',
            name: 'Giày chạy bộ'
        },
        {
            sizeimg: '379px',
            url: 'https://bizweb.dktcdn.net/100/342/645/themes/701397/assets/banner_project_5.jpg?1677377108874',
            name: 'Giày Bitis hunter'
        },

    ]
    return (
        <Layout>
            <div className='container-fluid'>
                <img className='bg-img'
                    src='https://bizweb.dktcdn.net/100/342/645/themes/701397/assets/slider_2.jpg?1677377108874' />
                <div className='main-item'>

                    <div className='main-item-task'>
                        {
                            sizeImg.map(element => {
                                return (
                                    <MainItem wd={element.sizeimg} linkUrl={element.url} name={element.name} />
                                )

                            })
                        }
                    </div>
                </div>
                <div className='selling-container'>
                    <div className='selling'>
                        <h1 className='selling-title'><a href='#' style={{ textDecoration: 'none', color: 'black' }}>SẢN PHẨM BÁN CHẠY</a></h1>
                        <div className='selling-list-item'>
                            <Product />
                            <Product />
                            <Product />
                            <Product />
                            <Product />
                        </div>
                    </div>

                </div>
                <div className='sneaker-container'>
                    <div className='sneaker'>
                        <div className='sneaker-top'>
                        <img className='sneaker-img' src='https://bizweb.dktcdn.net/100/342/645/themes/701397/assets/banner_product_nangdong.jpg?1677377108874'></img>
                            <div className='sneaker-right'>
                                <div className='sneaker-title'>
                                    <a href='#' >SNEAKER NĂNG ĐỘNG</a>
                                </div>
                                <p>Sneaker đã trở thành một biểu tượng của xã hội, là một sản phẩm của thời đại với những thiết kế cổ điển và những điều đó đều nằm trong những đôi giày Sneaker Delta Shoes. Không lỗi thời với thời gian, mang dấu ấn cá tính khác biệt và tạo mọi sự lôi cuốn từ chính đôi giày Sneaker. Tự tạo cuộc chơi, tự tạo phong cách, đó là Delta Shoes</p>
                                <div className='sneaker-right-btn'><a href='#'>XEM TẤT CẢ <BiChevronRight className='sneaker-right-icon' /> </a >
                                </div>

                            </div>
                        </div>
                        <div className='sneaker-bot'>
                            <div className='selling-list-item'>
                                <Product />
                                <Product />
                                <Product />
                                <Product />
                                <Product />
                            </div>


                        </div>

                    </div>
                </div>
                <div className='slip-on-container'>
                    <div className='slip-on'>
                        <div className='slip-on-top'>
                        <div className='slip-on-right'>
                                <div className='slip-on-title'>
                                    <a href='#' >SLIP-ON THANH LỊCH</a>
                                </div>
                                <p>Ra đời từ thế kỉ XX, từ sự tiện dụng cho đến biểu tượng của phong cách casual. Giày lười Delta Shoes là một trong những đại diện của sự chững chạc trong thời trang, là xu hướng của thế giới thời trang tối giản. Đồng hành cùng Delta Shoes là đồng hành với chuẩn mực của chính bạn.</p>
                                <div className='slip-on-right-btn'><a href='#'>XEM TẤT CẢ <BiChevronRight className='slip-on-right-icon' /> </a >
                                </div>

                            </div>
                            <img className='slip-on-img' src='https://bizweb.dktcdn.net/100/342/645/themes/701397/assets/banner_product_thanhlich.jpg?1677377108874'></img>
                           
                        </div>
                        <div className='slip-on-bot'>
                            <div className='selling-list-item'>
                                <Product />
                                <Product />
                                <Product />
                                <Product />
                                <Product />
                            </div>


                        </div>

                    </div>
                </div>

            </div>
        </Layout>
    )
}
export default MainComponents