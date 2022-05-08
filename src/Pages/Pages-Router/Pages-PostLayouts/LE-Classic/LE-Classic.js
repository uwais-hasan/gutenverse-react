import React from 'react';
import SingUp from "../../../../Components/SingUp/SingUp";

import SectionAddComment from '../WS-HeroImage/Section-AddComment'
import SectionPostInformationClassicRl from "./SectionPostInformationClassicRl";
import SectionEmbedYoutubeClassicRl from "./Section-EmbedYoutubeClassicRL";
import SectionArticalesClassicRl from "./Section-ArticalesClassicRL";
import SectionDetailsImgClassicRl from "./SectionDetailsImgClassicRl";
import SectionLeatherheadClassicRl from "./SectionLeatherheadClassicRL";
import CollectSideBar from "../../../../Components/SideBar/CollectSideBar/CollectSideBar";
import RsSectionStoreClassic from "./RsSectionStoreClassic";
import RsSectionRelatedPostsClassic from "./RsSectionRelatedPostsClassic";

const LeClassic = () => {
    return (
        <div className='section-le-classic'>

            <div className='divideSections flex-row-media-column-reverse justify-spaceAround margin-60-12-30'>
                <div className='sections-content width-70-100'>
                    <SectionPostInformationClassicRl/>
                    <SectionArticalesClassicRl/>
                    <SectionEmbedYoutubeClassicRl/>
                    <SectionDetailsImgClassicRl/>
                    <SectionLeatherheadClassicRl/>
                    <div className='update-form-sign'>
                        <SingUp/>
                    </div>
                    <RsSectionStoreClassic/>
                    <RsSectionRelatedPostsClassic/>
                    <SectionAddComment />
                </div>
                <div className='section-sideBar width-25-100'>
                    <CollectSideBar/>
                </div>
            </div>
        </div>
    );
};

export default LeClassic;