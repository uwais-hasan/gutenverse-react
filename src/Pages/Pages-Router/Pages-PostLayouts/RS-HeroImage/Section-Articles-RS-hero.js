import React from 'react';
import {NavLink} from "react-router-dom";

const SectionArticlesRSHero = () => {
    return (
        <div className='SectionArticlesRsHero padding-bottom-10 '>
            <p className='style-global-text-info margin-top-none'>
                “What can I do for you?” she inquired softly, for she was moved by the sad voice in which the
                man spoke.<br/><br/>
                “Get an oil-can and oil my joints,” he answered. ” They are rusted so badly that
                <NavLink className='hover-link text-decoration  ' to='/'>I cannot move them at all;</NavLink>
                if I am well oiled I shall soon be all right again. You will find an oil-can on a shelf in my cottage.”
                Dorothy at once ran back to the cottage and found the oil-can,
                and then she returned and asked anxiously, “Where are your joints?”
            </p>
        </div>
    );
};

export default SectionArticlesRSHero;