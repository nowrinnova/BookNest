import React from 'react'

export default function Banner() {
  return (
    <div className="hero bg-base-200 md:my-10 md:p-20 container mx-auto">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img
      src="books.jpg"
      className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold">Books to Freshen up your BookShelf</h1>
      {/* <h1 className="text-5xl font-bold">Books for Freshen up</h1> */}
      <p className="py-6 px-2">
      Books are portals to endless worlds and ideas, allowing readers to explore different perspectives, eras, and cultures from the comfort of their own space. 
      </p>
      <button className="btn btn-primary">View the List</button>
    </div>
  </div>
</div>
  )
}
