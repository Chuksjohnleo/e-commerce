import React, { useEffect, useState } from "react";
import ProductCard from "./productCard";

const ProductList: React.FC = () =>{
    const [products, setProducts] = useState<number[]>([]);

    const arr: number[] = [];
    for(let i: number = 0; i<6; i++){
        arr.push(i);
    }
    
    useEffect(()=>{
        setProducts(arr);
    },[]) 

    return(
        <>
         <section className="my-6">
            <div>
             <div>
                <strong className="inline-block text-center text-white rounded-[10px] py-2 px-5 bg-yellow-800">New</strong>
             </div>
             <h1 className="font-bold text-3xl mb-4">
                <span className="text-yellow-800"> Newest </span>
                <span> Deals </span>
             </h1>
            </div>
            <div className="flex flex-col justify-center items-center sm:justify-center sm:grid sm:grid-cols-2 lg:grid-cols-3">
             {products.map((p,i)=>{
               return(
                <ProductCard p={p} key={i} />
               )
             })}
            </div>
         </section>
        </>
    )
}

export default ProductList;