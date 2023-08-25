import Layout from '../Layout/Layout'
import './MainComponents.scss'
const MainItem = (props) => {
    return (

        <div className='item-main'>
            <a href='#'>
                <img style={{ width: props.wd, height: '271px' }}
                    src={props.linkUrl} className='task-img' />

            </a>
            <div className='item-main-text'>
                <p>{props.name}</p>
            </div>
        </div>
    )
}
export default MainItem