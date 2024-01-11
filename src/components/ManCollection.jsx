import { useProducts } from "../Hooks/useProduct";
import { Loader } from "./Loader";
import { SkeletonImg } from "./Skeletons/Skeletonimg";
import { ProductCard } from "./single-component/ProductCard";

export function ManCollection(){
    const input = 'men'
    const { products , loading } = useProducts({input})

    const description = `Lorem ipsum dolor sit amet consectetur adipisicing elit. `
    const mappedProducts = products.map(product=>({
      id:product.articleCodes[0],
      name: product.name , 
      description:description , 
      poster:product.images[0].baseUrl,
      price:product.price.value , 
      category: product.categoryName ,
        })
    )




    
    return(
        <>
       
        {
            
            loading ? 
            <div className="product-card__card-xs">
            <SkeletonImg />
            <SkeletonImg />
            <SkeletonImg />
            <SkeletonImg />
            
  
          </div>
            :
            <main className="product-card__container">
                {
                mappedProducts?.slice(1,15)?.map(product=>(
                  
                    <ProductCard key={product.id} product={product}  />
                        )
                    )
                }
                
            </main>
            }
             </>
    )
}