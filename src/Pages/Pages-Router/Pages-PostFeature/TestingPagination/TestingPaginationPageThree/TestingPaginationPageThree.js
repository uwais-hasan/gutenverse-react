import React from 'react';
import HeaderTestingPagination from "../Header-TestingPagination";
import SingUp from "../../../../../Components/SingUp/SingUp";
import ControllerPagination from "../ControllerPagination";
import SectionStore from "../../../Pages-PostLayouts/WS-HeroImage/Section-Store";
import SectionRelatedPosts from "../../../Pages-PostLayouts/WS-HeroImage/Section-Related-Posts";
import SectionDetailsComment from "../../../Pages-PostLayouts/WS-CoverImage/Section-DetailsComment";
import SectionAddComment from "../../../Pages-PostLayouts/WS-HeroImage/Section-AddComment";
import Text from "./Text";

const TestingPaginationPageThree = () => {
    return (
        <div className='p-testingPagination'>
            <HeaderTestingPagination/>
            <Text/>
            <div className='update-form-sign-ws'>
                <SingUp/>
            </div>

            <ControllerPagination params='/main/We-Are-Testing-A-Pagination-Here' length={2}/>
            <SectionStore/>
            <SectionRelatedPosts/>
            <SectionDetailsComment/>
            <SectionAddComment/>
        </div>
    );
};

export default TestingPaginationPageThree;