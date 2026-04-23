import React from 'react'
import {useState, useEffect} from 'react'

const Header = ({setCategory, setSearch}) => {

  return (
    <div className='bg-linear-to-r from-[#e7efc8] via-[#dbeaa7] to-[#cfe68f] min-w-full h-20 flex items-center flex-wrap'>
      <h2 className='text-3xl text-[#2f3e2f] font-bold ml-4'>MyNews</h2>
      <ul className='flex ml-6 justify-around gap-6 cursor-pointer'>
        <li className='text-[#4a5d4a]' onClick={ () => setCategory("trending") }>Trending</li>
        <li className='text-[#4a5d4a]' onClick={ () => setCategory("business") }>Business</li>
        <li className='text-[#4a5d4a]' onClick={ () => setCategory("technology") }>Technology</li>
        <li className='text-[#4a5d4a]' onClick={ () => setCategory("politics") }>Politics</li>
        <li className='text-[#4a5d4a]' onClick={ () => setCategory("sports") }>Sports</li>
      </ul>
      <input 
      type="text" 
      className='w-80 bg-[#f4f8dc] rounded-full h-10 ml-auto mr-4 px-4 shadow-[5px_5px_10px_#c5d89a,-5px_-5px_10px_#ffffff] outline-none' 
      placeholder="Search news..." 
      onKeyDown={(e) => {
        if(e.key === "Enter"){
          setSearch(e.target.value)
        }
      }}
      />
      <span>
      <select className='appearance-none ml-auto mr-4 h-10 rounded-full px-4 shadow-[5px_5px_10px_#c5d89a,-5px_-5px_10px_#ffffff] text-[#4a5d4a] cursor-pointer'>
        <option value="English">English</option>
        <option value="Hindi">Hindi</option>
      </select>
      </span>
    </div>
  )
}

export default Header