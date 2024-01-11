import { SkeletonImg } from "./Skeletons/Skeletonimg";
import { useProducts } from "../Hooks/useProduct";
import { Loader } from "./Loader";
import { ProductCard } from "./single-component/ProductCard";


export function Collection(){
  const input = 'kids'
  const { products , loading } = useProducts({input})

  const description = `Lorem ipsum dolor sit amet consectetur adipisicing elit. `
  const mappedProducts = products.map(product=>({
    id:product?.articleCodes?.[0],
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
        loading ? <div className="product-card__card-xs">
          <SkeletonImg />
          <SkeletonImg />
          <SkeletonImg />
          <SkeletonImg />

        </div>
        :
        <>
            <main className='category'>
            <header>
              <p className="price">Women</p>
            </header>
            <section className="product-card__card-xs">
                {
                  mappedProducts?.slice(0,8)?.map(product=>(
                    
                    <ProductCard key={product.id} product={product} />
                    )
                    )
                }
                
                <div className='more'>
                  <div >
                    <p className="price see-more">+</p>
                  </div>
                </div>
            </section>
            </main>
            <main className='category'>
            <header>
              <p className="price">Man</p>
            </header>
            <section className="product-card__card-xs">
                {
                  mappedProducts?.slice(8,16)?.map(product=>(
                      
                    <ProductCard key={product.id} product={product} />
                  )
                  )
                }
                
                <div className='more'>
                  <div >
                    <p className="price see-more">+</p>
                  </div>
                </div>
            </section>
            </main>
            <main className='category'>
            <header>
              <p className="price">Kids</p>
            </header>
            <section className="product-card__card-xs">
                {
                  mappedProducts?.slice(16,24)?.map(product=>(
                      
                    <ProductCard key={product.id} product={product} />
                  )
                  )
                }
                
                <div className='more'>
                  <div >
                    <p className="price see-more">+</p>
                  </div>
                </div>
            </section>
            </main>
          </>
        }
      </>
    )
}