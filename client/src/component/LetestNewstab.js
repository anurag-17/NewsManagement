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
   
  return (
    <div>
      <div className='Newstab-cat'>
            <Tabs
            id="controlled-tab-example"
            activeKey={key}
            onSelect={(k) => setKey(k)}
            className="mb-3"
            >
            <Tab eventKey="home" title="World">
                <World />
            </Tab>
            <Tab eventKey="Business" title="Business">
                <Business />
            </Tab>
            <Tab eventKey="Legal" title="Legal">
                <Legal />
            </Tab>
            <Tab eventKey="Breakingviews" title="Breakingviews">
                <Breakingviews />
            </Tab>
            <Tab eventKey="Technology" title="Technology">
                <Technology />
            </Tab>
            <Tab eventKey="Sports" title="Sports">
                <Sports />
            </Tab>
            </Tabs>
      </div>
    </div>
  )
}

export default LetestNewstab;
