import React, { useState } from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import { useNavigate } from "react-router-dom";



const SearchBar = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmedSearch = search.trim()
    if(trimmedSearch === '') {
      setSearch('')
      return
    } 

    navigate(`search/${trimmedSearch}`)
    setSearch('')
  }

  return (
    <form className='flex items-center' onSubmit={(e) => handleSubmit(e)}>
      <input onChange={(e) => setSearch(e.target.value)} className='relative w-[520px] h-9 rounded-sm p-2 ml-2' type='text' value={search} placeholder='Search for products, brands and more' />
      <AiOutlineSearch className='absolute ml-[500px] text-[#2874f0] text-2xl cursor-pointer' />
    </form>
  )
}

export default SearchBar