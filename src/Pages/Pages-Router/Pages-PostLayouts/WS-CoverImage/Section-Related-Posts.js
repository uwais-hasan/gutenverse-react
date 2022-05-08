
import React from 'react';

import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import CameraAltIcon from '@mui/icons-material/CameraAlt';

import '../../../../Components/Style/Section-Related-Posts.css'
import {NavLink} from "react-router-dom";
import {Container} from "@mui/material";

const SectionRelatedPosts = () => {
    return (
      <Container>
          <div className='section-post-relatedPost'>
              <h3 className='style-global-title '><span className='border-title'>Related</span> Posts</h3>
              <div className="section_Latest_Stories">
                  <div className="content">
                      <div className="content-img">
                          <NavLink to='/main/Then going through some small strange motions'>
                              <img src="../img-news/Link-img/link-2.jpg"/>
                          </NavLink>
                      </div>
                      <div className="content-info">
                          <NavLink to='/main/Then going through some small strange motions'>  <h2 className="style-title">Then going through some small strange motions</h2></NavLink>
                          <span className=" style-global-span-info letter-space-2">FEBRUARY 14, 2019</span>
                          <span className='padding-0-10'>.</span>
                          <NavLink to='/category/Featured' className=" style-global-span-info letter-space-3  ">FEATURED</NavLink> ,
                          <NavLink to='/category/Lifestyle' className=" style-global-span-info letter-space-3  ">LIFESTYLE</NavLink> ,
                          <NavLink to='/category/Photo' className=" style-global-span-info letter-space-3 "> PHOTO </NavLink>
                          <p className="style-global-text-info-3">
                              A moderate incline runs towards the foot of Maybury Hill, and down this we clattered. Once the
                          </p>
                      </div>

                  </div>
                  <div className="content">
                      <div className="content-img">
                          <NavLink to='/main/Two long weeks I wandered'>
                              <img src="../img-news/Link-img/link-1.jpg"/>
                          </NavLink>
                      </div>
                      <div className="content-info">
                          <NavLink to='/main/Two long weeks I wandered'>  <h2 className="style-title">Two long weeks I wandered</h2></NavLink>
                          <span className=" style-global-span-info letter-space-2">DECEMBER 3, 2018</span>
                          <span className='padding-0-10'>.</span>
                          <NavLink to='/category/LifeStyle' className=" style-global-span-info letter-space-3  ">LIFESTYLE </NavLink> ,
                          <NavLink to='/category/Trending' className=" style-global-span-info letter-space-3 "> TRENDING </NavLink>
                          <p className="style-global-text-info-3">
                              Through two long weeks I wandered,
                              stumbling through the nights
                              guided only by the stars and hi…
                          </p>
                      </div>

                  </div>
                  <div className="content">
                      <div className="content-img">
                          <NavLink to='/main/At daybreak of the fifteenth day of my search'>
                              <img src="../img-news/Link-img/link-4.jpg"/></NavLink>
                      </div>
                      <div className="content-info">
                          <NavLink to='/main/At daybreak of the fifteenth day of my search'>  <h2 className="style-title">At daybreak of the fifteenth day of my search</h2></NavLink>
                          <span className=" style-global-span-info letter-space-2">SEPTEMBER 10, 2018</span>
                          <span className='padding-0-10'>.</span>
                          <NavLink to='/category/Photo' className=" style-global-span-info letter-space-3  "> PHOTO </NavLink> ,
                          <NavLink to='/category/Trending' className=" style-global-span-info letter-space-3  ">TRENDING </NavLink>

                          <p className="style-global-text-info-3">
                              When the amphitheater had cleared I crept stealthily to the top and as the great excavation lay…</p>
                      </div>
                      <CameraAltIcon className='absolute-content'/>
                  </div>
                  <div className="content">
                      <div className="content-img">
                          <NavLink to='/main/We Are Testing A Pagination Here'>
                              <img src="../img-news/Link-img/link-3.jpg"/></NavLink>
                      </div>
                      <div className="content-info">
                          <NavLink to='/main/We Are Testing A Pagination Here'>  <h2 className="style-title">We Are Testing A Pagination Here</h2></NavLink>
                          <span className=" style-global-span-info letter-space-2">NOVEMBER 3, 2016</span>
                          <span className='padding-0-10'>.</span>
                          <NavLink to={`/category/${'Staffs Picks'}`} className=" style-global-span-info letter-space-3 ">  STAFF'S PICKS </NavLink> ,

                          <p className="style-global-text-info-3">
                              The nearer moon, hurtling
                              suddenly above the horizon
                              and lighting up the Barsoomian
                              scene, showed m…
                          </p>
                      </div>

                  </div>
              </div>
          </div>
      </Container>
    );
};

export default SectionRelatedPosts;