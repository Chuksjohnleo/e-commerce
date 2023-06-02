import React, { useState, useEffect } from 'react';
import Nav from './nav';
import Image from 'next/image';
import demoImage from './assets/houses/luke-stackpoole-eWqOgJ-lfiI-unsplash.jpg';
import ProductList from './productList';
import Services from './services';
import About from './about';
import OtherDeals from './otherDeals';
import OtherInfo from './otherInfo';
import Footer from './footer';
// import Fo

function Home(){
    return(
        <>
        <Nav/>
        <div className='p-2'>
         <section>
           <div className='relative flex justify-center items-end'>
            <div className='absolute z-30 w-[90%] box-border backdrop-blur bg-white/50 m-2 p-0 sm:p-2 rounded-xl'>
             <div className='sm:flex text-[13px] xSm:text-[16.1px] break-words sm:text-xl justify-around gap-1 xSm:gap-2 grid grid-cols-2 w-full xSm:m-2 p-1 xSm:p-2 '>
                <div>
                  <h1 className='font-bold'>information1</h1>
                  <p>Description</p>
                </div>
                <div>
                  <h1 className='font-bold'>information1</h1>
                  <p>Description</p>
                </div>
                <div>
                  <h1 className='font-bold'>information1</h1>
                  <p>Description</p>
                </div>
                <div>
                  <button className='sm:px-5 px-2 py-1 sm:py-2 text-white bg-yellow-800 font-bold rounded-full'>Search</button>
                </div>
             </div>
            </div>
            <Image className='w-full border h-[70vh] rounded-[5px] object-cover' height={300} width={300} alt='demo' src={demoImage} />
           </div>
         </section>
         <ProductList />
         <div className='md:grid grid-cols-2 items-center'>
           <Services />
           <About />
         </div>
         <OtherDeals />
         <OtherInfo />
         </div>
         <Footer />
        </>
    )
}

export default Home;