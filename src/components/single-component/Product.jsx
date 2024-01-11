/* eslint-disable react/prop-types */
import {  useRef, useState } from 'react'
import img1 from '../../assets/images/image-product-1.jpg'
import img2 from '../../assets/images/image-product-2.jpg'
import img3 from '../../assets/images/image-product-3.jpg'
import img4 from '../../assets/images/image-product-4.jpg'
import './product.css'
import { useStore } from '../store'

export function ProductBase(){
  
        const [qty , setQty] = useState(0)
        const slideElement = useRef()
        const add =()=>{
            setQty(qty+1)
        }
        const subtract =()=>{
            if(qty<=0)return
            setQty(qty-1)
        }
    
        // function next (){
            
            
        //     let slideImagesfirst = slideElement.current.children[0]
         
        //     slideElement.current.style.transform = 'translatex(-100%)';
        //     slideElement.current.style.transition = 'all 0.5s ease-in';
            
        //     setTimeout(function(){
                
        //         slideElement.current.style.transition = 'none'
        //         slideElement.current.insertAdjacentElement('beforeend',slideImagesfirst)
        //         slideElement.current.style.transform = 'translatex(0%)';
        //     },600);
        // }
        // function back (){
        //     let slideImagesfirste = slideElement.children
        //     let slideImageslast = slideImagesfirste[slideImagesfirste.length-1]
        //     slideElement.style.transform = 'translatex(0%)';
        //     slideElement.style.transition = 'all 0.5s ease-in';
            
        //     setTimeout(function(){
        //         slideElement.style.transition = 'none'
        //         slideElement.insertAdjacentElement('afterBegin',slideImageslast)
        //         slideElement.style.transform = 'translatex(-100%)';
        //     },600);
        // }
        //  useEffect(()=>{
        //     setInterval(function(){
        //         next();
        //     },4000);
        //     return ()=> clearInterval(next())
    
        // },[])
        return(
            < >
                <section className="product-img">
                    <section className='slide-container'>
                        <ul className="slider" ref={slideElement}>
                            <li className="slide__item">
                                <img src={img1} alt="" className="slide__img" />
                            </li>
                            <li className="slide__item">
                                <img src={img2} alt="" className="slide__img" />
                            </li>
                            <li className="slide__item">
                                <img src={img3} alt="" className="slide__img" />
                            </li>
                            <li className="slide__item">
                                <img src={img4} alt="" className="slide__img" />
                            </li>
                        </ul>
                    </section>
                        <ul className="pagination">
                            <label className="pagination__item">
                                <input name='pagination-img' type="radio" defaultChecked />
                                <img src={img1} alt="" />
                            </label>
                            <label className="pagination__item">
                                <input name='pagination-img' type="radio" />
                                <img src={img2} alt="" />
                            </label>
                            <label className="pagination__item">
                                <input name='pagination-img' type="radio" />
                                <img src={img3} alt="" />
                            </label>
                            <label className="pagination__item">
                                <input name='pagination-img' type="radio" />
                                <img src={img4} alt="" />
                            </label>
                        </ul>
                </section>
                <section className="product__detail">
                    <h1 className="product__type">Sneaker company</h1>
                    <p className="product__title">Fall limited edition sneakers</p>
                    <p className="product__description">
                    These low-profile sneakers are your perfect casual wear companion.
                     Featuring a durable rubber outer sole, they’ll withstand everything
                      the weather can offer.
                    </p>
                    <div className="product__price">
                        <div className='price-box'>
                            <span className="price">$125.00</span>
                            <span className="product-percent__discount">50%</span>
                        </div>
                        <span className='product__old-price'>$250.00</span>
                    </div>
                    <div className="input-groups">
                        <div className='buttons-action'>
                            <button className='action' onClick={subtract} >-</button>
                                <input type="number" value={qty} onChange={(e)=>{setQty(parseInt(e.target.value))}}/>
                            <button className='action' onClick={add}>+</button>
                        </div>
                        <button className='btn'>
                            <picture>
                                 <svg width="22" height="20" xmlns="http://www.w3.org/2000/svg"><path d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z" fill="currentColor" fillRule="nonzero"/></svg>
                            </picture>
                            <p>Add to cart</p>
                        </button>
                        
                    </div>
                </section>
            </>
    )
}

export function Product({Product}){
    const {addToCart} = useStore((state)=>(state))
    const {deleteInCart} = useStore((state)=>(state))
    const [qty , setQty] = useState(0)
    const slideElement = useRef()
    const add =()=>{
        setQty(qty+1)
    }
    const subtract =()=>{
        if(qty<=0)return
        setQty(qty-1)
    }
    const handleAdd =()=>{
        if(qty<=0) {
            deleteInCart(Product)
            return
        }
        addToCart(Product , qty)
    }

    return(
        <main className='product'>
            <section className="product-img">
                <section className='slide-container'>
                    <ul className="slider" ref={slideElement}>
                        {
                            Product.images.map((image , index)=>(
                                <li key={index} className="slide__item">
                                    <img src={image} alt={Product.name} className="slide__img" />
                                </li>
                            ))
                        }                    
                    </ul>
                </section>
                <ul className="pagination">
                    {
                        Product.images.map((image, index)=>(
                            <label key={index} className="pagination__item">
                                <input name='pagination-img' type="radio" defaultChecked />
                                <img src={image} alt='producto h&m' />
                            </label>
                        ))
                    }
                       
                </ul>
            </section>
            <section className="product__detail">
                <h1 className="product__type">{Product.category}</h1>
                <p className="product__title">{Product.name}</p>
                <p className="product__description">
                {Product.description}
                </p>
                <div className="product__price">
                    <div className='price-box'>
                        <span className="price">${Product.price}</span>
                        <span className="product-percent__discount">50%</span>
                    </div>
                    <span className='product__old-price'>${Product.price/2}</span>
                </div>
                <div className="input-groups">
                    <div className='buttons-action'>
                        <button className='action' onClick={subtract} >-</button>
                            <input type="number" value={qty} onChange={(e)=>{setQty(parseInt(e.target.value))}}/>
                        <button className='action' onClick={add}>+</button>
                    </div>
                    <button className='btn' onClick={handleAdd}>
                        <picture>
                             <svg width="22" height="20" xmlns="http://www.w3.org/2000/svg"><path d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z" fill="currentColor" fillRule="nonzero"/></svg>
                        </picture>
                        <p>Add to cart</p>
                    </button>
                    
                </div>
            </section>
        </main>
    )
}