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
  return (
    <>
    <div className="app-container">
      <Header setCategory={setCategory} setSearch={setSearch} setLang={setLang} />
      <main className="scroll-area">
      <Body category={category} search={search} page={page} setPage={setPage} lang={lang} />
      </main>
      <Footer />
      </div>
    </>
  )
}

export default Layout