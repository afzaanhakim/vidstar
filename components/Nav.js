import React from "react";
import requests from "../utils/requests";
import { useRouter } from "next/router";
import { useState } from "react";

const Nav = () => {
  const [state, setState] = useState()

  const router = useRouter()
  const onClick = (key) => {
    setState('')
    router.push(`/?genre=${key}`)
  }
  const itemLooper = (requests) => {

    const items = Object.entries(requests).map(([key, { title, url }]) => (
      <h2 key={key} onClick={()=>onClick(key)} className='last:pr cursor-pointer transition duration-100 transform hover:scale-125 hover:text-black active:text-white text-pink-900  hover:rounded-t-3xl t-3xl  hover:border-green-800 hover:p-0.9 hover:bg-green-400 l:p-3 m:p-2 sm:p-1'>{title}</h2>
    ));
    return items;
  };

  const list = itemLooper(requests);

  return <nav className="relative"> <div className="flex px-10 sm:px-20 space-x-10 text-2xl whitespace-nowrap sm:space-x-10 overflow-x-scroll scrollbar-hide">{list}</div> <div className="absolute top-0 right-0 bg-gradient-to-l from-rose-400 h-10"/></nav>;
};

export default Nav;
