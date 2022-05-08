import React from 'react';
import SectionPostInformationClassic from "./Section-PostInformationClassic";
import SectionMoreDescription from "./Section-More-description";
import MannerOfThing from "./MannerOfThing";
import SectionClassicImages from "./SectionClassicImages";
import {Container} from "@mui/material";
import SectionRelatedPosts from "./SectionRelatedPosts";
import SectionDetailsComment from "../WS-CoverImage/Section-DetailsComment";
import Leatherhead from './Leatherhead'
import SingUp from "../../../../Components/SingUp/SingUp";
import SectionStore from "./SectionStore";
import SectionAddComment from '../WS-HeroImage/Section-AddComment'

const WsClassic = () => {
    return (
        <div className='ws-section-Classic'>
            <SectionPostInformationClassic/>
            <SectionMoreDescription/>

             <MannerOfThing/>


            <SectionClassicImages/>
           <Leatherhead/>
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

export default WsClassic;