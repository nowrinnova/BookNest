import React from 'react'

export default function BookDetailsCard({book}) {
  const {bookId, image, bookName, author, tags, rating, category,review,totalPages,publisher,yearOfPublishing } = book;
  console.log(book)
  return (
    <div className='container mx-auto'>
      <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row">
    <img
      src={image}
      className="max-w-md h-[500px] rounded-lg shadow-2xl" />
    <div className='md:px-5'>
      <h1 className="text-5xl font-bold">{bookName}</h1>
      <p className="py-6">author by: {author}</p>
      <p >{category}</p>
      <p className="py-6"><span className='font-bold'>Review: </span>
        {review}
      </p>
      {/* <button className="btn btn-primary">Get Started</button> */}
      <div className="flex gap-2">{tags.map(tag=><div className="badge badge-accent badge-outline">{tag}</div>)}</div>
      <div className='divider'></div>
      {/* <p>Number of Pages: <span  className='font-bold'>{totalPages}</span></p> */}
      <tr>
        <td className=''>Number of Pages</td>
        <td className='pl-12 py-2 font-bold'>{totalPages}</td>
      </tr>
      <tr>
        <td className=''>Publisher</td>
        <td className='pl-12 py-2 font-bold'>{publisher}</td>
      </tr>
      <tr>
        <td className=''>Year of Publishing</td>
        <td className='pl-12 py-2 font-bold'>{yearOfPublishing}</td>
      </tr>
      <tr>
        <td className=''>Rating</td>
        <td className='pl-12 py-2 font-bold'>{rating}★</td>
      </tr>
      <div className='flex justify-start items-center mt-5'>
        <button className='btn btn-outline btn-accent mr-5'>Read</button>
        <button className='btn btn-outline btn-accent'>WishList</button>
      </div>
    </div>
  </div>
</div>
    </div>
  )
}
