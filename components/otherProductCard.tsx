import React from "react";
import Image from "next/image";
import demoProduct from './assets/favicon.jpg';
import demoProduct2 from './assets/houses/luke-stackpoole-eWqOgJ-lfiI-unsplash.jpg';
import demoProduct3 from './assets/houses/todd-kent-178j8tJrNlc-unsplash.jpg';
import demoProduct4 from './assets/houses/vu-anh-ThyBKNya1yY-unsplash.jpg';
import demoProduct5 from './assets/houses/lena-polishko-CSAIu_LsGLY-unsplash.jpg';
import demoProduct6 from './assets/houses/vu-anh-TiVPTYCG_3E-unsplash.jpg';

interface myComp {
    p: number
}

const OtherProductCard: React.FC = () =>{
    
    return(
        <>
         <div className="flex lg:col-span-2 lg:row-span-2 xSm:col-span-2 justify-center items-end mx-1 xSm:h-[300px] lg:h-[520px] shadow-xl rounded-2xl relative bg-yellow-800">
           <div className="absolute text-white flex flex-col z-30 backdrop-blu p-2 w-full m-3">
             <div>
               <strong className="text-[16.1px] sm:text-3xl"> The first deal </strong>
             </div>
             <div className="p-2 flex items-center text-cente gap-3 font-medium">
             <svg fill='white' width="50" height="50" viewBox="0 0 1024 1024">
              <path d="M972 520.8c-6.4 0-12-2.4-16.8-7.2L530.4 86.4c-4.8-4.8-11.2-8-18.4-8-6.4 0-12.8 2.4-18.4 8L68.8 512c-4.8 4.8-10.4 7.2-16.8 7.2s-12-2.4-16-6.4c-4.8-4-7.2-8.8-7.2-15.2-0.8-7.2 2.4-14.4 7.2-19.2L458.4 52.8c14.4-14.4 32.8-22.4 52.8-22.4s38.4 8 52.8 22.4L988.8 480c4.8 4.8 7.2 11.2 7.2 18.4 0 7.2-4 13.6-8.8 17.6-4.8 3.2-10.4 4.8-15.2 4.8z" />
              <path d="M637.6 998.4v-33.6h-33.6V904c0-51.2-41.6-92-92-92-51.2 0-92 41.6-92 92v60.8h-33.6v33.6H196.8c-40.8 0-73.6-32.8-73.6-73.6V509.6c0-13.6 10.4-24 24-24s24 10.4 24 24v415.2c0 14.4 11.2 25.6 25.6 25.6h175.2v-45.6c0-77.6 63.2-140 140-140s140 63.2 140 140v45.6h175.2c14.4 0 25.6-11.2 25.6-25.6V509.6c0-13.6 10.4-24 24-24s24 10.4 24 24v415.2c0 40.8-32.8 73.6-73.6 73.6H637.6z" />
               <path d="M604 998.4v-48h48v48h-48z m-232 0v-48h48v48h-48z" />
             </svg>
             <p>{`Located in No. 1 Obodoma, Igboland`}</p>
            </div>
           </div>
           <Image className="object-cover rounded-2xl w-full h-full" src={demoProduct2} alt="demo deal" height={200} width={200} />
         </div>

         <div className="flex lg:col-span-1 row-span-2 sepia-0 justify-center items-end mx-1 xSm:h-[520px] shadow-xl rounded-2xl relative bg-yellow-800">
           <div className="absolute text-white flex flex-col z-30 backdrop-blu p-2 w-full m-3">
             <div>
               <strong className="text-[16.1px] sm:text-3xl"> The second deal </strong>
             </div>
             <div className="p-2 flex items-center text-cente gap-3 font-medium">
             <svg fill='white' width="50" height="50" viewBox="0 0 1024 1024">
              <path d="M972 520.8c-6.4 0-12-2.4-16.8-7.2L530.4 86.4c-4.8-4.8-11.2-8-18.4-8-6.4 0-12.8 2.4-18.4 8L68.8 512c-4.8 4.8-10.4 7.2-16.8 7.2s-12-2.4-16-6.4c-4.8-4-7.2-8.8-7.2-15.2-0.8-7.2 2.4-14.4 7.2-19.2L458.4 52.8c14.4-14.4 32.8-22.4 52.8-22.4s38.4 8 52.8 22.4L988.8 480c4.8 4.8 7.2 11.2 7.2 18.4 0 7.2-4 13.6-8.8 17.6-4.8 3.2-10.4 4.8-15.2 4.8z" />
              <path d="M637.6 998.4v-33.6h-33.6V904c0-51.2-41.6-92-92-92-51.2 0-92 41.6-92 92v60.8h-33.6v33.6H196.8c-40.8 0-73.6-32.8-73.6-73.6V509.6c0-13.6 10.4-24 24-24s24 10.4 24 24v415.2c0 14.4 11.2 25.6 25.6 25.6h175.2v-45.6c0-77.6 63.2-140 140-140s140 63.2 140 140v45.6h175.2c14.4 0 25.6-11.2 25.6-25.6V509.6c0-13.6 10.4-24 24-24s24 10.4 24 24v415.2c0 40.8-32.8 73.6-73.6 73.6H637.6z" />
               <path d="M604 998.4v-48h48v48h-48z m-232 0v-48h48v48h-48z" />
             </svg>
             <p>{`Located in No. 1 Obodoma, Igboland`}</p>
            </div>
           </div>
           <Image className="object-cover rounded-2xl w-full h-full" src={demoProduct3} alt="demo deal" height={200} width={200} />
         </div>

         <div className="flex sepia-0 justify-center items-end mx-1 xSm:h-[250px] shadow-xl rounded-2xl relative bg-yellow-800">
           <div className="absolute text-white flex flex-col z-30 backdrop-blu p-2 w-full m-3">
             <div>
               <strong className="text-[16.1px] sm:text-3xl"> The third deal </strong>
             </div>
             <div className="p-2 flex items-center text-cente gap-3 font-medium">
             <svg fill='white' width="50" height="50" viewBox="0 0 1024 1024">
              <path d="M972 520.8c-6.4 0-12-2.4-16.8-7.2L530.4 86.4c-4.8-4.8-11.2-8-18.4-8-6.4 0-12.8 2.4-18.4 8L68.8 512c-4.8 4.8-10.4 7.2-16.8 7.2s-12-2.4-16-6.4c-4.8-4-7.2-8.8-7.2-15.2-0.8-7.2 2.4-14.4 7.2-19.2L458.4 52.8c14.4-14.4 32.8-22.4 52.8-22.4s38.4 8 52.8 22.4L988.8 480c4.8 4.8 7.2 11.2 7.2 18.4 0 7.2-4 13.6-8.8 17.6-4.8 3.2-10.4 4.8-15.2 4.8z" />
              <path d="M637.6 998.4v-33.6h-33.6V904c0-51.2-41.6-92-92-92-51.2 0-92 41.6-92 92v60.8h-33.6v33.6H196.8c-40.8 0-73.6-32.8-73.6-73.6V509.6c0-13.6 10.4-24 24-24s24 10.4 24 24v415.2c0 14.4 11.2 25.6 25.6 25.6h175.2v-45.6c0-77.6 63.2-140 140-140s140 63.2 140 140v45.6h175.2c14.4 0 25.6-11.2 25.6-25.6V509.6c0-13.6 10.4-24 24-24s24 10.4 24 24v415.2c0 40.8-32.8 73.6-73.6 73.6H637.6z" />
               <path d="M604 998.4v-48h48v48h-48z m-232 0v-48h48v48h-48z" />
             </svg>
             <p>{`Located in No. 1 Obodoma, Igboland`}</p>
            </div>
           </div>
           <Image className="object-cover rounded-2xl w-full h-full" src={demoProduct4} alt="demo deal" height={200} width={200} />
         </div>

         <div className="flex sepia-0 justify-center items-end mx-1 xSm:h-[250px] shadow-xl rounded-2xl relative bg-yellow-800">
           <div className="absolute text-white flex flex-col z-30 backdrop-blu p-2 w-full m-3">
             <div>
               <strong className="text-[16.1px] sm:text-3xl"> The fourth deal </strong>
             </div>
             <div className="p-2 flex items-center text-cente gap-3 font-medium">
             <svg fill='white' width="50" height="50" viewBox="0 0 1024 1024">
              <path d="M972 520.8c-6.4 0-12-2.4-16.8-7.2L530.4 86.4c-4.8-4.8-11.2-8-18.4-8-6.4 0-12.8 2.4-18.4 8L68.8 512c-4.8 4.8-10.4 7.2-16.8 7.2s-12-2.4-16-6.4c-4.8-4-7.2-8.8-7.2-15.2-0.8-7.2 2.4-14.4 7.2-19.2L458.4 52.8c14.4-14.4 32.8-22.4 52.8-22.4s38.4 8 52.8 22.4L988.8 480c4.8 4.8 7.2 11.2 7.2 18.4 0 7.2-4 13.6-8.8 17.6-4.8 3.2-10.4 4.8-15.2 4.8z" />
              <path d="M637.6 998.4v-33.6h-33.6V904c0-51.2-41.6-92-92-92-51.2 0-92 41.6-92 92v60.8h-33.6v33.6H196.8c-40.8 0-73.6-32.8-73.6-73.6V509.6c0-13.6 10.4-24 24-24s24 10.4 24 24v415.2c0 14.4 11.2 25.6 25.6 25.6h175.2v-45.6c0-77.6 63.2-140 140-140s140 63.2 140 140v45.6h175.2c14.4 0 25.6-11.2 25.6-25.6V509.6c0-13.6 10.4-24 24-24s24 10.4 24 24v415.2c0 40.8-32.8 73.6-73.6 73.6H637.6z" />
               <path d="M604 998.4v-48h48v48h-48z m-232 0v-48h48v48h-48z" />
             </svg>
             <p>{`Located in No. 1 Obodoma, Igboland`}</p>
            </div>
           </div>
           <Image className="object-cover rounded-2xl w-full h-full" src={demoProduct5} alt="demo deal" height={200} width={200} />
         </div>

         <div className="flex sepia-0 justify-center items-end mx-1 xSm:h-[250px] shadow-xl rounded-2xl relative bg-yellow-800">
           <div className="absolute text-white flex flex-col z-30 backdrop-blu p-2 w-full m-3">
             <div>
               <strong className="text-[16.1px] sm:text-3xl"> The fifth deal </strong>
             </div>
             <div className="p-2 flex items-center text-cente gap-3 font-medium">
             <svg fill='white' width="50" height="50" viewBox="0 0 1024 1024">
              <path d="M972 520.8c-6.4 0-12-2.4-16.8-7.2L530.4 86.4c-4.8-4.8-11.2-8-18.4-8-6.4 0-12.8 2.4-18.4 8L68.8 512c-4.8 4.8-10.4 7.2-16.8 7.2s-12-2.4-16-6.4c-4.8-4-7.2-8.8-7.2-15.2-0.8-7.2 2.4-14.4 7.2-19.2L458.4 52.8c14.4-14.4 32.8-22.4 52.8-22.4s38.4 8 52.8 22.4L988.8 480c4.8 4.8 7.2 11.2 7.2 18.4 0 7.2-4 13.6-8.8 17.6-4.8 3.2-10.4 4.8-15.2 4.8z" />
              <path d="M637.6 998.4v-33.6h-33.6V904c0-51.2-41.6-92-92-92-51.2 0-92 41.6-92 92v60.8h-33.6v33.6H196.8c-40.8 0-73.6-32.8-73.6-73.6V509.6c0-13.6 10.4-24 24-24s24 10.4 24 24v415.2c0 14.4 11.2 25.6 25.6 25.6h175.2v-45.6c0-77.6 63.2-140 140-140s140 63.2 140 140v45.6h175.2c14.4 0 25.6-11.2 25.6-25.6V509.6c0-13.6 10.4-24 24-24s24 10.4 24 24v415.2c0 40.8-32.8 73.6-73.6 73.6H637.6z" />
               <path d="M604 998.4v-48h48v48h-48z m-232 0v-48h48v48h-48z" />
             </svg>
             <p>{`Located in No. 1 Obodoma, Igboland`}</p>
            </div>
           </div>
           <Image className="object-cover rounded-2xl w-full h-full" src={demoProduct6} alt="demo deal" height={200} width={200} />
         </div>

         <div className="flex sepia-0 justify-center items-end sm:mx-1 h-[250px] shadow-xl rounded-2xl relative bg-yellow-800">
           <div className="absolute text-white flex flex-col z-30 backdrop-blu p-[1px] sm:p-2 w-full m-0 sm:m-3">
             <div>
               <strong className="text-[16.1px] sm:text-3xl"> The sixth deal </strong>
             </div>
             <div className="p-2 flex items-center gap-3 font-medium">
             <svg fill='white' width="50" height="50" viewBox="0 0 1024 1024">
              <path d="M972 520.8c-6.4 0-12-2.4-16.8-7.2L530.4 86.4c-4.8-4.8-11.2-8-18.4-8-6.4 0-12.8 2.4-18.4 8L68.8 512c-4.8 4.8-10.4 7.2-16.8 7.2s-12-2.4-16-6.4c-4.8-4-7.2-8.8-7.2-15.2-0.8-7.2 2.4-14.4 7.2-19.2L458.4 52.8c14.4-14.4 32.8-22.4 52.8-22.4s38.4 8 52.8 22.4L988.8 480c4.8 4.8 7.2 11.2 7.2 18.4 0 7.2-4 13.6-8.8 17.6-4.8 3.2-10.4 4.8-15.2 4.8z" />
              <path d="M637.6 998.4v-33.6h-33.6V904c0-51.2-41.6-92-92-92-51.2 0-92 41.6-92 92v60.8h-33.6v33.6H196.8c-40.8 0-73.6-32.8-73.6-73.6V509.6c0-13.6 10.4-24 24-24s24 10.4 24 24v415.2c0 14.4 11.2 25.6 25.6 25.6h175.2v-45.6c0-77.6 63.2-140 140-140s140 63.2 140 140v45.6h175.2c14.4 0 25.6-11.2 25.6-25.6V509.6c0-13.6 10.4-24 24-24s24 10.4 24 24v415.2c0 40.8-32.8 73.6-73.6 73.6H637.6z" />
               <path d="M604 998.4v-48h48v48h-48z m-232 0v-48h48v48h-48z" />
             </svg>
             <p>{`Located in No. 1 Obodoma, Igboland`}</p>
            </div>
           </div>
           <Image className="object-cover rounded-2xl w-full h-full" src={demoProduct} alt="demo deal" height={200} width={200} />
         </div>
        </>
    )
}

export default OtherProductCard;