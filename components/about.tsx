import React from "react";
import Image from "next/image";
import demoProduct from './assets/favicon.jpg';


const About: React.FC = () =>{
    return(
        <>
         <section className="my-2 mx-1">
            <h1 className="text-5xl font-bold my-8">
                <span> Learn More </span>
                <span className="text-yellow-800">About Us</span>
            </h1>
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
            </p>
            <div>
                <button className="py-1 text-white bg-yellow-800 px-6 rounded-md my-3">Read more</button>
            </div>
         </section>
        </>
    )
}

export default About;