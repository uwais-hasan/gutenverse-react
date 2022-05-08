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
                By this time she had found her way into a tidy little room with a table in the window,
                and on it (as she had hoped) a fan and two or three pairs of tiny white kid gloves: she
                took up the fan and a pair of the gloves, and was just going to leave the room, when her
                eye fell upon a little bottle that stood near the looking-glass. There was no label this
                time with the words ‘DRINK ME,’ but nevertheless she uncorked it and put it to her lips.
                ‘I know SOMETHING interesting is sure to happen,’ she said to herself, ‘whenever I eat or
                drink anything; so I’ll just see what this bottle does. I do hope it’ll make me
                grow large again, for really I’m quite tired of being such a tiny little thing!’

                Alas! it was too late to wish that! She went on growing, and growing, and very soon had to kneel
                down on the floor: in another minute there was not even room for this, and she tried the effect
                of lying down with one elbow against the door, and the other arm curled round her head. Still
                she went on growing, and, as a last resource, she put one arm out of the window, and one foot up the chimney,
                and said to herself ‘Now I can do no more, whatever happens. What WILL become of me?’
            </p>
        </div>
    );
};

export default Header;