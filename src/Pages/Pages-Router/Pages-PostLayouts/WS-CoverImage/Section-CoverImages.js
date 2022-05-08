
import React, {Fragment, useRef, useState} from 'react';

import '../../../../Components/Style/Section-CoverImages.css'
import LightBox from "../../../../Components/LightBox/LightBox";
import {arrayImagesPartTwo} from "../../../../Data/Data";
import {Container} from "@mui/material";
const SectionCoverImages = () => {
    const[clickImg,setClickImg]=useState('');
    const[currentImg,setCurrentImg]=useState(0)
    const[fade,setFade]=useState('');


    const handleClick=(item,index)=>{
        setClickImg(item)
        setCurrentImg(index)
    }
    const handelRight=()=>{
        if (currentImg + 1 >= arrayImagesPartTwo.length) {
            const firstImg = arrayImagesPartTwo[0];
            setCurrentImg(0)
            setClickImg(firstImg)

        } else {
            setFade('')
            const newCurrent = currentImg + 1;
            setCurrentImg(newCurrent)
             setClickImg(arrayImagesPartTwo[newCurrent])

        }
        setFade('asd')
    }
    const handelLeft=()=>{
        if (currentImg===0){
            return false
        }else {
            const newCurrent=currentImg-1
            setCurrentImg(newCurrent)
            setClickImg(arrayImagesPartTwo[newCurrent])
            setFade('fade')
        }
    }


    return (
        <div style={{position:'relative'}} className='section-coverImages '>
          <Container>
              <div className='row'>
                  {arrayImagesPartTwo.map((item,index)=>{
                      return(
                          <Fragment>
                              <img className='cursor-zoom' key={index}  onClick={()=>handleClick(item,index)} src={item}/>
                          </Fragment>
                      )
                  })}
              </div>
          </Container>
            {clickImg&&
            <LightBox handelLeft={handelLeft}
                      lengthData={arrayImagesPartTwo.length}
                      handelRight={handelRight}
                      clickImg={clickImg}
                      currentImg={currentImg}
                      setClickImg={setClickImg}
            fade={fade}
            />
            }
        </div>
    );
};

export default SectionCoverImages;