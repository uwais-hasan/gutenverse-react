import React, {Fragment, useEffect, useRef, useState} from 'react';
import SideBarAdvertisement from "../SideBar-advertisment/SideBar-advertisment";
import SideBarNewsLetters from "../SideBar-NewsLetters/SideBar-NewsLetters";
import SideBarPopularPost from "../SideBarPopularPost/SideBarPopularPost";
import SideBarCategory from "../SideBarCategory/SideBarCategory";
import './CollectSideBar.css'
const CollectSideBar = () => {

    const [width, setWidth] = useState(window.innerWidth)
    const [styleDiv, setStyleDiv] = useState('static')
    const ref = useRef()

    const resize = () => {
        setWidth(window.innerWidth)
    }
    const onScrolling = () => {
        if (window.scrollY > ref?.current?.clientHeight) {
            setStyleDiv('fixed')
        } else {
            setStyleDiv('static')
        }

    }
    useEffect(() => {
        window.addEventListener('resize', resize)

        return () => {
            window.removeEventListener('resize', resize)
        }
    }, [])
    useEffect(() => {
        window.addEventListener('scroll', onScrolling)
        return () => {
            window.removeEventListener('scroll', onScrolling)
        }

    }, [])

    return (
        <div  ref={ref} className={`CollectSideBar ${styleDiv}`} >
            {width>900&&<Fragment >
                <SideBarPopularPost/>
                <SideBarCategory/>
                <SideBarAdvertisement/>
                <SideBarNewsLetters/>
            </Fragment>
            }
        </div>
    );
};

export default CollectSideBar;