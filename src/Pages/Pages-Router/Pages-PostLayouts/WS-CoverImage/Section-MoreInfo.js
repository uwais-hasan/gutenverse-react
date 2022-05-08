import React from 'react';


import '../../../../Components/Style/Section-MoreInfo.css'
import {Container} from "@mui/material";

const SectionMoreInfo = () => {
    return (
    <Container>
        <div className='section-post-more-info'>
            <div className='section-content'>
                <div className='content-articles'>
                    <p className='style-global-text-info'>“There’s another rendering now; but still one text. All sorts
                        of men in
                        one kind of world, you see. Dodge again! here comes Queequeg—all tattooing—looks
                        like the signs of the Zodiac himself.
                    </p>
                </div>
                <div className='flex-row'>
                    <p className='style-global-text-info'>He luffs up before the doubloon; halloa,
                        and goes round on the other side of the mast;
                        why, there’s a horse-shoe nailed on that side;
                        and now he’s back again; what does that mean?
                        Hark! he’s muttering—voice like an old worn-out
                        coffee-mill. Prick ears, and listen!”
                    </p>
                    <img src='../img-news/WS-heroImages/ws-heroImg-2.jpg'/>
                </div>
            </div>
        </div>
    </Container>
    );
};

export default SectionMoreInfo;