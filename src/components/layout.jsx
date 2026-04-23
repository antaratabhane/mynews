import React from 'react'
import Header from './header.jsx'
import Footer from './footer.jsx'
import Body from './body.jsx'
import { useState, useEffect } from 'react'

const Layout = () => {
  const [category, setCategory] = useState("sports")
  return (
    <>
      <Header setCategory={setCategory}/>
      <Body category={category}/>
      <Footer />
    </>
  )
}

export default Layout