import { create } from "zustand";

export const useStore = create(
    (set)=>({
        cart : [] ,
        addToCart:(product , qty)=>set((state)=>{
            const indexPorduct = state.cart.findIndex(item=>item.id === product.id)
            if(indexPorduct >= 0){
                const newCart = structuredClone(state.cart)
                newCart[indexPorduct].cantidad = qty
                // set({cart:newCart})
                return {cart : newCart}
                
            }
           return {cart: [...state.cart ,{...product , cantidad : qty}]}
        }),
        clearCart:()=>set(()=>{
            return{cart:[]}}
           ),
        deleteInCart:(product)=>set((state)=>{
            const productIndex = state.cart.findIndex(item=>item.id===product.id)
            if(productIndex==='-1') return
            const newCart = structuredClone(state.cart)
            newCart.splice(productIndex,1)
            return { cart:newCart}

        })
    })
)