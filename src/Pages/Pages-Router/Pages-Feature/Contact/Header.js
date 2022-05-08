import React from 'react';
import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <div className='content-post-leatherhead SectionPostInformationClassic  header'>
            <div className="para-link">
                <h2 className='style-global-title font-size-50 padding-50-0 text-center'>Contact</h2>
                <NavLink className="style-global-smallSize" to="/"> HOME
                    <span className="margin-rightLeft">→</span>
                </NavLink>
                <NavLink className="style-global-smallSize" to="/main/Template">TEMPLATES
                    <span className="margin-rightLeft">→</span>
                </NavLink>
                <span className="style-global-smallSize">Contact</span>
            </div>
           <div className='list-articles'>
               <h2 className='style-global-title p-m-bottom'>GOT A QUESTION?</h2>
               <p className='style-global-text-info'>
                   She packed her seven versalia, put her initial into the belt and made herself on the way.
                   When she reached the first hills of
                   the Italic Mountains, she had a last view back on the skyline of her hometown.
               </p>
           </div>
        </div>
    );
};

export default Header;