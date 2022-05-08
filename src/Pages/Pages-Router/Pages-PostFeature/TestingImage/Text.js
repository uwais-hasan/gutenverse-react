import React from 'react';
import {Container} from "@mui/material";
import {NavLink} from "react-router-dom";
import '../../../../Components/Style/Text.css'
const Text = () => {
    return (
       <Container>
           <div className='content-post-leatherhead section-text'>
           <div className='paragraph'>
               <p className='style-global-text-info padding-bottom-10'>
                   Another bank drove over Ealing, and surrounded a little island of survivors on
                   Castle Hill, alive, but unable to escape. So he got out of the fury of the panic,
                   and, skirting<NavLink className='hover-link text-decoration' to='/'> the Edgware Road</NavLink>,
                   reached Edgware about seven, fasting and wearied, but well ahead of the crowd.
               </p>
           </div>
               <div className='row-section padding-bottom-10'>
                   <img className='newsItemImage' src='../img-news/Pagination-img/pagination-3.jpg'/>
                   <p className='style-global-text-info newsItemText'>
                       And as the day advanced and the engine drivers and stokers refused to return to London,
                       the pressure of the flight drove the people in an ever-thickening multitude away from
                       the stations and along the northward-running roads. By midday a Martian had been seen at Barnes,
                       and a cloud of slowly sinking black vapour drove along the Thames and across the flats of
                       Lambeth, cutting off all escape over the bridges in its sluggish advance.<br/><br/>

                       It was perhaps a vague idea of making his way to Chelmsford, where some friends of
                       his lived, that at last induced my brother to strike into a quiet lane running eastward.
                       Presently he came upon a stile, and, crossing it, followed a footpath northeastward. He passed near several
                       farmhouses and some little places whose names he did not learn.
                   </p>
               </div>
               <div className=" border-paragraph">
                   <p className="  style-global-text-info">
                       A mile from Edgware the rim of the wheel broke, and the
                       machine became unridable.
                   </p>
               </div>
               <p className='style-global-text-info padding-top-20'>
                   He heard their screams, and, hurrying round the corner, saw a couple of men struggling to drag
                   them out of the little pony-chaise in which they had been driving, while a third with difficulty
                   held the frightened pony’s head. One of the ladies, a short woman dressed in white, was simply
                   screaming; the other, a dark, slender figure,
                   slashed at the man who gripped her arm with a whip she held in her disengaged hand.
               </p>
               <h2 className='style-global-title'>Large (Full) Image</h2>
           </div>
       </Container>
    );
};

export default Text;