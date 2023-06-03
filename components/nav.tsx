import Link from 'next/link';
import React, { useState } from 'react';
import Menu from './menu';


const Nav: React.FC = () =>{
  const [theWidth, setTheWidth] = useState<string>('w-0');

  function openAndCloseMenu() {
    if(theWidth==='w-0'){
      setTheWidth('w-[70vw]');
    }else{
      setTheWidth('w-0');
    }
  }
    return(
    <>
    <header className='sticky top-0 z-50 backdrop-blur bg-white/80'>
     <nav className='flex border-b justify-between py-4 p-1 items-center'>
      {/* <div>
        <svg width="30" height="30" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
         <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
        </svg>
      </div> */}
      <div className='text-center flex justify-around gap-2'>
         <div>
        {/* <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8 8H16M8 12H13M7 16V21L12 16H20V4H4V16H7Z" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg> */}
           <button onClick={openAndCloseMenu} className='rounded hover:bg-yellow-800/80 hover:fill-white'>
            <svg width="30" height="30" viewBox="0 0 16 16">
             <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
            </svg>
           </button>
         </div>
         <h1 className='font-extrabold text-[16.1px] xSm:text-xl'>
           <span> Real </span> 
           <span className='text-yellow-800'> Trader </span>
         </h1>
      </div>
      <div className='hidden sm:flex justify-around gap-1 text-[13px] sm:gap-9 xSm:text-[16.1px] font-semibold'>
        <div>
         <Link href='/'>
          About
         </Link>
        </div>
        <div>
         <Link href='/'>
           Booked
         </Link>
        </div>
        <div>
         <Link href='/'>
           Pricing
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
    <Menu handler={openAndCloseMenu} theWidth={theWidth} />
    </>
    )
}

export default Nav;