import React, { useEffect, useState } from 'react';
import TabworldCat from './TabworldCat';
import axios from 'axios';
const convert = require("xml-js")



const Business = ({data}) => {


  return (
    <div>
      <TabworldCat apidata={data}/>
      <div className='view-btn'>
                   <button className='view-btn'><a href='#'>Read MORE <i class="fa fa-angle-double-right"></i></a></button>
       </div>
    </div>
  )
}

export default Business;
