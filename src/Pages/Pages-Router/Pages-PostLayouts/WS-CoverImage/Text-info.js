import React from 'react';
import '../../../../Components/Style/Text-info.css'
import {NavLink} from "react-router-dom";
import {Container} from "@mui/material";
const TextInfo = () => {
    return (
    <Container>
        <div className='content-text-info'>
            <p className='style-global-text-info'>
                I and my wife stood amazed. Then I realised that the crest of Maybury Hill
                must be within range of the Martians’ Heat-Ray now that the college was cleared
                out of the way. At that I gripped my wife’s arm, and without ceremony ran her
                out into the road. Then I fetched out the servant,
                telling her I would go upstairs myself for the box she was <NavLink className='hover-link text-decoration' to='/'>clamouring</NavLink> for .
                <br/><br/>
                I started off at once for the Spotted Dog, for I knew the landlord had a horse and dog cart.
                I ran, for I perceived that in a moment everyone upon this side of the hill would be moving.
                I found him in his bar, quite unaware of
                what was going on behind his house. A man stood with his back to me, talking to him.
            </p>
        </div>
    </Container>
    );
};

export default TextInfo;