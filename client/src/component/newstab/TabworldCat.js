import React from 'react';
import { Link } from 'react-router-dom';


const TabworldCat = ({apidata}) => {
  if(apidata){
    // var parsed = apidata.rss.channel.item
    console.log(apidata.rss.channel.item)
  }

  return (
    <div>
      
     <div className='letest-Story-grid'>       
    
    {
        apidata&&
        apidata.rss.channel.item.map((items,index)=>{
        return(
              <>
                 <a href= {items.link}>
                <div className='letest-Story'>
                   <div className='letest-Story1'>
                    <div className='letest-StImg'>
                       <img src={items["media:content"].$.url} alt='slide'></img>
                    </div>
                    <div className='letest-StDes'>
                         <div className='letestSt-cat'>
                            <h3>China</h3>
                        </div> 
                        <div className='newsArtical-title'>
                             <h3>{items.title}</h3>
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