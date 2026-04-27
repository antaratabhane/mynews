import React from 'react'
import {useState, useEffect} from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Header = ({setCategory, setSearch, setLang, setBurger, burger}) => {

  return (
    <div className='bg-linear-to-r from-[#e7efc8] via-[#dbeaa7] to-[#cfe68f] min-w-full min-h-20 flex items-center flex-wrap gap-y-4 py-4 px-4 justify-start'>
      <button className='order-1 md:hidden mx-4' onClick={() => setBurger(!burger)}><FontAwesomeIcon icon={faBars} /></button>
      <h2 className='order-2 text-3xl md:text-3xl md:order-1 text-[#2f3e2f] font-bold ml-4'>MyNews</h2>
      <ul className={`md:hidden flex-col ml-6 justify-around gap-3 cursor-pointer absolute top-12 left-0 px-3 pt-3 pb-3 bg-[#dfecac] rounded-md ${burger ? "flex" : "hidden"}`} >
        <li className='text-[#4a5d4a] inline-block active:text-[#2f3e2f]' onClick={ () => setCategory("trending") }>Trending</li>
        <li className='text-[#4a5d4a]' onClick={ () => setCategory("business") }>Business</li>
        <li className='text-[#4a5d4a]' onClick={ () => setCategory("technology") }>Technology</li>
        <li className='text-[#4a5d4a]' onClick={ () => setCategory("politics") }>Politics</li>
        <li className='text-[#4a5d4a]' onClick={ () => setCategory("sports") }>Sports</li>
      </ul>

      <ul className='hidden order-3 md:flex md:order-2 ml-6 items-center gap-6 cursor-pointer'>
        <li className='text-[#4a5d4a] hover:bg-[#9ec92a] hover:text-white hover:rounded-sm hover:p-1' onClick={ () => setCategory("trending") }>Trending</li>
        <li className='text-[#4a5d4a] hover:bg-[#9ec92a] hover:text-white hover:rounded-sm hover:p-1' onClick={ () => setCategory("business") }>Business</li>
        <li className='text-[#4a5d4a] hover:bg-[#9ec92a] hover:text-white hover:rounded-sm hover:p-1' onClick={ () => setCategory("technology") }>Technology</li>
        <li className='text-[#4a5d4a] hover:bg-[#9ec92a] hover:text-white hover:rounded-sm hover:p-1' onClick={ () => setCategory("politics") }>Politics</li>
        <li className='text-[#4a5d4a] hover:bg-[#9ec92a] hover:text-white hover:rounded-sm hover:p-1' onClick={ () => setCategory("sports") }>Sports</li>
      </ul>

      <input 
      type="text" 
      spellCheck="false"
      className='w-full order-5 md:w-80 md:order-3 md:ml-auto bg-[#f4f8dc] rounded-full h-10 justify-end mr-4 px-4 shadow-[5px_5px_10px_#c5d89a,-5px_-5px_10px_#ffffff] outline-none' 
      placeholder="Search news..." 
      onKeyDown={(e) => {
        if(e.key === "Enter"){
          setSearch(e.target.value)
        }
      }}
      />
      
      <select
      onChange={(e) => setLang(e.target.value === "Hindi" ? "hi" : "en")} 
      className='ml-auto order-4 md:justify-end md:appearance-none md:order-4 md:ml-0 mr-4 h-10 rounded-full px-4 shadow-[5px_5px_10px_#c5d89a,-5px_-5px_10px_#ffffff] text-[#4a5d4a] cursor-pointer outline-none'
      >
        <option className='bg-[#9ec92a] rounded-md focus:text-white hover:bg-[#e7efc8]' value="English">English</option>
        <option className='bg-[#9ec92a] rounded-md focus:text-white hover:bg-[#e7efc8]' value="Hindi">Hindi</option>
      </select>
      
    </div>
  )
}

export default Header