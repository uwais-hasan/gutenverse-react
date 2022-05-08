import React from 'react';

import '../../../../Components/Style/EmbedYoutube.css'
import {Container} from "@mui/material";
const EmbedYoutube = () => {
    return (
       <Container>
           <div className='content-embed-youtube'>
               <iframe className='controller-content '  src="https://www.youtube.com/embed/BRLmzQH-Hd4"
                       title="YouTube video player" frameBorder="0"
                       allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                       allowFullScreen></iframe>
           </div>
       </Container>
    );
};

export default EmbedYoutube;