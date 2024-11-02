import React from 'react'
import { useLoaderData, useParams } from 'react-router-dom'
import BookDetailsCard from './BookDetailsCard'

export default function BookDetails() {
  console.log('bookdetails called')
  const {bookId}=useParams()
  console.log(typeof bookId,bookId)
  const data=useLoaderData()
  console.log(data)
  const findData=[...data].find(book=>book.bookId==bookId)
  console.log(findData)
  return (
    <div>
      <h1>bookDetails</h1>
      <BookDetailsCard book={findData}></BookDetailsCard>
 
    </div>
  )
}
