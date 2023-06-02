import React, { useEffect, useState } from "react";
import OtherProductCard from "./otherProductCard";

const OtherDeals: React.FC = () =>{
    const [products, setProducts] = useState<number[]>([]);

    const arr: number[] = [];
    for(let i: number = 0; i<5; i++){
        arr.push(i);
    }
    
    useEffect(()=>{
        setProducts(arr);
    },[]) 

    return(
        <>
         <section className="my-6">
            <div className="sm:text-center sm:mx-auto sm:max-w-[70vw]">
             {/* <div>
                <strong className="inline-block text-center text-white rounded-[10px] py-2 px-5 bg-yellow-800">Best Deals</strong>
             </div> */}
             <h1 className="font-bold text-5xl mb-4">
                <span> Best deals that </span>
                <span className="text-yellow-800"> you should not Miss </span>
             </h1>
            </div>
            <div className="mt-8 mb-16 sm:text-center sm:mx-auto sm:max-w-[70vw]">
                <p>
                    Lorem ipsum dolor sit amet consectetur 
                    adipisicing elit. Ad eum reprehenderit 
                    exercitationem dolor in, itaque, iure non 
                    laborum officia, placeat earum pariatur
                     asperiores. Nobis blanditiis totam iusto 
                     repudiandae, similique ad? Lorem ipsum dolor sit amet consectetur 
                    adipisicing elit. Ad eum reprehenderit 
                    exercitationem dolor in, itaque, iure non 
                    laborum officia, placeat earum pariatur
                     asperiores. Nobis blanditiis totam iusto 
                     repudiandae, similique ad?
                </p>
            </div>
            <div className="flex flex-col xSm:grid xSm:grid-col-2 lg:grid-cols-5 gap-4">
             {/* {products.map((p,i)=>{
               return( */}
                <OtherProductCard />
               {/* )
             })} */}
            </div>
         </section>
        </>
    )
}

export default OtherDeals;