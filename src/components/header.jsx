import React from 'react'

const Header = () => {
  return (
    <div className='bg-linear-to-r from-[#e7efc8] via-[#dbeaa7] to-[#cfe68f] min-w-full h-14 flex items-center flex-wrap'>
        <h2 className='text-3xl text-[#2f3e2f] font-bold ml-2'>MyNews</h2>
        <ul className='flex ml-4 w-4xl justify-around'>
            <li className='text-[#4a5d4a]'>Trending</li>
            <li className='text-[#4a5d4a]'>Business</li>
            <li className='text-[#4a5d4a]'>Techology</li>
            <li className='text-[#4a5d4a]'>Politics</li>
            <li className='text-[#4a5d4a]'>Sports</li>
        </ul>
        <input 
        type="text" 
        className='w-80 bg-white rounded-full h-10 ml-auto px-4 shadow-[5px_5px_10px_#c5d89a,-5px_-5px_10px_#ffffff] outline-none' 
        placeholder="Search news..." 
        />
        <select className='appearance-none ml-auto mr-4 h-10 rounded-full px-4 bg-[#f4f8dc] shadow-[5px_5px_10px_#c5d89a,-5px_-5px_10px_#ffffff]'>
            <option value="English">English</option>
            <option value="Hindi">Hindi</option>
        </select>
    </div>
  )
}

export default Header