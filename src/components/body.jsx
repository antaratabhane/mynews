import React, { useState } from 'react'
import { useEffect } from 'react'
import { translateCard } from '../services/translateservices.js'
const apikey = import.meta.env.VITE_API_KEY
const Body = ({category, search, page, setPage, lang}) => {
    const [articles, setArticles] = useState([])
    const [translatedArticle, setTranslatedArticle] = useState([]) 

    const yesterday = new Date()
    yesterday.setDate(yesterday.getDate() - 1)
    const date = yesterday.toISOString().split("T")[0]
    const totalPages = Math.ceil((articles?.length || 0) / 8);


    useEffect(() => {
        const fetchNews = async() => {
            const response = await fetch(`https://api.currentsapi.services/v1/search?keywords=${search || category}&language=en&apiKey=${apikey}`)
            let data = await response.json()
            setArticles(data.news || [])
        }
        fetchNews();
    }, [category, search])

    useEffect(() => {
        async function translate(){
            if(lang === "hi"){
                const translatedText = await translateCard(articles, "hi")
                setTranslatedArticle(translatedText)
            }
            else{
                setTranslatedArticle(articles)
            }
        }
        if(articles.length > 0) translate()
    }, [lang, articles])

    return (
    <div className='min-h-screen bg-linear-to-r from-[#e9eccf] via-[#e2e6b8] to-[#c9d87a] flex flex-col items-center py-8'>
        {translatedArticle.slice((page - 1) * 8, page * 8).map((news, index) => (
            <div key={index} className='my-4 bg-[#e6e8c8] min-h-60 w-2/3 rounded-2xl flex flex-wrap shadow-[6px_6px_12px_#c4ce8a,-6px_-6px_12px_#ffffff]'>
                <img src={news.image} className='rounded-t-2xl w-full md:w-1/3 md:h-auto md:rounded-l-2xl md:rounded-r-none md:object-cover'
                    onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = "https://thumbs.dreamstime.com/b/news-woodn-dice-depicting-letters-bundle-small-newspapers-leaning-left-dice-34802664.jpg";
                    }}
                />
                <div className='justify-center w-full p-4 md:w-2/3 mx-auto md:ps-6 flex flex-col md:justify-center gap-4'>
                    <h4 className='text-xl font-bold'>{news.title}</h4>
                    <div  className='text-xs'>{date}</div>
                    <p className='text-justify pe-5 text-sm'>{news.description}</p>
                </div>
            </div>
        ))}
        
        <div className='flex gap-4 mt-8 mb-4'>
            <button className='bg-[#E7EFC8] rounded-full shadow-[6px_6px_12px_#C5D89A,-6px_-6px_12px_#ffffff] w-10 h-10' onClick={() => setPage(page - 1)}>&#60;</button>
            {Array.from({length: 4}, (_ , i) => {
                const pageNumber = page + i;

                if(pageNumber < 1) return null;

                return(
                    <button key={i} className='bg-[#E7EFC8] rounded-full shadow-[6px_6px_12px_#C5D89A,-6px_-6px_12px_#ffffff] w-10 h-10' onClick={() => setPage(pageNumber)}>{pageNumber}</button>
                )
            })}
            <button className='bg-[#E7EFC8] rounded-full shadow-[6px_6px_12px_#C5D89A,-6px_-6px_12px_#ffffff] w-10 h-10' onClick={() => setPage(page + 1)}>&#62;</button>
        </div>

    </div>
    
  )
}
export default Body
