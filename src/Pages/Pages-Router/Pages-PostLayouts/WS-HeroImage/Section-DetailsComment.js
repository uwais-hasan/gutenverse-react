import React from 'react';
import {Reply} from "@mui/icons-material";



import '../../../../Components/Style/Section-DetailsComment.css'
import {Container} from "@mui/material";

const SectionDetailsComment = () => {
    return (
        <Container>
            <div className='section-detailsComment'>
                <h2 className='style-global-title'>One Reply to “I realized that the crest must be within the range of…”</h2>
                <div className='content-details flex-row gab-20'>
                    <div className='row-img'>
                        <img src='../img-news/WS-coverImages/ws-coverImg-11.png'/>
                    </div>
                    <div className='row-details flex-column'>
                        <p className='name'>Ronald</p>
                        <div className='row-history' >
                            <p className=' style-italic'>September 24, 2018 at 6:18 am</p>
                            <p className='style-history'><Reply className='icon'/><span className='style-global-smallSize'>Reply</span></p>
                        </div>
                        <p className='details-comment style-global-text-info line-height-text margin-top-40'>I and my wife stood amazed. Then I realised that the crest of Maybury Hill must be
                            within range of the Martians’ Heat-Ray now that the college was cleared out of the way.

                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae tortor varius, blandit
                            turpis nec, condimentum ipsum. Maecenas augue augue, maximus sed gravida a, consequat sed lectu
                        </p>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default SectionDetailsComment;