import React from 'react';
import {NavLink} from "react-router-dom";


import '../../../../Components/Style/Section-post-Information.css'

const SectionPostInformationWsHero = () => {
    return (
         <div className='content-post-information '>
             <div className='overlay'> </div>
             <div style={{backgroundImage:  `url("../img-news/WS-heroImages/ws-heroImg-1.jpg")`}} className='img'> </div>
             <div className="absolute-post-content letter-space-2">
                 <p>
                     <span className="style-global-smallSize opacity-dot-seven"> WRITTEN BY </span>
                     <span className="style-global-smallSize">
                        <NavLink to='/' className="style-global-smallSize" href="/">RICHARD CONNER</NavLink>
                         <span className='margin-rightLeft'>• FEBRUARY 1,2019</span> •
                          <span className='margin-rightLeft'> 6:31 PM</span>•
                           <NavLink to='/category/Video' className='margin-rightLeft'> VIDEO </NavLink>
                     </span>
                 </p>
                 <h2 className='style-global-bigTitle text-center max-width-title'>It must be in a month, but I see nothing here</h2>
                 <p className='para-link'>
                     <NavLink to='/' className="style-global-smallSize" href="/"> HOME</NavLink><span className='margin-rightLeft color-white-2'>→</span>
                     <NavLink to="/category/Video" className="style-global-smallSize" >VIDEO</NavLink><span className='margin-rightLeft color-white-2'>→</span>
                     <span className="style-global-smallSize">MUST BE IN A MONTH, BUT I SEE NOTHING HERE</span>
                 </p>
                 <p className="style-global-middleSize letter-space-1 line-height-text text-center ">We can’t possibly stay here, I said; and as I spoke the firing reopened for a moment<br/> upon…</p>
             </div>
         </div>

    );
};

export default SectionPostInformationWsHero;






