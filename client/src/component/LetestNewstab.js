import React, { useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import World from './newstab/World';
import Sports from './newstab/Sports';
import Technology from './newstab/Technology';
import Business from './newstab/Business';
import Legal from './newstab/Legal';
import Breakingviews from './newstab/Breakingviews';


const LetestNewstab = () => {
    const [key, setKey] = useState('home');

    const[data,setdata] = useState()
    // const newApi = async()=>{
  
  
    //   var myHeaders = new Headers();
    //   myHeaders.append("Content-Type", "application/json");
    //       var requestOptions = {
    //         method: "get",
    //         headers: myHeaders,
    //         redirect: "follow",
    //     };
    //       fetch("https://v1.nocodeapi.com/reshu123/xml_to_json/oWCHkdvXGxhsYoto?url=https://www.livemint.com/rssfeeds/news", requestOptions)
    //       .then(response => response.text())
    //       .then(result => setdata(JSON.parse(result)))
    //       .catch(error => console.log('error', error));
    //  }
  return (
    <div>
      <div className='Newstab-cat'>
            <Tabs
            id="controlled-tab-example"
            activeKey={key}
            onSelect={(k) => setKey(k)}
            className="mb-3"
            >
            <Tab eventKey="home" title="All">
                <World  apidata={data}/>
            </Tab>
            <Tab eventKey="Business" title="Mutual Fund">
                <Business  apidata={data}/>
            </Tab>
            <Tab eventKey="Legal" title="Beginner lesson">
                <Legal  apidata={data}/>
            </Tab>
            <Tab eventKey="Breakingviews" title="Finance">
                <Breakingviews  apidata = {data}/>
            </Tab>
            <Tab eventKey="Technology" title="Interesting Facts">
                <Technology  apidata={data}/>
            </Tab>
            {/* <Tab eventKey="Sports" title="Sports">
                <Sports  apidata={data}/>
            </Tab> */}
            </Tabs>
            <div className="view-btn">
        <button className="view-btn">
          <a target="blank" href="https://www.youtube.com/@BullSmartStockAcademy/videos">
            Read MORE <i class="fa fa-angle-double-right"></i>
          </a>
        </button>
      </div>
      </div>
    </div>
  )
}

export default LetestNewstab;
