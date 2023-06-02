import React from "react";
import Image from "next/image";
import demoProduct from './assets/favicon.jpg';


const Services: React.FC = () =>{
    return(
        <>
         <section className="my-2 mx-1 pb-12">
            <h1 className="text-3xl font-bold my-8 mx-5"> Benefits </h1>
            <div className="grid grid-cols-2 text-center  text-[8px] xSm:p-6 xSm:text-[12px] sm:text-[16.1px] p-1">
                <div className="flex border flex-col shadow-xl rounded-md p-2 m-1 items-center">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                   <path d="M8 8H16M8 12H13M7 16V21L12 16H20V4H4V16H7Z" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <h2 className="text-sm sm:text-2xl font-bold"> Good Services </h2>
                  <p> 
                    Lorem ipsum dolor sit amet consectetur 
                    adipisicing elit. Ad eum reprehenderit 
                    {/* exercitationem dolor in, itaque, iure non 
                    laborum officia, placeat earum pariatur
                     asperiores. Nobis blanditiis totam iusto 
                     repudiandae, similique ad? */}
                  </p>
                </div>
                <div className="flex border flex-col translate-y-8 shadow-xl rounded-md p-2 m-1 items-center">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                   <path d="M8 8H16M8 12H13M7 16V21L12 16H20V4H4V16H7Z" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <h2 className="text-sm sm:text-2xl font-bold"> Good Services </h2>
                  <p> 
                    Lorem ipsum dolor sit amet consectetur 
                    adipisicing elit. Ad eum reprehenderit 
                    {/* exercitationem dolor in, itaque, iure non 
                    laborum officia, placeat earum pariatur
                     asperiores. Nobis blanditiis totam iusto 
                     repudiandae, similique ad? */}
                  </p>
                </div>
                <div className="flex border flex-col shadow-xl rounded-md p-2 m-1 items-center">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                   <path d="M8 8H16M8 12H13M7 16V21L12 16H20V4H4V16H7Z" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <h2 className="text-sm sm:text-2xl font-bold"> Good Services </h2>
                  <p> 
                    Lorem ipsum dolor sit amet consectetur 
                    adipisicing elit. Ad eum reprehenderit 
                    {/* exercitationem dolor in, itaque, iure non 
                    laborum officia, placeat earum pariatur
                     asperiores. Nobis blanditiis totam iusto 
                     repudiandae, similique ad? */}
                  </p>
                </div>
                <div className="flex border flex-col translate-y-8 shadow-xl rounded-md p-2 m-1 items-center">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                   <path d="M8 8H16M8 12H13M7 16V21L12 16H20V4H4V16H7Z" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <h2 className="text-sm sm:text-xl font-bold"> Good Services </h2>
                  <p> 
                    Lorem ipsum dolor sit amet consectetur 
                    adipisicing elit. Ad eum reprehenderit 
                    {/* exercitationem dolor in, itaque, iure non 
                    laborum officia, placeat earum pariatur
                     asperiores. Nobis blanditiis totam iusto 
                     repudiandae, similique ad? */}
                  </p>
                </div>
            </div>
         </section>
        </>
    )
}

export default Services;