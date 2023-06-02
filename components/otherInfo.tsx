import React from "react";

const OtherInfo: React.FC = () =>{

    return(
        <>
         <section className="my-16">
             <h1 className="font-bold text-5xl mb-4 text-center">
                <span> Contact </span>
                <span className="text-yellow-800"> Us </span>
             </h1>
           <div className="flex justify-center">
             <div className="flex border flex-col translate-y-8 shadow-xl rounded-md p-2 m-1 items-center">
                  <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                   <path d="M8 8H16M8 12H13M7 16V21L12 16H20V4H4V16H7Z" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <strong className="text-center"> Send an email </strong>
                  <p className="break-words max-w-[40vw] sm:w-full text-center"> 
                   <a className="text-yellow-800 font-semibold" href="mailTo:nwanonenyichukwuka@gmail.com">
                     nwanonenyichukwuka@gmail.com
                   </a>
                  </p>
             </div>
             <div className="flex border flex-col translate-y-8 shadow-xl rounded-md p-2 m-1 items-center">
                  <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                   <path d="M8 8H16M8 12H13M7 16V21L12 16H20V4H4V16H7Z" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <strong className="text-center"> Branch office </strong>
                  <p className="break-words max-w-[40vw] sm:w-full text-center text-yellow-800 font-semibold"> 
                   Number 100, okeike road, Igboland
                  </p>
              </div>
           </div>
         </section>
        </>
    )
}

export default OtherInfo;