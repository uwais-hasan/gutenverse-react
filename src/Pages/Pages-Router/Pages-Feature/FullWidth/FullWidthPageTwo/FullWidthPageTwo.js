import React from 'react';
import Header from "./Header";
import EmbedYoutube from "./EmbedYoutube";
import Text from "./Text";
import SingUp from "../../../../../Components/SingUp/SingUp";
import ControllerPagination from "../../../Pages-PostFeature/TestingPagination/ControllerPagination";

const FullWidthPageTwo = () => {
    return (
        <div>
            <Header/>
            <EmbedYoutube/>
            <Text/>
            <div className='update-form-sign-ws'>
                <SingUp/>
            </div>
            <ControllerPagination params='/main/full-with' length={3} />
        </div>
    );
};

export default FullWidthPageTwo;