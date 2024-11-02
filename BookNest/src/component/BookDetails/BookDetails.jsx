import React from 'react'
import { useLoaderData, useParams } from 'react-router-dom'
import BookDetailsCard from './BookDetailsCard'

export default function BookDetails() {
  const {bookId}=useParams()
  const id=parseInt(bookId)
  const data=useLoaderData()
  const findData=[...data].find(book=>book.bookId==id)
  return (
    <div>
      <BookDetailsCard book={findData}></BookDetailsCard>
    </div>
  )
}
