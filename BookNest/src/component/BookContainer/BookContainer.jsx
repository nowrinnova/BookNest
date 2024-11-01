import React, { useEffect, useState } from 'react'
import BookCard from './BookCard'

export default function BookContainer() {
  const [books,setBook]=useState([])
  useEffect(()=>{
    fetch('booksData.json')
    .then(res=>res.json())
    .then(data=>setBook(data))
  },[])
  return (
    <div className='container mx-auto grid grid-cols-1 md:grid-cols-3 md:gap-4'>
      {/* <h1>{books.length}</h1> */}
      {books.map((book)=><BookCard key={book.bookId} book={book}></BookCard>)}
    </div>
  )
}
