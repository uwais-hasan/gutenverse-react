
import React from 'react';

import '../../../../Components/Style/Section-CoverImages.css'
import {Container} from "@mui/material";
const SectionCoverImages = () => {
    return (
    <Container>
        <div className='section-coverImages '>


            <div className='row'>
                <img src='../img-news/WS-coverImages/ws-coverImg-2.jpg'/>
                <img src='../img-news/WS-coverImages/ws-coverImg-3.jpg'/>
                <img src='../img-news/WS-coverImages/ws-coverImg-4.jpg'/>
                <img src='../img-news/WS-coverImages/ws-coverImg-5.jpg'/>
            </div>
        </div>
    </Container>
    );
};

export default SectionCoverImages;