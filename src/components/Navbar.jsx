import React, {useState} from 'react';
import { IoIosMenu, IoIosClose   } from "react-icons/io";

const Nnavbar = () => {

    const [nav, setNav] = useState(true);

    const handleNav = () => {

        setNav(!nav);
    };

    return ( 
        <nav className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white'> 
            <h1 className='w-full text-3xl font-bold text-[#00fd9a] font-mitev cursor-pointer'>Mitev</h1>
            <ul className='hidden md:flex'>
                <li className='p-4'>Home</li>
                <li className='p-4'>Company</li>
                <li className='p-4'>Resources</li>
                <li className='p-4'>About</li>
                <li className='p-4'>Contact</li>
            </ul>
            <div onClick={handleNav} className='block md:hidden cursor-pointer'>
                {!nav ? <IoIosClose size={45} /> :  <IoIosMenu size={35} />}        
            </div>

            <div className={!nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-gray-900 bg-[#000300] ease-in-out duration-500': 'fixed left-[-100%]'}>
                <h1 className='m-4 w-full text-3xl font-bold text-[#00fd9a] font-mitev'>Mitev</h1>
                <ul className='uppercase'>
                    <li className='p-4 border-b border-gray-600'>Home</li>
                    <li className='p-4 border-b border-gray-600'>Company</li>
                    <li className='p-4 border-b border-gray-600'>Resources</li>
                    <li className='p-4 border-b border-gray-600'>About</li>
                    <li className='p-4 border-b border-gray-600'>Contact</li>
                </ul>
            </div>
        </nav>
     );
}
 
export default Nnavbar;