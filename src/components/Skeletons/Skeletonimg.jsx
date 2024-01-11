import { useState } from "react"
import Skeleton from "react-loading-skeleton"
import 'react-loading-skeleton/dist/skeleton.css'
import '../single-component/productcard.css'
export function SkeletonImg(){
   
    return (
        < >
        <div className="product-card" style={{gap:'5px'}} >
                <picture className='product-card__img'>
                    <Skeleton width={'100%'} height={'100%'}/>
                </picture>
            <div className='product-card__description'>
                <Skeleton width={'25%'}/>
                <Skeleton/>
                <Skeleton/>
                <Skeleton/>
                <Skeleton width={40} height={25}/>

            </div>
            <div className="rating">
                <Skeleton circle width={25} height={25}/>
            </div>
        </div>
        </>
    )
}

export function SkeletonPicture(){
    return(
        <div style={{padding:'10px', Width:'100%', maxWidth:'250px'}} >
            <Skeleton width={'100%'} height={'100%'}/>
        </div>
    )
}