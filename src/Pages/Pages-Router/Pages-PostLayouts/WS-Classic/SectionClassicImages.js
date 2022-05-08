import React, {Fragment} from 'react';
import '../../../../Components/Style/Section-CoverImages.css'
import {arrayImagesPartFive} from "../../../../Data/Data";
import useLightBox from "../../../../Components/Hooks/UselightBox";
import LightBox from "../../../../Components/LightBox/LightBox";
import {Container} from "@mui/material";
const SectionClassicImages = () => {

    const {clickImg, currentImg, setClickImg, handleClick, handelLeft, handelRight}= useLightBox(arrayImagesPartFive)

    return (
     <Fragment>
        <Container>
            <div className='section-coverImages '>
                <div className='section-classic-img'>
                    <div className='section-coverImagesClassic'>
                        <div className='row gab-23'>
                            {arrayImagesPartFive.map((item,index)=>{
                                return(
                                    <img key={index} className='cursor-zoom' onClick={()=>handleClick(item,index)} src={item}/>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </Container>
         {clickImg &&
             <LightBox handelLeft={handelLeft}
                       lengthData={arrayImagesPartFive.length}
                       handelRight={handelRight}
                       clickImg={clickImg}
                       currentImg={currentImg}
                       setClickImg={setClickImg}
             />
         }
     </Fragment>
    );
};

export default SectionClassicImages;