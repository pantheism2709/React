import React from 'react'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <>
    {/* // here header and footer will be same Outlet things will be changed  */}
        <Header/>

        <Outlet/>

        <Footer/>

    </>
  )
}

export default Layout