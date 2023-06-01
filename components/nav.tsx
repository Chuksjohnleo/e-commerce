import Link from 'next/link';
import React from 'react';


const Nav: React.FC = () =>{
    return(
    <header>
     <nav className='flex border-b justify-between py-4 p-1 items-center'>
      <div className='text-center'>
         <h1 className='font-extrabold text-x'>
           <span> Real </span> 
           <span className='text-yellow-800'> Trader </span>
         </h1>
      </div>
      <div className='flex justify-around gap-1 text-[13px] sm:gap-9 xSm:text-[16.1px] font-semibold'>
        <div>
         <Link href='/'>
          Link1
         </Link>
        </div>
        <div>
         <Link href='/'>
           Link2
         </Link>
        </div>
        <div>
         <Link href='/'>
           Link3
         </Link>
        </div>
      </div>
      <div className='text-center p-1 bg-yellow-800 rounded-xl text-white'>
         <Link className='font-semibold' href='/'>
          Contact
          </Link>
      </div>
     </nav>
    </header>
    )
}

export default Nav;