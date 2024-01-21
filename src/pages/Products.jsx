import React from 'react'
import Navbar from '../components/Navbar.jsx'
import ProductsList from '../components/ProductsList.jsx'
import SearchBar from '../components/SearchBar.jsx'


const Products = () => {
  return (
    <>
      <Navbar />
      {/* <SearchBar /> */}
      <ProductsList />
    </>
  )
}

export default Products