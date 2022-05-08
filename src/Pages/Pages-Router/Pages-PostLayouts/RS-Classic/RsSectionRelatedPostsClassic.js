import React from 'react';
import {NavLink} from "react-router-dom";
import CameraAltIcon from "@mui/icons-material/CameraAlt";

const RsSectionRelatedPostsClassic = () => {
    return (
      <div className='otherParentSectionPostRelatedPost'>
          <div className='section-post-relatedPost-RS'>
              <div className='section-post-relatedPost max-width-none-important'>

                  <h3 className='style-global-title '><span className='border-title'>Related</span> Posts</h3>
                  <div className="section_Latest_Stories">
                      <div className="content">
                          <div className="content-img">
                              <NavLink to='/main/And we men, the creatures who inhabit this earth'>
                                  <img src="../img-news/Link-img/link-11.jpg"/>
                              </NavLink>
                          </div>
                          <div className="content-info">
                              <NavLink to='/main/And we men, the creatures who inhabit this earth'>  <h2 className="style-title">And we men, the creatures who inhabit this earth</h2></NavLink>
                              <span className=" style-global-span-info letter-space-2">FEBRUARY 14, 2019</span>
                              <span className='padding-0-10'>.</span>
                              <NavLink to='/category/Featured' className=" style-global-span-info letter-space-3  ">FEATURED</NavLink> ,
                              <NavLink to='/category/Lifestyle' className=" style-global-span-info letter-space-3  ">LIFESTYLE</NavLink> ,
                              <NavLink to='/category/Photo' className=" style-global-span-info letter-space-3 "> PHOTO </NavLink>
                              <p className="style-global-text-info-3">
                                  I shouted above the sudden noise. She looked away from me downhill. The people were coming out …
                              </p>
                          </div>
                          <CameraAltIcon className='absolute-content'/>

                      </div>
                  </div>
              </div>
          </div>
      </div>
    );
};

export default RsSectionRelatedPostsClassic;