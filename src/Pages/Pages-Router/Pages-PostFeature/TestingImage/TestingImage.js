import React from 'react';
import Header from "./Header";
import Text from "./Text";
import BigImage from "./BigImage";
import DescriptionImg from "./DescriptionImg";
import SingUp from "../../../../Components/SingUp/SingUp";
import SectionStore from "../FeatureImageDisable/Section-Store";
import SectionAddComment from "../../Pages-PostLayouts/WS-HeroImage/Section-AddComment";
import SectionRelatedPosts from "../../Pages-PostLayouts/WS-CoverImage/Section-Related-Posts";

const TestingImage = () => {
    return (
        <div className='p-testingImage'>
           <Header/>
            <Text/>
            <BigImage/>
            <DescriptionImg/>
            <div className='update-form-sign-ws'>
                <SingUp/>
            </div>
            <SectionStore/>
            <SectionRelatedPosts/>
            <SectionAddComment/>
        </div>
    );
};

export default TestingImage;