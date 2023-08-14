"use client"

import { useEffect, useState } from "react";

export default function FirstPost() {
  const [data , setData]=useState('test')
  useEffect( () => {

     async function fetchData() {
    // You can await here
    const response = await fetch("http://localhost:3000/api")
    console.log(response?.body)
    // ...
  }
  fetchData();
  },[])
    return <h1>First Post {data}</h1>;
  }