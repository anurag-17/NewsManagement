import React, { useEffect, useState } from 'react';
import TabworldCat from './TabworldCat';
import axios from 'axios';
const convert = require("xml-js")



const Business = () => {

  const[data,setdata] = useState()
  const newApi = async()=>{

    const res =  await axios.get("https://corsanywhere.herokuapp.com/https://www.hindustantimes.com/feeds/rss/business/rssfeed.xml")
    const result1 = convert.xml2json(res.data,{compact: true, spaces: 4})
    setdata(JSON.parse(result1))
   }
    

   useEffect(()=>{
    newApi()
    },[])

  return (
    <div>
      <TabworldCat apidata={data}/>
      <div className='view-btn'>
                   <button className='view-btn'><a href='#'>Read MORE</a></button>
       </div>
    </div>
  )
}

export default Business;
