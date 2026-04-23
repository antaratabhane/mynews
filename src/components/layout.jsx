import React from 'react'
import Header from './header.jsx'
import Footer from './footer.jsx'
import Body from './body.jsx'
import { useState, useEffect } from 'react'

const Layout = () => {
  const [category, setCategory] = useState("viral")
  const [search, setSearch] = useState()
  const [page, setPage] = useState(1)
  return (
    <>
      <Header setCategory={setCategory} setSearch={setSearch} />
      <Body category={category} search={search} page={page} setPage={setPage}/>
      <Footer />
    </>
  )
}

export default Layout