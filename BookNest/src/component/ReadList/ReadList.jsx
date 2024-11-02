import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'
import { getStoreData } from '../Utility/AddToDB'
import Card from '../Card/Card'

export default function ReadList() {
  const data= useLoaderData()
  console.log(`data`,data)
  const [readBook ,setReadBook]=useState([])
  useEffect(()=>{
    const readList=getStoreData()
    const filterData=[...data].filter(book=>readList.includes(book.bookId))
    setReadBook(filterData)
  },[])
  
  return (
    <>
   <div className='grid grid-cols-1 '> {readBook.map(book=><Card book={book}></Card>)}</div>
    </>
  )
}
