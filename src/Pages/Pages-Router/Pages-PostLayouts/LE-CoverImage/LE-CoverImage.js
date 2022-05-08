import React from 'react';

import SingUp from "../../../../Components/SingUp/SingUp";
import SectionAddComment from '../WS-HeroImage/Section-AddComment'
import SectionPostInformationCoverRl from "./SectionPostInformationCoverRl";
import SectionArticlesCoverRl from "./SectionArticlesCoverRl";
import SectionDetailsImgCoverRl from "./SectionDetailsImgCoverRl";
import SectionWarningBoxRL from "./SectionWarningBoxRL";
import SectionEmbedInstagramPartOneRl from "./SectionEmbedInstagramPartOneRl";
import SectionEmbedInstagramPartTwoRl from "./SectionEmbedInstagramPartTwoRl";
import SectionAritclesCoverPartTwoRl from "./SectionAritclesCoverPartTwoRl";
import SectionEmbedYoutubeRl from "./SectionEmbedYoutubeRl";
import SectionAritclesCoverPartThreeRl from "./SectionAritclesCoverPartThreeRl";
import CollectSideBar from "../../../../Components/SideBar/CollectSideBar/CollectSideBar";
import RsSectionRelatedPostsCover from "./RsSectionRelatedPostsCover";

const LeCoverImage = () => {
    return (
        <div className='section-le-cover'>
            <SectionPostInformationCoverRl/>
            <div className='divideSections flex-row-media-column-reverse justify-spaceAround margin-60-12-30'>
                <div className='sections-content width-70-100'>
                    <SectionArticlesCoverRl/>
                    <SectionDetailsImgCoverRl/>
                    <SectionWarningBoxRL/>
                    <SectionEmbedInstagramPartOneRl/>
                    <SectionEmbedInstagramPartTwoRl/>
                    <SectionAritclesCoverPartTwoRl/>
                    <SectionEmbedYoutubeRl/>
                  <SectionAritclesCoverPartThreeRl/>
                    <div className='update-form-sign'>
                        <SingUp/>
                    </div>
                   <RsSectionRelatedPostsCover/>
                    <SectionAddComment />
                </div>
                <div className='section-sideBar width-25-100'>
                    <CollectSideBar/>
                </div>
            </div>
        </div>
    );
};

export default LeCoverImage;