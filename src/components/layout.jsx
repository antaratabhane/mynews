import React from 'react'
import Header from './header.jsx'
import Footer from './footer.jsx'
import Body from './body.jsx'
import { useState, useEffect } from 'react'

const Layout = () => {
  const [category, setCategory] = useState("viral")
  const [search, setSearch] = useState()
  const [page, setPage] = useState(1)
  const [lang, setLang] = useState("en")
  const [burger, setBurger] = useState(false)
  return (
    <>
    <div className="app-container">
      <Header setCategory={setCategory} setSearch={setSearch} setLang={setLang} setBurger={setBurger} burger={burger} />
      <main className="scroll-area">
      <Body category={category} search={search} page={page} setPage={setPage} lang={lang} setBurger={setBurger} burger={burger} />
      </main>
      <Footer />
      </div>
    </>
  )
}

export default Layout