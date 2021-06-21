import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav
      className='flex justify-between items-center h-16 bg-white text-black relative shadow-sm font-mono'
      role='navigation'
    >
        <h1>Hello</h1>
        <div className='pr-8 md:block hidden'>
            <Link to='/about' className='p-4'>About</Link>
            <Link to='/sim' className='p-4'>Simulation</Link>
            <Link to='/examples' className='p-4'>Examples</Link>
        </div>
    </nav>
  );
};

export default Navbar;