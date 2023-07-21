import React from 'react'
import { Link } from 'react-router-dom'
export default function BookCard({book}) {
    console.log(book)
  return (
    <Link to={`show-book/${book._id}`} className=' border-2 rounded-md border-[#FFc107] flex flex-col justify-center items-center text-white p-2'>
      <img src={book.imgUrl} className='h-45 w-40' alt='thumbnail' />
      <div>
        <h2 className='font-bold'>{book.title}</h2>
        <h3 className=''>{book.author}</h3>
        <h4 className=''>{book.description}</h4>
      </div>
    </Link>
  )
}
