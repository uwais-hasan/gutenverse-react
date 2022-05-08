import React from 'react';
import {NavLink} from "react-router-dom";

const HeaderImg = () => {
    return (
        <div className='header-img'>
            <div className="SectionPostInformationClassic">
                <div className="absolute-post-content letter-space-2"><p><span
                    className="style-global-smallSize opacity-dot-seven"> WRITTEN BY </span><span
                    className="style-global-smallSize"><a className="style-global-smallSize" href="/src/Pages">RICHARD CONNER</a><span
                    className="margin-rightLeft">• FEBRUARY 1,2019</span> •<span className="margin-rightLeft"> 6:31 PM</span>•
                    <NavLink className="margin-rightLeft" to="/category/Movies"> MOVIES </NavLink>•
                  </span>
                </p><h2 className="style-global-bigSize ">Can you catch the expression of the whale?</h2><p
                    className="para-link"><NavLink to='' className="style-global-smallSize" href="/"> HOME<span
                    className="margin-rightLeft">→</span>
                </NavLink>
                    <NavLink to='/' className="style-global-smallSize" href="/category/Movies">Movies<span
                    className="margin-rightLeft">→</span></NavLink><span className="style-global-smallSize">Can you catch the expression of the whale?</span>
                </p><p className="style-global-middleSize letter-space-1 line-height-text ">
                    So he got out of the fury of the panic, and,
                    skirting the Edgware Road, reached Edgware about seven…<br/><br/>
                    Can you catch the expression of the Sperm Whale’s there? It is the same he died with,
                    only some of the longer wrinkles in the forehead seem now faded away.
                    I think his broad brow to be full of a prairie-like placidity, born of
                    a speculative indifference as to death. But mark the other head’s expression.
                    See that amazing lower lip, pressed by accident against the vessel’s side,
                    so as firmly to embrace the jaw. Does not this whole head seem to speak of an enormous practical
                    resolution in facing death? This Right Whale I take to have been a Stoic; the Sperm Whale,
                    a Platonian, who might have taken up Spinoza in his latter years.
                </p></div>

            </div>
        </div>
    );
};

export default HeaderImg;