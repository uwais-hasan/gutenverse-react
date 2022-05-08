import React from 'react';

import '../../../../Components/Style/MannerOfThing.css'
import {Container} from "@mui/material";
import useLightBox from "../../../../Components/Hooks/UselightBox";
import {arrayImagesPartOne, arrayImagesPartSix} from "../../../../Data/Data";
import LightBox from "../../../../Components/LightBox/LightBox";
const MannerOfThing = () => {


    const {clickImg, currentImg, setClickImg, handleClick, handelLeft, handelRight}= useLightBox(arrayImagesPartSix)

    return (
        <div className='section-manner-thing'>
            <Container>
         <div className='content-image flex-row justify-center gab-30'>
             {arrayImagesPartSix.map((item,index)=>{
                 return(
                     <img key={item} className='cursor-zoom' onClick={()=>handleClick(item,index)} src={item}/>
                 )
             })}
         </div>
            </Container>
            {clickImg &&
                <LightBox handelLeft={handelLeft}
                          lengthData={arrayImagesPartSix.length}
                          handelRight={handelRight}
                          clickImg={clickImg}
                          currentImg={currentImg}
                          setClickImg={setClickImg}
                />
            }
         <div className='content-articles max-width-articles'>
             <h2 className='style-global-title p-m-bottom'>Manner of thing</h2>
             <p className='style-global-text-info'>
               <ul>
                   <li>What manner of thing was upon me I did not know, but that it was large and heavy and many-
                       legged I could feel.
                   </li>
                   <li>My hands were at its throat before the fangs had a chance to bury themselves in
                       my neck, and slowly</li>
                   <li>
                       I forced the hairy face from me and closed my fingers, vise-like, upon its windpipe
                   </li>
               </ul>

             </p>
             <p className='style-global-text-info'>
                 Without sound we lay there, the beast exerting every effort to reach me with those awful fangs,
                 and I straining to maintain my grip and choke the life from it as I
                 kept it from my throat. Slowly my arms gave to the unequal struggle,
                 and inch by inch the burning eyes and gleaming tusks of my antagonist
                 crept toward me, until, as the hairy face touched mine again.
             </p>
         </div>

        </div>
    );
};

export default MannerOfThing;