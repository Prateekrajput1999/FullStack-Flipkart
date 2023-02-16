import React from 'react'
import Categories from '../Products/Categories'
import Banner from './Banner'
import Suggestions from './Suggestions'
import { Suggestion_data } from '../db'


const HomePage = () => {
  return (
    <div>
        <Categories />
        <Banner />
        {
          Suggestion_data.map(prodArr => <Suggestions prodArr={prodArr} />)
        }
    </div>
  )
}

export default HomePage