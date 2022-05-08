import React from 'react';

import '../../../../Components/Style/Section-More-description.css'
import {NavLink} from "react-router-dom";

const SectionMoreDescription = () => {
    return (
        <div className='SectionMoreDescription'>
            <div className='article'>
                <p className='style-global-text-info '>
                    Through two long weeks I wandered, stumbling through the nights guided only by the stars and
                    hiding during the days behind some protruding rock or among the occasional hills I traversed.
                    <br/><br/>
                    Without sound we lay there, the beast exerting every effort to reach me with those awful fangs,
                    and I straining to maintain my grip and choke the life from it as I kept it from my throat.
                    Slowly my arms gave to the unequal struggle, and inch by inch the burning eyes and gleaming
                    tusks of my antagonist crept toward me, until, as the hairy face touched mine again.
                </p>
            </div>
            <img className='width_100' src='../img-news/WS-Classic/ws-classic-2.jpg'/>

            <div className='article'>
                <p className='style-global-text-info padding-bottom'>
                    <NavLink className='hover-link text-decoration' to='/'>For two days I waited there for Kantos Kan</NavLink>, but as
                    he did not come I started off on foot in
                    a northwesterly direction toward a point where he had told me lay the nearest waterway.
                    My only food consisted of vegetable milk from the
                    plants which gave so bounteously of this priceless fluid.
                </p>
            </div>
        </div>
    );
};

export default SectionMoreDescription;