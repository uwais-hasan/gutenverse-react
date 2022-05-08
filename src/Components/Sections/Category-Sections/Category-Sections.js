import React, {Fragment} from 'react';

import LoopingCategory from "../../LoopData/LoopingCategory/LoopingCategory";
import dataApi from "../../../Api/Category.json";
import {useParams} from "react-router-dom";



const CategorySections = () => {
    const {nameCategory}=useParams()

    return (
        <Fragment>
            {!nameCategory&&dataApi.Featured.data?.map(item=>{
                return(
                    <LoopingCategory
                        key={item.id}
                        img={item.urlImage}
                        history={item.history}
                        type={item.type}
                        title={item.title}
                        description={item.description}
                    />
                )
            })}
            {nameCategory&&dataApi[nameCategory].data?.map(item=>{
                return(
                    <LoopingCategory
                        key={item.id}
                        img={item.urlImage}
                        history={item.history}
                        type={item.type}
                        title={item.title}
                        description={item.description}
                    />
                )
            })}
        </Fragment>
    );
};

export default CategorySections;