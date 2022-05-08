import React from 'react';
import Header from "./Header";
import Images from "./Images";
import Text from "./Text";
import SingUp from "../../../../../Components/SingUp/SingUp";
import ControllerPagination from "../../../Pages-PostFeature/TestingPagination/ControllerPagination";

const FullWidth = () => {
    return (
        <div className='padding-bottom-20'>
            <Header/>
            <Images/>
            <Text/>
            <div className='update-form-sign-ws'>
                <SingUp/>
            </div>
            <ControllerPagination params='/main/full-with' length={3} />
        </div>
    );
};

export default FullWidth;