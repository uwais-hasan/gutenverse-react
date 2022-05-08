import React, {Fragment, useEffect, useState} from 'react';
import './GoTop.css'
const GoTop = () => {
    const[checker,setChecker]=useState(false)
    const funGoToP=()=>{
        // window.onscroll=()=>{
        //
        // }
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // for smoothly scrolling
        });
    }
    useEffect(()=>{
      window.onscroll=()=>{

          if (window.scrollY>10){
              setChecker(true)
          }else {
              setChecker(false)
          }
      }
    },[])

    return (
        <div className='go-top'>
            {checker&& <span onClick={funGoToP} className='up'>↑</span>}
        </div>
    );
};

export default GoTop;