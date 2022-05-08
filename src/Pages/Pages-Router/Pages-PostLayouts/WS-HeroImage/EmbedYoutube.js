import React from 'react';

import '../../../../Components/Style/EmbedYoutube.css'
import {Container} from "@mui/material";
const EmbedYoutube = () => {
    return (
<Container>
    <div  className='content-embed-youtube'>
        <iframe className='controller-content ' frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"
                type="text/html"
                src="https://www.youtube.com/embed/bu6EBd3rPmI?autoplay=0&fs=0&iv_load_policy=3&showinfo=0&rel=0&cc_load_policy=0&start=0&end=0&vq=small&origin=https://youtubeembedcode.com"></iframe>
    </div>
</Container>
    );
};

export default EmbedYoutube;