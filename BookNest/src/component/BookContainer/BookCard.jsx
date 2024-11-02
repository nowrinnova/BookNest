import React from "react";
import { Link } from 'react-router-dom';
export default function BookCard({ book }) {
  const {bookId, image, bookName, author, tags, rating, category } = book;
  return (
    <Link to={`/bookDetails/${bookId}`}>
    <div className="card bg-base-100 w-80 shadow-xl mx-auto border-2 border-gray-400">
      <figure>
        <img
          className="h-[200px] w-72 object-fill p-4"
          src={image}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <div className="flex gap-2">{tags.map(tag=> <div  className="badge badge-accent badge-outline">{tag}</div>)}</div>
        <h2 className="card-title">{bookName}</h2>
        <p>by: {author}</p>
        <div className="divider"></div>
        <div className="card-actions justify-end">
          <p>{category}</p>
          <p className="text-end text-sm">{rating}<span className="text-xl p-2">★</span></p>
        </div>
      </div>
    </div></Link>
    
  );
}
