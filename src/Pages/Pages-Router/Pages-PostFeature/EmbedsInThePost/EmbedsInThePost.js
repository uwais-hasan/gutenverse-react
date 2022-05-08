import React, {Fragment} from 'react';
import SectionArticlesCoverRl from "../../Pages-PostLayouts/LE-CoverImage/SectionArticlesCoverRl";
import SectionDetailsImgCoverRl from "../../Pages-PostLayouts/LE-CoverImage/SectionDetailsImgCoverRl";
import SectionWarningBoxRL from "../../Pages-PostLayouts/LE-CoverImage/SectionWarningBoxRL";
import SectionEmbedInstagramPartOneRl from "../../Pages-PostLayouts/LE-CoverImage/SectionEmbedInstagramPartOneRl";
import SectionEmbedInstagramPartTwoRl from "../../Pages-PostLayouts/LE-CoverImage/SectionEmbedInstagramPartTwoRl";
import SectionAritclesCoverPartTwoRl from "../../Pages-PostLayouts/LE-CoverImage/SectionAritclesCoverPartTwoRl";
import SectionEmbedYoutubeRl from "../../Pages-PostLayouts/LE-CoverImage/SectionEmbedYoutubeRl";
import SectionAritclesCoverPartThreeRl from "../../Pages-PostLayouts/LE-CoverImage/SectionAritclesCoverPartThreeRl";
import SingUp from "../../../../Components/SingUp/SingUp";
import SectionAddComment from "../../Pages-PostLayouts/WS-HeroImage/Section-AddComment";
import './EmbedsInThePost.css'
import BigImage from "./BigImage";

import SectionRelatedPosts from "../../Pages-PostLayouts/WS-HeroImage/Section-Related-Posts";
import Header from "./Header";

const EmbedsInThePost = () => {
    return (
        <div className='P-Section-Embed '>
            <Header/>
            <div className='content-post-leatherhead'>

            </div>
            <BigImage/>
            <div className='content-post-leatherhead'>
                <SectionWarningBoxRL/>
                <SectionEmbedInstagramPartOneRl/>
                <SectionEmbedInstagramPartTwoRl/>
                <SectionAritclesCoverPartTwoRl/>
                <SectionEmbedYoutubeRl/>
                <SectionAritclesCoverPartThreeRl/>
                <div className='update-form-sign'>
                    <SingUp/>
                </div>
            </div>
            <SectionRelatedPosts/>
            <SectionAddComment/>
        </div>
    );
};

export default EmbedsInThePost;