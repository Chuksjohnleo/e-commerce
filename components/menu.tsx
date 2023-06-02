import React from "react";
import Link from "next/link";

interface myProps {
   handler: () => void;
   theWidth: string
}

const Menu: React.FC<myProps> = ({ handler, theWidth }) =>{
    return(
        <div className={`fixed rounded-br-2xl shadow-yellow-800 shadow-md z-50 overflow-y-auto bg-white top-0 ${theWidth} transition-[width] duration-300 max-w-[500px]`}>
         <div className="flex justify-between items-center font-extrabold m-1 p-1">
            <div className="text-xl">Menu</div>
            <div>
              <button onClick={handler} className="text-3xl rounded-lg hover:bg-yellow-800/80 hover:fill-white">
               <svg width="40" height="40" viewBox="0 0 512 512">
                 <g id="Page-1" stroke="none" strokeWidth="1" fillRule="evenodd">
                   <g id="work-case" transform="translate(91.520000, 91.520000)">
                    <polygon id="Close" points="328.96 30.2933333 298.666667 1.42108547e-14 164.48 134.4 30.2933333 1.42108547e-14 1.42108547e-14 30.2933333 134.4 164.48 1.42108547e-14 298.666667 30.2933333 328.96 164.48 194.56 298.666667 328.96 328.96 298.666667 194.56 164.48">
                    </polygon>
                   </g>
                 </g>
               </svg>
              </button>
            </div>
         </div>
         <nav className="flex flex-col p-3 font-bold justify-center">
          <Link className="p-2 border-t hover:text-white hover:bg-yellow-800" href='/'>
            Home
          </Link>
          <Link className="p-2 border-t hover:text-white hover:bg-yellow-800" href='/about-us'>
            About us
          </Link>
          <Link className="p-2 border-t hover:text-white hover:bg-yellow-800" href='/cart'>
            Cart
          </Link>
          <Link className="p-2 border-t hover:text-white hover:bg-yellow-800" href='/privacy-policy'>
           Privacy Policy
          </Link>
         </nav>
        </div>
    )
}

export default Menu;