import React from 'react';


import '../../../../Components/Style/Section-Store.css'

import {NavLink} from "react-router-dom";
import {Container} from "@mui/material";
const SectionStore = () => {
    return (
     <Container>
         <div className='content-post-store border-store'>
             <div className='store '>
                 <NavLink  to={'/main/Audio Post: A sigh of satisfaction'}>
                     <img src='../img-news/WS-heroImages/ws-heroImg-7.jpg'/>
                 </NavLink>
                 <NavLink  to={'/main/Audio Post: A sigh of satisfaction'}>
                     <span className='style-global-text-info-2'>Previous Story</span>Audio Post: A sigh of satisfaction</NavLink>
                 <span className='arrow-size'> ←</span>
             </div>
             <div className='store'>
                 <NavLink to='/'>
                     <img src='../img-news/WS-heroImages/ws-heroImg-8.jpg'/>
                 </NavLink>
                 <NavLink to={'/main/I realized that the crest must be within the range of…'}>
                     <span  className='style-global-text-info-2' >Next Story</span>I realized that the crest must be<br/> within the range of…</NavLink>
                 <span className='arrow-size'> →</span>
             </div>
         </div>
     </Container>
    );
};

export default SectionStore;