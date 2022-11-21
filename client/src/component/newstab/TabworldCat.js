import React from 'react';
import { Link } from 'react-router-dom';


const TabworldCat = ({apidata}) => {
  if(apidata){
    var parsed = apidata.rss.channel.item
    console.log(apidata.rss.channel.item)
  }

  return (
    <div>
      
     <div className='letest-Story-grid'>       
    
    {
        parsed&&
        parsed.map((items,index)=>{
        console.log(items["media:content"]._attributes)
        return(
              <>
                 <a href= {items.link._cdata}>
                <div className='letest-Story'>
                   <div className='letest-Story1'>
                    <div className='letest-StImg'>
                       <img src={items["media:content"]._attributes.url} alt='slide'></img>
                    </div>
                    <div className='letest-StDes'>
                         <div className='letestSt-cat'>
                            <h3>China</h3>
                        </div> 
                        <div className='newsArtical-title'>
                             <h3>{items.title._cdata}</h3>
                        </div>                       
                        <div className='letest-St-date'>
                            <p>23 Min ago</p>
                          </div>               
                    </div>
                  </div>
                </div>
            </a>
            </>
        )
      })
    }
    </div>
    </div>
  )
}

export default TabworldCat;