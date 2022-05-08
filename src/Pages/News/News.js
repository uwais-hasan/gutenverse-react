import React from 'react';


import './News.css'
import SideBarCategory from "../../Components/SideBar/SideBarCategory/SideBarCategory";
import SideBarPopularPost from "../../Components/SideBar/SideBarPopularPost/SideBarPopularPost";
import SideBarAdvertisement from "../../Components/SideBar/SideBar-advertisment/SideBar-advertisment";
import SideBarNewsLetters from "../../Components/SideBar/SideBar-NewsLetters/SideBar-NewsLetters";
import CategorySections from "../../Components/Sections/Category-Sections/Category-Sections";
const News = () => {

    return (
       <div className='container-pages'>
           <div className='section-news'>
               <div className='content-news'>
                   <CategorySections/>
               </div>
               <div className='content-sideBar-news'>
                   <SideBarPopularPost/>
                   <SideBarCategory/>
                   <SideBarAdvertisement/>
                   <SideBarNewsLetters/>
               </div>
           </div>
       </div>
    );
};

export default News;