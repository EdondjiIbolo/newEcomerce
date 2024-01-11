import { useLocation, useNavigate, useParams } from 'react-router-dom'
import img1 from '../../assets/images/image-product-1.jpg'
import './productcard.css'
export function ProductCard({product}){
    const navigate = useNavigate()
    const {pathname} = useLocation()
    const handleClick =(e)=>{
        e.preventDefault()
        const newPath = pathname === '/' ? `/detail/${product.id}` : `${pathname}/${product.id}`
        console.log(newPath)
        navigate(newPath)
    }
    return (
        <div className="product-card" onClick={handleClick}>
        
           <picture className='product-card__img'>
                <img src={product?.poster} alt="imagen" />
           </picture>
           <div className='product-card__description'>
            <p className="product__type">{product?.name}</p>
            <p className="text__description">{product?.description}</p>
            <p className="price">${product?.price}</p>
           </div>
           <div className="rating">
                <span className="rating-num">{product?.rating}</span>
           </div>
        </div>
    )
}