import React from 'react';
import { Link } from 'react-router-dom';


const TabworldCat = ({apidata}) => {

  if(apidata){
    // var parsed = apidata.rss.channel.item
    console.log(apidata)
    var data = apidata.slice(0,3)

  }

  return (
    <div>
      
     <div className='letest-Story-grid'>       
    {
        apidata&&
        data.map((items,index)=>{

        return(
              <>
                 <a href="">
                <div className='letest-Story'>
                   <div className='letest-Story1'>
                    <div className='letest-StImg'>
                       <img src={items.image} alt='slide'></img>
                    </div>
                    <div className='letest-StDes mt-2 mb-2'>
                      <span className='mb-2' style = {{color:'black',fontSize:"18px"}}>{items.category}</span> <span className='ml-4'><li style = {{display:"inline",color:'black',fontSize:"18px"}}> •  {items.read}</li></span>
                         {/* <div className='letestSt-cat'>
                            <h3>China</h3>
                        </div>  */}
                        <div className='newsArtical-title mt-3'>
                             <h3 style = {{fontSize:"26px"}}>{items.title}</h3>
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

  <div className="bottom-grid">
  {
        apidata&&
        apidata.map((items,index)=>{
        return(
              <>
                 {/* <a href=""> */}
                <div className='letest-Story'>
                   <div className='letest-Story1'>
                    <div className='letest-Img'>
                       <img src={items.image} alt='slide'></img>
                    </div>
                    <div className='letest-StDes mt-2 mb-2'>
                      <span className='mb-2' style = {{color:'black',fontSize:"18px"}}>{items.category}</span> <span className='ml-4'><li style = {{display:"inline",color:'black',fontSize:"18px"}}> •  {items.read}</li></span>
                         {/* <div className='letestSt-cat'>
                            <h3>China</h3>
                        </div>  */}
                        <div className='newsArtical-title mt-3'>
                             <h3 style = {{fontSize:"22px"}}>{items.title}</h3>
                        </div>                       
        
                    </div>
                  </div>
                </div>
            {/* </a> */}
            </>
        )
      })
    }
  </div>

    </div>
  )
}

export default TabworldCat;