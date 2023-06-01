import React, { useState, useEffect } from 'react';
import Nav from './nav';
import Image from 'next/image';
import demoImage from './assets/getcookie.png';
import ProductList from './productList';
import Services from './services';
import About from './about';

function Home(){
    return(
        <>
        <Nav/>
        <div className='p-2'>
         <section>
           <div className='relative flex justify-center items-end'>
            <div className='absolute w-[90%] box-border bg-white/80 m-2 p-0 sm:p-2 rounded-xl'>
             <div className='sm:flex text-[13px] sm:text-xl justify-around gap-2 grid grid-cols-2 w-full m-2 p-2 '>
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
            <Image className='w-full border h-[70vh] rounded-[5px] sm:max-h-[50vh] object-cover' height={300} width={300} alt='demo' src={demoImage} />
           </div>
         </section>
         <ProductList />
         <Services />
         <About />
         </div>
        </>
    )
}

export default Home;