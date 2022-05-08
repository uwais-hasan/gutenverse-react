import React, {Fragment} from 'react';
import {Container} from "@mui/material";
import './Section_love_writing .css'
import {NavLink} from "react-router-dom";
import useResize from "../../Hooks/UseResize";
const Section_love_writing = () => {

    const width=useResize(window.innerWidth)
    return (
        <div className='content_love_writing '>

                <div className='content-section flex-row  container-home align-center'>
                    <div className='content-info'>
                        <p className='font-size-bigger color-white-2'>Love for the writing is our best strategy!</p>
                        <p className='style-global-text-info  '>Lorem ipsum dolor sit amet, consectetur
                            adipiscing elit. Ut elit tellus, luctus nec
                            ullamcorper mattis, pulvinar dapibus leo.
                        </p>
                    </div>
                    <div className='content-info-2'>
                        <div className='content width_100'>
                            <NavLink to='/main/ And we men, the creatures who inhabit this earth' >
                                <img className='width_100' src='./img-news/house beside the river.jpg'/>
                            </NavLink>

                            <div className="content-info-section ">
                              <NavLink to='/main/ And we men, the creatures who inhabit this earth' > <h2 className="style-global-bigSize-White  ">
                                    And we men, the creatures who inhabit this earth
                                </h2></NavLink>
                                <p className="style-smallText color-white-2 padding-bottom-20"><span
                                    className="border-bottom ">August 15,</span> 2018,featuce 1,life style,photo</p>


                                {
                                    width>768&&<Fragment>
                                    <p className="style-global-text-info ">
                                        No one gave a thought to the older worlds of space as<br/>
                                        sources of human danger, or thought of them o…
                                    </p>
                                    <NavLink to='/main/ And we men, the creatures who inhabit this earth' >
                                        <p style={{float:'right'}} className="read-more-white">Read more</p>
                                    </NavLink>

                                </Fragment>
                                   }

                            </div>
                        </div>
                    </div>
                </div>

        </div>
    );
};

export default Section_love_writing;