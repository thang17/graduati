import React from 'react'
import Banner from '../../../components/Header/Banner'
import Menu from '../../../components/Menu/Menu'
import Banner1 from '../../../components/Banner1/Banner1'
import Product from '../../../components/Product/Product'
import BestFood from '../../../components/BestFood/BestFood'
import Footer from '../../../components/Footer/Footer'
import Company from '../../../components/Company/Company'

const Home = () => {
  return (
    <>
    <Banner />
      <Menu />
      <Banner1 />
      <Product />
      <BestFood />
      <Company />
      <Footer />
    </>
  )
}

export default Home