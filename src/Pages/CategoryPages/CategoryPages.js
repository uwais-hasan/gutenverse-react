


import '../News/News.css'
import SideBarPopularPost from "../../Components/SideBar/SideBarPopularPost/SideBarPopularPost";
import SideBarCategory from "../../Components/SideBar/SideBarCategory/SideBarCategory";
import SideBarAdvertisement from "../../Components/SideBar/SideBar-advertisment/SideBar-advertisment";
import SideBarNewsLetters from "../../Components/SideBar/SideBar-NewsLetters/SideBar-NewsLetters";
import CategorySections from "../../Components/Sections/Category-Sections/Category-Sections";
const CategoryPages = () => {



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

export default CategoryPages;


