import React, {Fragment} from 'react';
import {useParams} from "react-router-dom";
import WsHeroImage from "./Pages-PostLayouts/WS-HeroImage/WS-HeroImage";
import LeClassic from "./Pages-PostLayouts/LE-Classic/LE-Classic";
import WsCoverImage from "./Pages-PostLayouts/WS-CoverImage/WS-CoverImage";
import WsClassic from "./Pages-PostLayouts/WS-Classic/WS-Classic";
import RsHeroImage from "./Pages-PostLayouts/RS-HeroImage/RS-HeroImage";
import RsClassic from "./Pages-PostLayouts/RS-Classic/RS-Classic";
import RsCoverImage from "./Pages-PostLayouts/RS-CoverImage/RS-CoverImage";
import LeHeroImage from "./Pages-PostLayouts/LE-HeroImage/LE-HeroImage";
import LeCoverImage from "./Pages-PostLayouts/LE-CoverImage/LE-CoverImage";
import TestingPagination from "./Pages-PostFeature/TestingPagination/TestingPaginationPageOne/TestingPagination";
import FeatureImageDisable from "./Pages-PostFeature/FeatureImageDisable/FeatureImageDisable";
import TestingImage from "./Pages-PostFeature/TestingImage/TestingImage";
import EmbedsInThePost from "./Pages-PostFeature/EmbedsInThePost/EmbedsInThePost";
import TestingPaginationPageThree
    from "./Pages-PostFeature/TestingPagination/TestingPaginationPageThree/TestingPaginationPageThree";
import TestingPaginationPageTwo
    from "./Pages-PostFeature/TestingPagination/TestingPaginationPageTwo/TestingPaginationPageTwo";
import FullWidth from "./Pages-Feature/FullWidth/FullWidthPageOne/FullWidth";
import Error404 from "./Pages-Feature/Error404/Error404";
import AboutUs from "./Pages-Feature/AboutUs/AboutUs";
import Contact from "./Pages-Feature/Contact/Contact";
import FullWidthPageTwo from "./Pages-Feature/FullWidth/FullWidthPageTwo/FullWidthPageTwo";
import FullWidthPageThree from "./Pages-Feature/FullWidth/FullWidthPageThree/FullWidthPageThree";
import FullWidthPageFour from "./Pages-Feature/FullWidth/FullWidthPageFour/FullWidthPageFour";


const PagesRouter = () => {
    const{namePage}=useParams()
    return (
        <Fragment>
            {namePage==='It must be in a month, but I see nothing here'&&<WsHeroImage/>}
            {namePage==='I realized that the crest must be within the range of…'&&<WsCoverImage/>}
            {namePage==="At daybreak of the fifteenth day of my search"&&<WsClassic/>}
            {namePage==="Audio Post: A sigh of satisfaction"&&<RsHeroImage/>}
            {namePage==="The great excavation lay far from the plaza"&&<RsCoverImage/>}
            {namePage==="The man liberally provides the brains"&&<RsClassic/>}
            {namePage==="Two long weeks I wandered"&&<LeHeroImage/>}
            {namePage==="Then going through some small strange motions"&&<LeCoverImage/>}
            {namePage==='It is very curious to watch this'&&<LeClassic/>}


            {namePage==='We-Are-Testing-A-Pagination-Here'&&<TestingPagination/>}
            {namePage==='We-Are-Testing-A-Pagination-Here-2'&&<TestingPaginationPageTwo/>}
            {namePage==='We-Are-Testing-A-Pagination-Here-3'&&<TestingPaginationPageThree/>}
            {namePage==='Can you catch the expression of the whale'&&<FeatureImageDisable/>}
            {namePage==='Testing images in the post'&&<TestingImage/>}
            {namePage==='He runs towards the Maybury Hill: Embeds'&&<EmbedsInThePost/>}


            {namePage==='full-with'&&<FullWidth/>}
            {namePage==='full-with-2'&&<FullWidthPageTwo/>}
            {namePage==='full-with-3'&&<FullWidthPageThree/>}
            {namePage==='full-with-4'&&<FullWidthPageFour/>}


            {namePage==='error-404'&&<Error404/>}
            {namePage==='about-us'&&<AboutUs/>}
            {namePage==='contact'&&<Contact/>}
        </Fragment>
    );
};

export default PagesRouter;