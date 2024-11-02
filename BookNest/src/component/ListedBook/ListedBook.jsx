import React, { useEffect, useState } from "react";
import { NavLink, Outlet, useLoaderData } from "react-router-dom";
import './ListedBook.css'
import { getStoreData } from "../Utility/AddToDB";
import ReadList from "../ReadList/ReadList";

export default function ListedBook() {
  const data=useLoaderData();
  console.log(`loaderData`,data)
  const [readBook,setReadBook]=useState([])
  useEffect(()=>{
    const readData= getStoreData()
    console.log(readData)
    const filterData=[...data].filter(data=>readData.includes(data.bookId))
    console.log(`filter data`,filterData)
    setReadBook(filterData) 
  },[])
  return (
    <div className="">
      <h1 className="text-center font-bold text-xl py-16">listedBook</h1>
      <div role="tablist" className="tabs tabs-lifted">
        <NavLink to={'/readList'} role="tab" className="tab ">
          Read Book <span className="text-xl font-bold p-3"> {readBook.length}</span>
        </NavLink>
        <NavLink to={'/wishList'} role="tab" className="tab ">
          WishList
        </NavLink>
       
        
        {/* <Outlet></Outlet> */}
      </div>
      <div className="grid grid-cols-1 mx-auto">
        {
          readBook.map(data=><ReadList key={data.bookId} data={data}></ReadList>)
        }
        </div>
    </div>
  );
}