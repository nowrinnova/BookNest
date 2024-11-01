import React from 'react'

export default function BookCard({book}) {
  console.log(book)
  const {image,bookName,author}=book
  return (
  
     <div className="card bg-base-100 w-80 shadow-xl mx-auto border-2 border-gray-400">
  <figure>
    <img className='h-[200px] w-72 object-fill p-4'
      src={image}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">Shoes!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
    
  )
}
