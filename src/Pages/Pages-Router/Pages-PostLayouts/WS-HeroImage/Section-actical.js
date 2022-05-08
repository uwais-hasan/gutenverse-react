import React from 'react';
import {NavLink} from "react-router-dom";


import '../../../../Components/Style/Section-actical.css'
import {Container} from "@mui/material";

const SectionActical = () => {
    return (
      <Container>
          <div className='content-article-Leatherhead'>
              <h2 className='style-global-title padding-top-20 padding-bottom-none'>Leatherhead</h2>
              <p className='style-global-text-info'>
                  I and my wife stood amazed. Then I realised that the crest of
                  Maybury
                  Hill must be within range of the Martians’ Heat-Ray now that
                  the college was cleared out of the way. At that I gripped my
                  wife’s arm, and without ceremony ran her out into the road.
                  Then I fetched out the servant, telling her I would go upstairs
                  myself for the box she was <NavLink className='hover-link text-decoration' to='/'>clamouring</NavLink> for.<br/><br/>

                  We can’t possibly stay here,
                  I said; and as I spoke the firing reopened for a moment upon the common.
                  “But where are we to go?” said my wife in terror. I thought perplexed.
                  Then I remembered her cousins at Leatherhead.</p>
          </div>
      </Container>
    );
};

export default SectionActical;