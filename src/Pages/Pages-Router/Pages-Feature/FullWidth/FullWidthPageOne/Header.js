import React from 'react';
import {NavLink} from "react-router-dom";
import '../../../../../Components/Style/Section-PostInformationClassic.css'

const Header = () => {
    return (
            <div className='content-post-leatherhead SectionPostInformationClassic  header'>
                <div className="para-link">
                    <h2 className='style-global-title font-size-50 padding-50-0 text-center'>Full Width</h2>

                    <NavLink className="style-global-smallSize" to="/"> HOME
                        <span className="margin-rightLeft">→</span>
                    </NavLink>

                    <NavLink className="style-global-smallSize" to="/main/Template">TEMPLATES
                        <span className="margin-rightLeft">→</span>
                    </NavLink>

                    <span className="style-global-smallSize">fullWidth</span>
                </div>
                <p className='style-global-text-info'>
                    <NavLink className='hover-link text-decoration variant-nav' to='/'> Oh, you foolish Alice!</NavLink> she answered herself. ‘How can you learn lessons in here? Why,
                    there’s hardly room for you, and no room at all for any lesson-books! And so she went on,
                    taking first one side and then the other, and making quite a conversation of it altogether;
                    but after a few minutes she heard a voice outside, and stopped to listen.

                    He took me for his housemaid,’ she said to herself as she ran. <strong>‘How surprised he’ll be</strong>
                    when he finds out who I am! But I’d better take him his fan and gloves—that is, if I can
                    find them.’ As she said this, she came upon a neat little house, on the door of which was
                    a bright brass plate with the name Rabbit engraved upon it. She went in without knocking,
                    and hurried upstairs, in great fear lest she should meet the real Mary Ann,
                    and be turned out of the house before she had found the fan and gloves.
                </p>
            </div>
    );
};

export default Header;