import React from 'react';


import Header from "./Header";
import Images from "../FullWidth/FullWidthPageOne/Images";
import Text from "../FullWidth/FullWidthPageOne/Text";
import EmbedYoutube from "../FullWidth/FullWidthPageTwo/EmbedYoutube";

import Articles from "./Articles";
import SingUp from "../../../../Components/SingUp/SingUp";

const AboutUs = () => {
    return (

       <div className='page-AboutUs'>
           <Header/>
           <Images/>
           <Text/>
           <EmbedYoutube/>
         <Articles/>
           <div className='update-form-sign-ws'>
           <SingUp/>
       </div>
       </div>


    );
};

export default AboutUs;