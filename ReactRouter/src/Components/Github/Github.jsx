import React, { useEffect } from 'react'

import { useState } from 'react'

import { useLoaderData } from 'react-router-dom'

const Github = () => {

    // const [data,setData]=useState([])

    // useEffect(() =>{
    //     fetch("https://api.github.com/users/sachin2709")
    //     .then(response=>response.json())
    //     .then(data=>{setData(data)})
    // }, [])

    

    // useLoaderData is the mordern way of fetching data while loading the component.. 

    const data=useLoaderData()
    

  return (
    <div className=' bg-gray-600 text-center m-4  text-white p-4  text-3xl'>Github Followers:  {data.followers}
    
    <img src={data.avatar_url} alt="github Picture" width={300} />
    
    </div>

    

    
  )
}

export default Github

export const githubInfoLoader=async()=>{
   const response= await fetch("https://api.github.com/users/sachin2709")
   return response.json();
}