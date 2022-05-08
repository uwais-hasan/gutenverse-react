

import React from 'react';

import '../../../../Components/Style/section-descriptionImages.css'
import {NavLink} from "react-router-dom";
import {Container} from "@mui/material";
const SectionDescriptionImages = () => {
    return (

           <Container>
               <div className=' section-description flex-row gab-10 justify-center '>
                   <NavLink to='/'><img src='../img-news/WS-heroImages/ws-heroImg-3.jpg'/></NavLink>
                   <NavLink to='/'> <img src='../img-news/WS-heroImages/ws-heroImg-4.jpg'/></NavLink>
                   <NavLink to='/'><img src='../img-news/WS-heroImages/ws-heroImg-5.jpg'/></NavLink>
                   <NavLink to='/'><img src='../img-news/WS-heroImages/ws-heroImg-6.jpg'/></NavLink>
               </div>
           </Container>

    );
};

export default SectionDescriptionImages;