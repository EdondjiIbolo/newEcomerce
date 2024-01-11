import Skeleton from "react-loading-skeleton"

export function SkeletonDetailProduct(){
    return(
        <div className="product">
            <section className="product-img">
                    <section className='slide-container'>
                        <ul className="slider" >
                            <li className="slide__item" >
                                <Skeleton width={'100%'} height={'250px'}/>
                            </li>
                            <li className="slide__item">
                                <Skeleton />
                            </li>
                        </ul>
                    </section>
                        <ul className="pagination">
                            <label className="pagination__item">
                                <Skeleton width={'100px'} height={'100px'} />
                            </label>
                            <label className="pagination__item">
                                <Skeleton width={'100px'} height={'100px'} />
                            </label>
                            <label className="pagination__item">
                                <Skeleton width={'100px'} height={'100px'} />
                            </label>
                            <label className="pagination__item">
                                <Skeleton width={'100px'} height={'100px'} />
                            </label>
                            
                            
                        </ul>
                </section>
                <section className="product__detail">
                    <h1 className="product__type"><Skeleton width={100} height={25}/></h1>
                    <p className="product__title"><Skeleton  width={'100%'} height={30}/></p>
                   
                        <div style={{gap:'8px',display:'flex' , flexDirection:'column'}}>
                            <Skeleton width={'100%'} height={15}/>
                            <Skeleton width={'100%'} height={15}/>
                            <Skeleton width={'100%'} height={15}/>
                            <Skeleton width={'100%'} height={15}/>
                        </div>
                    
                    <div className="product__price">
                        <div className='price-box'>
                            <span className="price"><Skeleton width={70} height={20}/></span>
                            <span ><Skeleton height={20} width={30}/></span>
                        </div>
                        <span className='product__old-price'><Skeleton height={20} width={35}/></span>
                    </div>
                    <div className="input-groups">
                        <div className='buttons-action'>
                           <Skeleton />
                        </div>
                        <button className="btn-skeleton">
                            <Skeleton />
                        </button>
                        
                    </div>
                </section>
        </div>
    )
}