import React from 'react'
import ReactLoading from 'react-loading';
import './Loader.css'


export const Loader = () => {
  return (
 <>
 <div>
     <ReactLoading className='loader' type={'bars'} color={"#003AAD"} height={200} width={100} />
 </div>

     {/* <ReactLoading type={'balls'} color={"#003AAD"} height={667} width={375} /> */}
     {/* <ReactLoading type={'bubbles'} color={"#003AAD"} height={667} width={375} />
     <ReactLoading type={'cubes'} color={"#003AAD"} height={667} width={375} />
     <ReactLoading type={'cylon'} color={"#003AAD"} height={667} width={375} />
     <ReactLoading type={'spin'} color={"#003AAD"} height={667} width={375} /> */}

 </>
  )
}
