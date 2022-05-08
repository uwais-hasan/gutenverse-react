import React from 'react';
import {NavLink} from "react-router-dom";

const MoreDescriptionInfo = () => {
    return (
        <div className="SectionMoreDescription">

            <img className="width_100" src="../img-news/otherPage/Rl-hero-3.jpg"/>
            <div className="article">
                <p className="style-global-text-info ">
                    I sat down on the side of the bed, and commenced thinking about this
                    head-peddling harpooneer, and his door mat.<br/><br/>

                    Whether that mattress was stuffed with corn-cobs or broken crockery, there is no telling,
                    but I rolled about a good deal, and could not sleep for a long time. At last I slid off
                    into a light doze, and had pretty nearly made a good offing towards the land of Nod, when
                    I heard a heavy footfall in the passage, and saw a glimmer of light come into the room from under the door.<br/><br/>

                    Lord save me, thinks I, that must be the harpooneer, the infernal head-peddler.
                    But I lay perfectly still, and resolved not to say a word till spoken to.<NavLink className='hover-link text-decoration' to='/'> Holding a light</NavLink> in
                    one hand, and that identical New Zealand head in the other, the stranger entered the room.<br/><br/>
                </p>
            </div>
        </div>
    );
};

export default MoreDescriptionInfo;