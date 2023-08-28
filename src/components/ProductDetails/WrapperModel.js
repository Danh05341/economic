import './ProductDetails.scss'

function WrapperModel({ primary, children }) {
    return (
        <div className='wrapper-model'>
            {children}
        </div>
    );
}

export default WrapperModel;