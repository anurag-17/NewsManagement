import React, { useEffect, useState } from 'react';
import TabworldCat from './TabworldCat';
import axios from 'axios';
const convert = require("xml-js")



const Breakingviews = ({data}) => {


  return (
    <div>
      <TabworldCat apidata={data}/>
      
    </div>
  )
}

export default Breakingviews;
