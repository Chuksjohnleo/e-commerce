import React from "react";

const Footer: React.FC = () =>{

    return(
        <>
         <section className="mt-16 p-3 text-white border-t text-center bg-slate-600">
             <h1 className="font-bold text-2xl mb-4">
                <span> Real </span>
                <span className="text-yellow-800"> Trader </span>
             </h1>
           <div className="flex flex-col sm:flex-row-reverse justify-around">
           <div className="flex justify-center flex-1">
             <div>
               <svg width="40" height="40" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                 <path d="M8 8H16M8 12H13M7 16V21L12 16H20V4H4V16H7Z" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
               </svg>
             </div>
             <div>
               <svg width="40" height="40" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                 <path d="M8 8H16M8 12H13M7 16V21L12 16H20V4H4V16H7Z" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
               </svg>
             </div>
             <div>
               <svg width="40" height="40" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                 <path d="M8 8H16M8 12H13M7 16V21L12 16H20V4H4V16H7Z" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
               </svg>
             </div>
             <div>
               <svg width="40" height="40" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                 <path d="M8 8H16M8 12H13M7 16V21L12 16H20V4H4V16H7Z" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
               </svg>
             </div>
           </div>
           <div className="flex-1">
            <p className="text-yellow-200 text-[16.1px]">
                    Lorem ipsum dolor sit amet consectetur 
                    adipisicing elit. Ad eum reprehenderit 
                    exercitationem dolor in, itaque, iure non 
            </p>
            <p >&copy;All rights are reserver, Real Trader {new Date().getFullYear()}</p>
           </div>
           </div>
         </section>
        </>
    )
}

export default Footer;