import React from 'react';
import HeaderImg from "./Header-Img";
import Images from "./Images";
import Text from "./Text";
import EmbedYoutube from "../../Pages-PostLayouts/WS-CoverImage/EmbedYoutube";
import TextInfoPart2 from "../../Pages-PostLayouts/WS-CoverImage/TextInfoPart2";
import Text2 from "./Text2";
import SingUp from "../../../../Components/SingUp/SingUp";
import SectionAddComment from "../../Pages-PostLayouts/WS-HeroImage/Section-AddComment";
import SectionStore from "./Section-Store";
import SectionRelatedPost from "./SectionRelatedPost";

const FeatureImageDisable = () => {
    return (
        <div className='p-FeatureImageDisable'>
            <HeaderImg/>
            <Images/>
            <Text/>
            <EmbedYoutube/>
            <TextInfoPart2/>
            <Text2/>
            <div className='update-form-sign-ws'>
                <SingUp/>
            </div>
            <SectionStore/>
            <SectionRelatedPost/>
            <SectionAddComment/>
        </div>
    );
};

export default FeatureImageDisable;