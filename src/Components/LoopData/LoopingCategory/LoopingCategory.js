import React, {useEffect, useState} from 'react';
import './LoopingCategory.css'
import useResize from "../../Hooks/UseResize";
const LoopingCategory = ({img,description,title,history,type}) => {

    const width =useResize(window.innerWidth)
    return (
        <div key={Math.random()*20} className="section-content-news">
            <img className="width_100" src={img}/>
            <div className="content-info-section ">
                <h2 className="style-middleTitle ">{title}</h2>
                <p className="style-smallText  padding-bottom-20"><span className="border-bottom">{history},</span>{type}</p>
                <p className={`style-middleTitle-2 ${width>768?'desktop ':'mobile'}`}>{description&&description}</p>
                <p className="read-more" >Read more</p>
            </div>
        </div>
    );
};

export default LoopingCategory;