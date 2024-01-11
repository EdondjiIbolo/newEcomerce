import { useProducts } from "../Hooks/useProduct"
import {results as products} from '../mocks/H&M.json'
import { Product, ProductBase } from "./single-component/Product"
import './productos.css'
export function Products(){
    // const { products } = useProducts()
    const description = `Lorem ipsum dolor sit amet consectetur adipisicing elit. A repudiandae illo, repellat exercitationem veniam nostrum. Quibusdam dolore eius ad nesciunt delectus quis, dignissimos recusandae deserunt, fugit accusamus eveniet unde vero?`
    const mappedProducts = products.map(product=>({
        id:product.code,
        name: product.name , 
        description:description , 
        poster:product.images,
        images:product.galleryImages,
        price:product.price.value , 
        category: product.categoryName ,
        })
    )
 
    return(
        <>
            <div className='product'>
                <ProductBase />
            </div>
          
            
            {
                mappedProducts.slice(1 , 10).map(product=>{

                    return  (
                    <div key={product.id}  className='product'>
                        <Product  Product={product}/>
                    </div>
                    )}
                )
            }
            
        </>
    )
}