import { useParams } from "react-router-dom";
import { Product } from "./Product";
import { useState , useEffect} from "react";
import { Loader } from "../Loader";
import { SkeletonDetailProduct } from "../Skeletons/SkeletonDetailProduct";

export function ProductDetail(){
    const { id } = useParams()
    
     const useSingleProduct =({id})=>{
        const [product , setProduct] = useState(null)    
        const [loading , setLoading] = useState(true)    
        useEffect(()=>{
    
            const getMovies = async ()=>{
                const url = `https://apidojo-hm-hennes-mauritz-v1.p.rapidapi.com/products/detail?lang=en&country=us&productcode=${id}`
                const options = {
                    method: 'GET',
                    headers: {
                        'X-RapidAPI-Key': '86b2455e59mshc1cce93a6b513b2p16e2f0jsne6a33747cd3d',
                        'X-RapidAPI-Host': 'apidojo-hm-hennes-mauritz-v1.p.rapidapi.com'
                    }
                }
                
                try {
                    setLoading(true)
                    const response = await fetch(url, options);
                    const result = await response.json()
                    const data = await result
    
                    const { product:newProduct } = data
                    
                    setProduct(newProduct)
                    return newProduct
                    
                }
                catch (error) {
                    console.error(error);
                }
                finally{
                    setLoading(false)
                    
                }
    
            }   
            const data = getMovies()
            
          
        },[id])
        return { product , loading}
    }
    const { product , loading } = useSingleProduct({id})
    
    const imagenes = product?.articlesList.slice(1 ,5).map(img=>{
        return img.galleryDetails[0].baseUrl
    })

    const mappedProducts = (product)=>{
        const newProduct = {
            id:product?.code,
            name: product?.name , 
            description:product?.description , 
            images:imagenes,
            price:product?.articlesList[0].whitePrice.price,
    
            category: product?.productTypeName ,
            model:product?.articlesList[0].productTypeName

        }
        return newProduct
    }
    const mappededProducts = mappedProducts(product)

    return (
        <>
        {
            loading ?
            <SkeletonDetailProduct />
            :
            <Product  Product={mappededProducts} /> 
        }
        </>
    )
}