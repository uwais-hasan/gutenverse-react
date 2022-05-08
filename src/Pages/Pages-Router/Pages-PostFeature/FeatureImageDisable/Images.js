import React, {Fragment} from 'react';
// import arrayImagesPartThree from '../../../Data/Data'
import '../../../../Components/Style/Images.css'
import {Container} from "@mui/material";
import useLightBox from "../../../../Components/Hooks/UselightBox";
import {arrayImagesPartThree} from "../../../../Data/Data";
import LightBox from "../../../../Components/LightBox/LightBox";
const Images = () => {

    const{handelRight,handelLeft,handleClick,clickImg,currentImg,setClickImg,}=useLightBox(arrayImagesPartThree)
    return (

          <Fragment>
              <Container>
              <div className='section-images'>

                      {arrayImagesPartThree.map((item,index)=>{
                          return(
                              <img onClick={()=>handleClick(item,index)} src={item}/>
                          )
                      })}

              </div>
              </Container>
              {clickImg&&
                  <LightBox
                      handelRight={handelRight}
                      handelLeft={handelLeft}
                      clickImg={clickImg}
                      setClickImg={setClickImg}
                      currentImg={currentImg}
                  />

          }
          </Fragment>
    );
};

export default Images