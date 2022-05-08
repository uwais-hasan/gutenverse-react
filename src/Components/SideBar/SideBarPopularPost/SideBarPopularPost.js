import React, {Fragment} from 'react';
import './SideBarPopularPost.css'
import data from '../../../Api/Category.json'
import LoopingPopularPost from "../../LoopData/LoopingPopularPost/LoopingPopularPost";
import {useDispatch} from "react-redux";
import {updateDrawerLeft} from "../../../Redux/Actions";

const SideBarPopularPost = () => {



    return (
        <div className='parent-section-popular-post'>
            <h2 className='style-global-title-small border-bottom-gray-heavy'>POPULAR POSTS</h2>
            {data.popularPost.map(item=>{
                return(
                    <Fragment key={item.id*102}>
                        <LoopingPopularPost  title={item.title} img={item.urlImage} history={item.history} id={item.id}/>
                    </Fragment>
                )
            })}
        </div>
    );
};
export default SideBarPopularPost;