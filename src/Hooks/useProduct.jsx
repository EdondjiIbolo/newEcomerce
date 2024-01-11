import { useEffect, useState } from "react";

export function useProducts({input}){
    const [products , setProducts] = useState([])
    const [loading , setLoading] = useState(false)
   useEffect(()=>{

        
        const getMovies = async ()=>{
            const url = `https://apidojo-hm-hennes-mauritz-v1.p.rapidapi.com/products/list?country=us&lang=en&currentpage=0&pagesize=50&categories=${input}`;
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

                const { results } = data
                
                setProducts(results)
                return results
                
            }
            catch (error) {
                console.error(error);
            }
            finally{
                setLoading(false)
                
            }

        }   
        const data = getMovies()
        
      
    },[input])
    return { products ,  loading }
}