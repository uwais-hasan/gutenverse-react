import React, {Fragment} from 'react';
import '../../../../Components/Style/SectionDetailsImgCoverRs.css'
import useLightBox from "../../../../Components/Hooks/UselightBox";
import {arrayImagesPartSeven} from '../../../../Data/Data'
import {Container} from "@mui/material";
import LightBox from "../../../../Components/LightBox/LightBox";
const SectionDetailsImgCoverRs = () => {
        const {clickImg, currentImg, setClickImg, handleClick, handelLeft, handelRight}= useLightBox(arrayImagesPartSeven)

    return (
       <Fragment>
           <Container>
               <div className='SectionDetailsImgCoverRs flex-row  flex-wrap gab-20 '>
                   {arrayImagesPartSeven.map((item,index)=>{
                       return(
                           <img onClick={()=>handleClick(item,index)} key={index} className='cursor-zoom' src={item}/>
                       )
                   })}
               </div>
           </Container>

           {clickImg &&
               <LightBox handelLeft={handelLeft}
                         lengthData={arrayImagesPartSeven.length}
                         handelRight={handelRight}
                         clickImg={clickImg}
                         currentImg={currentImg}
                         setClickImg={setClickImg}
               />
           }
       </Fragment>
    );
};

export default SectionDetailsImgCoverRs;