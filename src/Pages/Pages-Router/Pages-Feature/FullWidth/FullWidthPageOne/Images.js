import React, {Fragment} from 'react';
import {arrayImagesPartFour} from "../../../../../Data/Data";
import {Container} from "@mui/material";
import useLightBox from "../../../../../Components/Hooks/UselightBox";
import LightBox from "../../../../../Components/LightBox/LightBox";

const Images = () => {

    const{currentImg,clickImg,setClickImg,handleClick,handelLeft,handelRight}=useLightBox(arrayImagesPartFour)
    return (
        <Fragment>
          <Container>
              <div className='section-images'>
                  <div className='images flex-row flex-wrap'>
                      {arrayImagesPartFour.map((item,index)=>{
                          return(
                              <img className='cursor-zoom' onClick={()=>handleClick(item,index)} key={index} src={item}/>
                          )
                      })}
                  </div>
              </div>
          </Container>
            {clickImg&&
            <LightBox
            currentImg={currentImg}
            clickImg={clickImg}
            setClickImg={setClickImg}
            handelLeft={handelLeft}
            handelRight={handelRight}
            lengthData={arrayImagesPartFour.length}
            />
            }
        </Fragment>
    );
};

export default Images;