import axios from 'axios'
import React, { useEffect, useState } from 'react'
const convert = require("xml-js")


export const Xmltojson = () => {

const[data,setdata] = useState([])

const newApi = async()=>{

 const res =  await axios.get("https://corsanywhere.herokuapp.com/https://www.hindustantimes.com/feeds/rss/business/rssfeed.xml")
 console.log(res.data)
 const result1 = convert.xml2json(res.data,{compact: true, spaces: 4})
 setdata(result1)

}

console.log(data)
    useEffect(()=>{
    newApi()
    },[])

  return (
   <>
  {
    
  }
   </>
  )
}
