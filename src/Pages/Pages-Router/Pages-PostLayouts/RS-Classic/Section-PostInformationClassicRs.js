import React from 'react';
import '../../../../Components/Style/Section-PostInformationClassic.css'
import '../../../../Components/Style/Section-CoverImages.css'
import {NavLink} from "react-router-dom";

const SectionPostInformationClassicRs = () => {
    return (
      <div className='SectionPostInformationClassicRs'>
          <div className='SectionPostInformationClassic'>
              <div className="absolute-post-content letter-space-2 max-width-margin-articles-none">
                  <p>
                      <span className="style-global-smallSize opacity-dot-seven"> WRITTEN BY </span>
                      <span className="style-global-smallSize">
                        <a className="style-global-smallSize" href="/src/Pages">RICHARD CONNER</a>
                         <span className='margin-rightLeft'>• FEBRUARY 1,2019</span> •
                          <span className='margin-rightLeft'> 6:31 PM</span>•
                           <NavLink to='/category/Food' className=''> FOOD </NavLink>,
                            <NavLink to="/category/Staff's Picks" className=''> STAFF'S PICKS </NavLink>
                        </span>
                  </p>
                  <h2 className="style-global-bigSize ">The man liberally provides the brains</h2>
                  <p className='para-link'>
                      <NavLink to='/' className="style-global-smallSize"> HOME<span className='margin-rightLeft'>→</span></NavLink>
                      <NavLink to="/category//Staff's Picks" className="style-global-smallSize">STAFF'S PICKS<span className='margin-rightLeft'>→</span></NavLink>
                      <span className="style-global-smallSize">AT DAYBREAK OF THE FIFTEENTH DAY OF MY SEARCH</span>
                  </p>
                  <p className="style-global-middleSize letter-space-1 line-height-text ">I believe I have broken a finger here against his cursed jaw ain’t those mincing knives down in…
                  </p>
              </div>
              <div className='section-coverImages '>

                  <div className='section-coverImagesClassic'>
                      <div className='row'>
                          <img src='../img-news/short-10.jpg'/>
                          <img src='../img-news/WS-classic/ws-classic-7.jpg'/>
                          <img src='../img-news/WS-classic/ws-classic-8.jpg'/>
                          <img src='../img-news/WS-classic/ws-classic-8.5.jpg'/>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    );
};

export default SectionPostInformationClassicRs;