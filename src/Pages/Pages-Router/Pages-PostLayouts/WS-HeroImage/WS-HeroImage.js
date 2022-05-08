import React from 'react';

import {Container} from "@mui/material";
import SectionPostInformationWsHero from "./Section-post-Information-ws-hero";
import TextInfo from "./Text-info";
import EmbedYoutube from "./EmbedYoutube";
import SectionMoreInfo from "./Section-MoreInfo";
import SectionActical from "./Section-actical";
import SectionDescriptionImages from "./section-descriptionImages";
import Leatherhead from "./Leatherhead";
import SectionStore from "./Section-Store";
import SectionRelatedPosts from "./Section-Related-Posts";
import SectionAddComment from "./Section-AddComment";
import SingUp from "../../../../Components/SingUp/SingUp";
import SectionDetailsComment from "../WS-CoverImage/Section-DetailsComment";
import TextInfoPartTwo from "./TextInfoPartTwo";
import EmbedYoutubePartTwo from "./EmbedYoutubePartTwo";

const WsHeroImage = () => {
    return (
        <div className='section-HeroImage'>
            <SectionPostInformationWsHero/>
                <TextInfo/>
                <EmbedYoutube/>
                <SectionMoreInfo/>
                <SectionActical/>
                <SectionDescriptionImages/>
                <Leatherhead/>
                <EmbedYoutubePartTwo/>
                <TextInfoPartTwo/>
                   <div className='update-form-sign-ws'>
                       <SingUp/>
                   </div>
                <SectionStore/>
                <SectionRelatedPosts/>
                <SectionDetailsComment/>
                <SectionAddComment/>

        </div>
    );
};

export default WsHeroImage;