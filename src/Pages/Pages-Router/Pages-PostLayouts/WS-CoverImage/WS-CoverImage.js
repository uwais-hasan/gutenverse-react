import React from 'react';

import SectionPostInformationWsCover from "./Section-post-Information-ws-cover";
import {Container} from "@mui/material";
import TextInfo from "./Text-info";
import EmbedYoutube from "./EmbedYoutube";
import SectionActical from "./Section-actical";
import Leatherhead from "./Leatherhead";
import SectionStore from "./Section-Store";
import SectionRelatedPosts from "./Section-Related-Posts";
import SectionAddComment from '../WS-HeroImage/Section-AddComment'
import SingUp from "../../../../Components/SingUp/SingUp";
import SectionCoverImages from "./Section-CoverImages";
import SectionDetailsComment from "./Section-DetailsComment";

import './WS-CoverImage.css'

import TextInfoPart2 from "./TextInfoPart2";
const WsCoverImage = () => {
    return (
        <div className='section-CoverImage'>
            <SectionPostInformationWsCover/>


                <TextInfo/>
                <SectionCoverImages/>
                <SectionActical/>
                <Leatherhead/>
                <EmbedYoutube/>
                <TextInfoPart2/>
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

export default WsCoverImage;