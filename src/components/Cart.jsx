import './cart.css'
import img1 from '../assets/images/image-product-1.jpg'
import deletImg from '../assets/images/icon-delete.svg'
import { useState } from 'react'
import { useStore } from './store'
function CartProduct({product}){
    const deleteInCart = useStore((state)=>(state.deleteInCart))
    return(
        <li className='cart-product__item'>
            <section className='cart-product__cont'>
                <picture className='cart-product__img'>
                    <img src={product.images[0]} alt={product.name} />
                </picture>
                <div className='div'>
                        <p className="product__description">{product.name}</p>
                        <span>
                            <p className="product__description">{product.price} *{product?.cantidad}</p>
                            <p className="price">${product.price*product?.cantidad} </p>
                       </span>                    
                </div>
            </section>
                <button className='delete-icon'>
                    <picture onClick={()=>deleteInCart(product)}>
                        <img src={deletImg} alt="icon delete" />
                        </picture>
                </button>
        </li>
    )
}
export function Cart(){
    const cart = useStore((state)=>(state.cart))
    const clearCart = useStore((state)=>(state.clearCart))

    return(
        <section className="cart">
            <header className="cart__header">
                <p>Cart</p>
            </header>
            <main className="cart-products">
            {
                cart.length > 0 ? 
                
                    <ul>
                        {
                           
                            cart.map(item=>{
                                return <CartProduct key={item.id} product={item}/>
                            }
                                
                                
                                
                            )
                        }
                    </ul>
               
                :
                <p className='price yeah'>Your cart is empty</p>
                
            }
             </main>
            {   
                    cart.length > 0 && 
                <div style={{display:'grid',gridAutoFlow:'column',gridAutoColumns:'1fr' , gap:'10px'}}>
                    <button className="btn" onClick={()=>clearCart()}>
                        Clear Cart
                    </button>
                    <button className="btn">
                        Checkout
                    </button>
                </div>
            }
           
        </section>
    )
}