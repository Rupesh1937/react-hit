import React from 'react'

const Navbar = () => {
  return (
    <div className='bg-black p-2 flex'>
        <div className="logo">
            <h1 className='text-lime-300'>RKP</h1>
        </div>

        <div className="contents">
            <a href="#" className='text-slate-500'>My Contents</a>
        </div>
      
    </div>
  )
}

export default Navbar
