import Layout from '../Layout/Layout'
import './MainComponents.scss'
import MainItem from './MainItem'
import Product from '../Products'
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
                        <h1 className='selling-title'><a href='#' style={{textDecoration:'none',color:'black'}}>SẢN PHẨM BÁN CHẠY</a></h1>
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
        </Layout>
    )
}
export default MainComponents