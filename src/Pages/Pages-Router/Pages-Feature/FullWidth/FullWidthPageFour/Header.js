

import React from 'react';
import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <div className='content-post-leatherhead SectionPostInformationClassic  header'>
            <p className="para-link">
                <h2 className='style-global-title font-size-50 padding-50-0 text-center'>Full Width</h2>
                <NavLink className="style-global-smallSize" to="/"> HOME
                    <span className="margin-rightLeft">→</span>
                </NavLink>
                <NavLink className="style-global-smallSize" to="/main/Template">TEMPLATES
                    <span className="margin-rightLeft">→</span>
                </NavLink>
                <span className="style-global-smallSize">fullWidth</span>
            </p>
            <p className='style-global-text-info'>
                ‘It was much pleasanter at home,’ thought poor Alice, ‘when one wasn’t always growing larger and smaller,
                and being ordered about by mice and rabbits. I almost wish I hadn’t gone down that rabbit-hole—and
                yet—and yet—it’s rather curious, you know, this sort of life! I do wonder what CAN have happened
                to me! When I used to read fairy-tales, I fancied that kind of thing never happened, and now here
                I am in the middle of one! There ought to be a book written about me, that there ought! And when
                I grow up, I’ll write one—but I’m grown up now,’ she added in a sorrowful tone; ‘at least there’s
                no room to grow up any more HERE.’<br/><br/>

                ‘But then,’ thought Alice, ‘shall I NEVER get any older than I am now? That’ll be a comfort,
                one way—never to be an old woman—but then—always to have lessons to learn! Oh, I shouldn’t like THAT!’
            </p>
        </div>
    );
};

export default Header;