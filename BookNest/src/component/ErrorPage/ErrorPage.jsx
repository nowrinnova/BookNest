import React from 'react'
import { useRouteError } from 'react-router-dom';
import { RiEmotionSadLine } from "react-icons/ri";
import { Link } from 'react-router-dom';

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);
  return (
      <div id="error-page" className='flex flex-col justify-center items-center p-20'>
      <h1 className='text-4xl font-bold p-10'>Oops!</h1>
      <p className='text-2xl flex justify-center items-center'>Sorry, an unexpected error has occurred.<span className=' text-4xl font-bold p-2'><RiEmotionSadLine /></span></p>
      <button className='btn btn-outline btn-accent mt-5 '><Link to={'/'}>Go Back</Link></button>
      {/* <p>
        <i>{error.statusText || error.message}</i>
      </p> */}
    </div>
  )
}
