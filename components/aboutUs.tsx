import React, { useState } from "react";
import Image from "next/image";
import demoProduct from './assets/favicon.jpg';
import Nav from "./nav";
import Services from "./services";
import Footer from "./footer";
import OtherInfo from "./otherInfo";


const AboutUs: React.FC = () =>{
    const [height, setHeight] = useState<string>('h-[500px]');
    
    function handleHeight(): void{
        if(height === 'h-full'){
            setHeight('h-[500px]');
        }else{
            setHeight('h-full');
        }
    }
    return(
        <>
         <Nav />
         <section className="my-2 mx-auto p-3 max-w-[600px]">
            <div className="mx-2">
            <h1 className="text-5xl font-bold my-8">
                <span> Learn More </span>
                <span className="text-yellow-800"> About Us</span>
            </h1>
            <div className={`${height} transition-[height] duration-300 overflow-y-hidden`}>
                <h2 className="text-3xl font-bold mt-8 mb-4 text-yellow-600">Vision</h2>
                <p className="font-medium">
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
                     Lorem ipsum dolor sit amet consectetur 
                    adipisicing elit. Ad eum reprehenderit 
                    exercitationem dolor in, itaque, iure non 
                    laborum officia, placeat earum pariatur
                    </p>
            <h2 className="text-3xl font-bold mt-8 mb-4 text-yellow-600">Education</h2>
             <p> asperiores. Nobis blanditiis totam iusto 
                     repudiandae, similique ad? Lorem ipsum dolor sit amet consectetur 
                    adipisicing elit. Ad eum reprehenderit 
                    exercitationem dolor in, itaque, iure non 
                    laborum officia, placeat earum pariatur
                     asperiores. Nobis blanditiis totam iusto 
                     repudiandae, similique ad?Lorem ipsum dolor sit amet consectetur 
                    adipisicing elit. Ad eum reprehenderit 
                    exercitationem dolor in, itaque, iure non 
                    laborum officia, placeat earum pariatur
                     asperiores. Nobis blanditiis totam iusto 
                     repudiandae, similique ad? Lorem ipsum dolor sit amet consectetur 
                    adipisicing elit. Ad eum reprehenderit 
                    exercitationem dolor in, itaque, iure non 
                    laborum officia, placeat earum pariatur
                     asperiores. Nobis blanditiis totam iusto 
                     repudiandae, similique ad?Lorem ipsum dolor sit amet consectetur 
            </p>  
            <h2 className="text-3xl font-bold mt-8 mb-4 text-yellow-600">Mission</h2>
             <p>adipisicing elit. Ad eum reprehenderit 
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
           {height !=='h-full' ?
           <div>
                <button onClick={handleHeight} className="py-1 text-white bg-yellow-800 px-6 rounded-md my-3">Read more</button>
            </div>
            :""}
         </div>
         </section>
         <Services />
         <OtherInfo />
         <Footer />
        </>
    )
}

export default AboutUs;