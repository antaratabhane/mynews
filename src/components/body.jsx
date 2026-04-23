import React, { useState } from 'react'
import { useEffect } from 'react'
const apikey = import.meta.env.VITE_API_KEY
const Body = ({category}) => {
    const [articles, setArticles] = useState([]) 
    const yesterday = new Date()
    yesterday.setDate(yesterday.getDate() - 1)
    const date = yesterday.toISOString().split("T")[0]
    useEffect(() => {
        const fetchNews = async() => {
            const response = await fetch(`https://newsapi.org/v2/everything?q=${category}&from=${date}&sortBy=popularity&apiKey=${apikey}`)
            let data = await response.json()
            setArticles(data.articles)
        }
        fetchNews();
    }, [category])
    return (
    <div className='bg-linear-to-r from-[#e9eccf] via-[#e2e6b8] to-[#c9d87a] flex flex-col items-center py-8'>
        {articles.slice(0,5).map((news, index) => (
            <div key={index} className='my-4 bg-[#e6e8c8] h-60 w-2/3 rounded-2xl flex flex-wrap shadow-[6px_6px_12px_#c4ce8a,-6px_-6px_12px_#ffffff]'>
                <img src={news.urlToImage} className='w-1/3 h-full rounded-l-2xl object-cover'/>
                <div className='w-2/3 ps-6 flex flex-col justify-center gap-4'>
                    <h4 className='text-xl font-bold'>{news.title}</h4>
                    <div  className='text-xs'>{date}</div>
                    <p className='text-justify pe-5 text-sm'>{news.description}</p>
                </div>
            </div>
        ))}
        
        <div className='flex gap-4 mt-8 mb-4'>
            <button className='bg-[#E7EFC8] rounded-full shadow-[6px_6px_12px_#C5D89A,-6px_-6px_12px_#ffffff] w-10 h-10'>&#60;</button>
            <button className='bg-[#E7EFC8] rounded-full shadow-[6px_6px_12px_#C5D89A,-6px_-6px_12px_#ffffff] w-10 h-10'>1</button>
            <button className='bg-[#E7EFC8] rounded-full shadow-[6px_6px_12px_#C5D89A,-6px_-6px_12px_#ffffff] w-10 h-10'>2</button>
            <button className='bg-[#E7EFC8] rounded-full shadow-[6px_6px_12px_#C5D89A,-6px_-6px_12px_#ffffff] w-10 h-10'>3</button>
            <button className='bg-[#E7EFC8] rounded-full shadow-[6px_6px_12px_#C5D89A,-6px_-6px_12px_#ffffff] w-10 h-10'>4</button>
            <button className='bg-[#E7EFC8] rounded-full shadow-[6px_6px_12px_#C5D89A,-6px_-6px_12px_#ffffff] w-10 h-10'>&#62;</button>
        </div>

    </div>
    
  )
}
export default Body
