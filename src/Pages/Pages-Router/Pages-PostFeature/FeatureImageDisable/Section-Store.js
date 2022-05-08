import React from 'react';
import {NavLink} from "react-router-dom";
import {Container} from "@mui/material";

const SectionStore = () => {
    return (
        <Container>
            <div className='content-post-store border-store'>
                <div className='store '>
                    <NavLink  to={'/main/How surprised he’ll be when he finds out'}>
                        <img src='../img-news/IconsImg/icon-14.jpg'/>
                    </NavLink>
                    <NavLink  to={'/main/How surprised he’ll be when he finds out'}>
                        <span className='style-global-text-info-2'>Previous Story</span>How surprised he’ll be when he finds out</NavLink>
                    <span className='arrow-size'> ←</span>
                </div>
                <div className='store'>
                    <NavLink to='/main/How surprised he’ll be when he finds out'>
                        <img src='../img-news/IconsImg/icon-15.jpg'/>
                    </NavLink>
                    <NavLink to={'/main/How surprised he’ll be when he finds out'}>
                        <span  className='style-global-text-info-2' >Next Story</span>How surprised he’ll be when he finds out</NavLink>
                    <span className='arrow-size'> →</span>
                </div>
            </div>
        </Container>
    );
};

export default SectionStore;