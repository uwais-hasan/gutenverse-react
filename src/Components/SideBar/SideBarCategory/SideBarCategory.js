import React from 'react';

import categoryData from "../../../Api/Category.json";

import './SideBarCategory.css'
import {NavLink} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {updateDrawerLeft} from "../../../Redux/Actions";
const SideBarCategory = ({title}) => {


    const{drawerLeft}=useSelector(state=>state)
    const dispatch=useDispatch()

    const closeDispatch=()=>{
       if (drawerLeft===true){
           dispatch(updateDrawerLeft(false))
       }
    }



    return (
        <div className='section-sideBar-category'>
                <h1 className='style-global-title-small border-bottom-gray-heavy'>{title?'section':'category'}</h1>
                <ul>
                    {categoryData.category.map(item=>{
                        return(
                            <li key={item.count*Math.random()*2}>
                                <NavLink onClick={closeDispatch} className='style-global-text-info' to={`/category/${item.name}`} >{item.name}</NavLink>
                                <span>{item.count}</span>
                            </li>
                        )
                    })}
                </ul>
        </div>
    );
};

export default SideBarCategory;