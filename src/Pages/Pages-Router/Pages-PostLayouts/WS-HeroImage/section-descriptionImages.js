

import React, {Fragment} from 'react';

import '../../../../Components/Style/section-descriptionImages.css'
import {Container} from "@mui/material";
import useLightBox from "../../../../Components/Hooks/UselightBox";
import {arrayImagesPartOne} from "../../../../Data/Data";
import LightBox from "../../../../Components/LightBox/LightBox";
const SectionDescriptionImages = () => {

    const {clickImg, currentImg, setClickImg, handleClick, handelLeft, handelRight}= useLightBox(arrayImagesPartOne)
    return (


              <Fragment>
                  <Container>
                      <div className=' section-description flex-row gab-10 justify-center '>
                  {arrayImagesPartOne.map((item,index)=>{
                      return(

                              <img className='cursor-zoom' key={index} onClick={()=>handleClick(item,index)} src={item}/>

                      )
                  })}
                      </div>
                  </Container>
                  {clickImg &&
                      <LightBox handelLeft={handelLeft}
                                lengthData={arrayImagesPartOne.length}
                                handelRight={handelRight}
                                clickImg={clickImg}
                                currentImg={currentImg}
                                setClickImg={setClickImg}
                      />
                  }
              </Fragment>


    );
};

export default SectionDescriptionImages;