import React from 'react';
import Header from "./Header";
import SingUp from "../../../../../Components/SingUp/SingUp";
import ControllerPagination from "../../../Pages-PostFeature/TestingPagination/ControllerPagination";

const FullWidthPageFour = () => {
    return (
        <div>
            <Header/>
            <div className='update-form-sign-ws'>
                <SingUp/>
            </div>
            <ControllerPagination params='/main/full-with' length={3} />
        </div>
    );
};

export default FullWidthPageFour;