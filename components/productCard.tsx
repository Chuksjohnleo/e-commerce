import React from "react";
import Image from "next/image";
import demoProduct from './assets/favicon.jpg';

interface myComp {
    p: number
}

const ProductCard: React.FC<myComp> = ({ p }) =>{
    return(
        <>
         <div className="my-2 mx-1 shadow-xl shadow-yellow-800 rounded-2xl">
            <div>
              <Image className="w-screen rounded-t-2xl sm:w-full h-[250px] object-cover" src={demoProduct} alt='demo product' width={200} height={300} />
            </div>
            <div className="flex text-[13px] text-center xSm:text-[16.1px]">
                <div className="flex p-1 m-1 items-center">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                   <path d="M8 8H16M8 12H13M7 16V21L12 16H20V4H4V16H7Z" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span>5 rooms</span>
                </div>
                <div className="flex p-1 xSm:m-1 items-center">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                   <path d="M8 8H16M8 12H13M7 16V21L12 16H20V4H4V16H7Z" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span>5 beds</span>
                </div>
                <div className="flex p-1 m-1 items-center">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                   <path d="M8 8H16M8 12H13M7 16V21L12 16H20V4H4V16H7Z" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span>5% off</span>
                </div>
            </div>
            <div className="mt-2">
                <strong className="text-xl p-2">$105.03</strong>
            </div>
            <div className="p-2 flex items-center text-cente gap-3 font-medium pb-8">
             <svg width="50" height="50" viewBox="0 0 1024 1024">
              <path d="M972 520.8c-6.4 0-12-2.4-16.8-7.2L530.4 86.4c-4.8-4.8-11.2-8-18.4-8-6.4 0-12.8 2.4-18.4 8L68.8 512c-4.8 4.8-10.4 7.2-16.8 7.2s-12-2.4-16-6.4c-4.8-4-7.2-8.8-7.2-15.2-0.8-7.2 2.4-14.4 7.2-19.2L458.4 52.8c14.4-14.4 32.8-22.4 52.8-22.4s38.4 8 52.8 22.4L988.8 480c4.8 4.8 7.2 11.2 7.2 18.4 0 7.2-4 13.6-8.8 17.6-4.8 3.2-10.4 4.8-15.2 4.8z" />
              <path d="M637.6 998.4v-33.6h-33.6V904c0-51.2-41.6-92-92-92-51.2 0-92 41.6-92 92v60.8h-33.6v33.6H196.8c-40.8 0-73.6-32.8-73.6-73.6V509.6c0-13.6 10.4-24 24-24s24 10.4 24 24v415.2c0 14.4 11.2 25.6 25.6 25.6h175.2v-45.6c0-77.6 63.2-140 140-140s140 63.2 140 140v45.6h175.2c14.4 0 25.6-11.2 25.6-25.6V509.6c0-13.6 10.4-24 24-24s24 10.4 24 24v415.2c0 40.8-32.8 73.6-73.6 73.6H637.6z" />
               <path d="M604 998.4v-48h48v48h-48z m-232 0v-48h48v48h-48z" />
             </svg>
             <p>{`Located in No. ${p} Obodoma, Igboland`}</p>
            </div>
         </div>
        </>
    )
}

export default ProductCard;