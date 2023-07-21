import React, { useEffect, useState } from 'react'
import { apiUrl } from '../config'
import { Link } from 'react-router-dom'
import axios from 'axios'
import BookCard from './BookCard'
export default function ShowBookList() {
    const [books,setBooks]=useState([])
    const [loading,setLoading]=useState(true);
    useEffect(()=>{
        axios.get(`${apiUrl}/api/book`).then((res)=>setBooks(res.data)).then(setLoading(false))
    },[])
console.log(books)

  return (
    
    <div className='flex flex-col w-full p-5 justify-center'>
    <h1 className='text-center text-5xl text-white'>Book List</h1>  
    <Link to={'/create-book'}>
    <button className='p-3 px-4 border-2 rounded-md transition-all ease duration-300 hover:bg-[#FFC107] hover:text-black border-[#FFC107] text-[#FFC107]'>Add New Book</button>
    </Link>
   {/* Book list */}
   <div>{loading ? <h1>Loading...</h1> : 
      <div className='flex flex-wrap gap-10 p-4'>
        {books.map((book) => (
            <BookCard book = {book}/>
        ))}
      </div>
      }</div>
    </div>
  )
}
