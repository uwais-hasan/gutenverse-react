import React from 'react';
import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <div className='content-post-leatherhead SectionPostInformationClassic  header'>
            <p className="para-link">
                <h2 className='style-global-title font-size-50 padding-50-0 text-center'>About Us</h2>
                <NavLink className="style-global-smallSize" to="/"> HOME
                    <span className="margin-rightLeft">→</span>
                </NavLink>
                <NavLink className="style-global-smallSize" to="/main/Template">TEMPLATES
                    <span className="margin-rightLeft">→</span>
                </NavLink>
                <span className="style-global-smallSize">About Us</span>
            </p>
            <p className='style-global-text-info'>
                <strong>2008</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ut hendrerit diam, eget
                tempus arcu. Nunc aliquam lacus urna, in eleifend nulla bibendum sit amet. Aliquam at mi quis
                ex sagittis malesuada ac euismod justo. Morbi lacus neque, lacinia vel interdum eget, dapibus
                id mi.<br/><br/>

                <strong> 2009</strong> Nam a rutrum diam. Sed sit amet lacus urna. Duis in iaculis turpis
                . In sed tristique neque. Donec in mi quis nisl hendrerit gravida ultricies
                vitae nisi. Nullam porttitor euismod blandit. Quisque eget nibh sodales, vestibulum arcu ut,
                interdum augue.<br/><br/>

                <strong>2012</strong> Nullam id risus sollicitudin, vestibulum est eget, lobortis urna. Cras auctor
                tellus non venenatis condimentum. Vestibulum volutpat posuere leo ac viverra. Curabitur
                elit turpis, luctus finibus purus sit amet, auctor dictum elit. Mauris venenatis odio nisl
                , ac mollis arcu facilisis sed. Vivamus sit amet placerat erat. Cras at scelerisque arcu.<br/>

                <strong>2013</strong> Sed eu tortor eros. Mauris quis dapibus arcu. Nullam eget odio quis neque placerat
                tincidunt ut in diam. Duis accumsan nec ex et aliquet. Nulla dictum viverra nunc, et tincidunt
                odio. Vivamus efficitur orci fermentum molestie scelerisque.<br/><br/>

                <strong> Now:</strong> Curabitur sit amet ipsum lacus. Maecenas quis sodales quam. Donec nibh mauris,
                malesuada vel convallis eget, laoreet auctor nisi. Aliquam in erat diam. Etiam lacinia
                purus ac ligula suscipit faucibus. Cras facilisis mi vitae tempus ornare. Nunc rutrum
                scelerisque turpis, vitae tempus ligula vehicula .<br/><br/>
            </p>
        </div>
    );
};

export default Header;