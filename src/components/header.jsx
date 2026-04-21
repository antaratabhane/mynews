import React from 'react'

const Header = () => {
  return (
    <div className='bg-linear-to-r from-[#e7efc8] via-[#dbeaa7] to-[#cfe68f] min-w-full h-14 flex items-center'>
        <h2 className='text-3xl font-bold bg-green-100 ml-2'>MyNews</h2>
        <ul className='flex bg-green-200 ml-4 w-4xl justify-around'>
            <li>Trending</li>
            <li>Business</li>
            <li>Techology</li>
            <li>Politics</li>
            <li>Sports</li>
        </ul>
        <input type="text" className='w-80 rounded-full h-10 bg-white ml-auto px-4 shadow-[5px_5px_10px_#c5d89a,-5px_-5px_10px_#ffffff] outline-none'></input>
        <select className='appearance-none bg-green-400 ml-auto mr-4 h-10 rounded-full px-4'>
            <option value="English">English</option>
            <option value="Hindi">Hindi</option>
        </select>
    </div>
  )
}

export default Header