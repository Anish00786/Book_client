import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { apiUrl } from '../config'
import   dayjs from 'dayjs'
export default function UpdateBook() {
  const {id}=useParams()
  const navigate=useNavigate();
const [book,setBook]=useState({
  title: "",
  description: "",
  author: "",
  isbn: "",
  publised_Date: "",
  publisher: "",
  imgUrl: "",
  whereToBuy: "",
})
  useEffect(()=>{
    axios.get(`${apiUrl}/api/book/${id}`)
    .then(res=>setBook({
      title: res.data.title,
      isbn: res.data.isbn,
      author: res.data.author,
      description: res.data.description,
      publised_Date: dayjs(res.publised_Date).format('YYYY/MM/DD'),
      publisher: res.data.publisher,
      imgUrl: res.data.imgUrl,
      whereToBuy:res.data.whereToBuy,
    }))
  },[id])

  const onChange = (e) => {
    setBook({ ...book, [e.target.name]: e.target.value });
  };


const onSubmit=(e)=>{
  e.preventDefault();
  // const data={
  //   title: book.title,
  //   isbn: book.isbn,
  //   author: book.author,
  //   description: book.description,
  //   publised_Date: book.publised_Date,
  //   publisher: book.publisher,
  //   imgUrl: book.imgUrl,
  //   whereTobook:book.whereToBuy,
  // }
  axios.put(`${apiUrl}/api/book/${id}`,book).then(res=>{navigate('/')}).catch(err=>console.log(err));
}


  return (
    <div>
      <h1 className='text-center '>Edit Book</h1>
      <form onSubmit={onSubmit} className="flex flex-col w-[600px] gap-7 p-2">
        <div className="flex gap-3 w-full justify-between">
          <input
            name="title"
            onChange={onChange}
            className="p-2 rounded-md outline-none border-2 border-transparentt focus:border-[#FFC107] w-full"
            required
            type="text"
            placeholder="Title of the book"
            value={book.title}
          />

          <input
            name="isbn"
            onChange={onChange}
            className="p-2 rounded-md outline-none border-2 border-transparent focus:border-[#FFC107] w-full"
            required
            type="number"
            placeholder="ISBN"
            value={book.isbn}
          />
        </div>
        <input
          name="author"
          onChange={onChange}
          className="p-2 rounded-md outline-none border-2 border-transparent focus:border-[#FFC107]"
          required
          type="text"
          placeholder="Author"
          value={book.author}
        />

        <input
          name="description"
          onChange={onChange}
          className="p-2 rounded-md outline-none border-2 border-transparent focus:border-[#FFC107]"
          required
          type="text"
          placeholder="Describe your book"
          value={book.description}
        />

        <input
          name="publised_Date"
          onChange={onChange}
          className="p-2 rounded-md outline-none border-2 focus:border-[#FFC107]"
          required
          type="date"
        />

        <input
          name="publisher"
          onChange={onChange}
          className="p-2 rounded-md outline-none border-2 border-transparent focus:border-[#FFC107]"
          required
          type="text"
          placeholder="Publisher"
          value={book.publisher}
        />

        <input
          name="imgUrl"
          onChange={onChange}
          className="p-2 rounded-md outline-none border-2 border-transparent focus:border-[#FFC107]"
          required
          type="text"
          placeholder="Image Url"
          value={book.imgUrl}
        />

        <input
          name="whereToBuy"
          onChange={onChange}
          className="p-2 rounded-md outline-none border-2 border-transparent focus:border-[#FFC107]"
          required
          type="text"
          placeholder="Where you can buy"
          value={book.whereToBuy}
        />

        <button className="p-2 px-3 border-2 rounded-md transition-all ease duration-300 hover:bg-[#FFC107] hover:text-black border-[#FFC107] text-[#FFC107]">
          Submit
        </button>
      </form>
      
    </div>
  )
}
