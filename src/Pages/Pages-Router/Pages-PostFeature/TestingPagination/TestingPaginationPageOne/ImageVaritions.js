import React from 'react';

import '../../../../../Components/Style/ImageVaritions.css'
import {Container} from "@mui/material";
const ImageVaritions = () => {
    return (

          <Container>
              <div className='content-post-leatherhead '>
                  <div className='paragraph padding-bottom-20'>
                      <h2 className='style-global-title'>Image variations</h2>
                      <p className='style-global-text-info'>
                          But what is this on the chest? I took it up, and held it close to the light, and felt it, and smelt it,
                          and tried every way possible to arrive at some satisfactory conclusion concerning it.
                      </p>
                  </div>
                  <div className='content-img-with-paragraph'>
                      <div className='row-1 padding-bottom-20'>
                          <img src='../img-news/Pagination-img/pagination-2.jpg'/>
                          <p className='style-global-text-info margin-none'>
                              I can compare it to nothing but a large door mat, ornamented at the edges with little
                              tinkling tags something like the stained porcupine quills round an Indian moccasin.
                              There was a hole or slit in the middle of this mat, as you see the same in
                              South American ponchos. But could it be possible that any sober harpooneer would get into a door mat,
                              and parade the streets of any Christian town in that sort of guise?<br/><br/>
                          </p>
                      </div>
                      <div className='row-2'>
                          <img src='../img-news/Pagination-img/pagination-3.jpg'/>
                          <div className='list-articles style-global-text-info'>
                              <p className='position-absolute'>
                                  Folding back the counterpane, I<br/>
                                  stooped over the bed. Though <br/>
                              </p>
                              <p className='position-static'>
                                  none of the most elegant,
                                  it yet stood the scrutiny tolerably well. I then glanced round the room; and besides the
                                  bedstead and centre table, could see no other furniture belonging to the place,
                                  but a rude shelf, the four walls, and a papered fireboard representing a man striking a
                                  whale. Of things not properly belonging to the room, there was a hammock lashed up, and
                                  thrown upon the floor in one corner; also a large seaman’s bag,
                                  containing the harpooneer’s wardrobe, no doubt in lieu of a land trunk.
                              </p>


                          </div>
                      </div>
                  </div>
              </div>
          </Container>

    );
};

export default ImageVaritions;