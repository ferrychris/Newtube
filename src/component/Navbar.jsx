import React from 'react'
import { FcVideoCall } from 'react-icons/fc'
import { BsPersonVideo3, BsSearch } from 'react-icons/bs'
import { CgMenuGridR } from 'react-icons/cg'
import { BiUserCircle } from 'react-icons/bi'
import { useState } from 'react'

const Navbar = () => {
  const [search, setSearch] = useState([]);
  const [todo, settodo] =useState([])

  function newSearch(e){
    setSearch(e.target.value)
   console.log(search)
  }
  
  return(
  <React.Fragment>
    <div className='flex justify-between ml-[60px] mr-[20px] z-1 absolute mt-3 z-10'>
      <div className='flex text-2xl font-bold '>
        {/* <FcVideoCall className='ml-9 ' /> */}
        <p className='text-[#EC5800] text-3xl'>NEWTUBE</p>
      </div>
      <div className='ml-[250px]'>
        <form action=""  > 
          <BsSearch className='absolute ml-[205px] mt-[8px] text-white'/>
            <input type="text" placeholder="Search Movie" onChange={newSearch} className='border rounded px-[30px] py-[5px] bg-transparent text-white'/>
          
        </form>
      </div>
      <div className='flex text-2xl space-x-5 ml-[300px] font-bold'>
        <button className='rounded-sm text-sm px-2 py-1 bg-[#EC5800] text-white hover:bg-black'>Sign In</button>
        <button className='rounded-sm text-sm px-2 py-1 border text-white hover:bg-[#6e783b]'>Sign Out</button>
      </div>
    </div>
    <div className='bg-black px-10'>

    </div>
  </React.Fragment>
  
)
  }

export default Navbar