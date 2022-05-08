import React, {Fragment, useEffect, useState} from 'react';
import {feature, pagesPostLayouts, pagePostFeature} from "../../Data/Data";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import SelectOption from "../SelectOption/SelectOption";
import './Nav.css'
import {NavLink} from "react-router-dom";


const Nav = () => {
    const [width, setWidth] = useState(window.innerWidth)


    const [show, setShow] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [openMenu, setOpenMen] = useState(false)

    const controlNavbar = () => {
        if (window.scrollY > lastScrollY) {
            setShow(false);
        } else {
            setShow(true);
        }
        setLastScrollY(window.scrollY);
    };
    const resize = () => {
        setWidth(window.innerWidth)
    }


    useEffect(() => {
        window.addEventListener('scroll', controlNavbar);
        return () => {
            window.removeEventListener('scroll', controlNavbar);
        };

    }, [lastScrollY]);

    useEffect(() => {
        window.addEventListener('resize', () => resize());
        return () => {
            window.removeEventListener('resize', () => resize());
        };
    }, []);


    return (


        <div className='section-content-nav'>
            {width > 768 ?
                <div className={`content-app-nav-desktop ${window.scrollY > 173 ? show ? 'shown' : 'hidden' : ''}`}>
                    <NavLink to='/' className='border style-global-title-medium pointer-cursor '>Home</NavLink>
                    < NavLink to='/news'
                              className='border style-global-title-medium pointer-cursor'>News</NavLink>
                    <SelectOption defultOption='POST LAYOUTS' selectedData={pagesPostLayouts}/>
                    <SelectOption defultOption='POST FEATURE' selectedData={pagePostFeature}/>
                    <SelectOption defultOption='FEATURE' selectedData={feature}/>
                    <NavLink to='/' className='border style-global-title-medium pointer-cursor'>PURCHASE</NavLink>
                </div> :
                <div className='content-app-nav-mobile'>
                    <div className='header-onMobile'>
                        {openMenu ? <CloseIcon onClick onClick={() => setOpenMen(!openMenu)}/>
                            : <MenuIcon onClick={() => setOpenMen(!openMenu)}/>}
                        <span>menuBar</span>
                    </div>
                    <div className={`${openMenu ? 'content-nav-mobile  ' : 'hidden-menu '}`}>
                        <NavLink to='/' className='border style-global-title-medium-white pointer-cursor '>Home</NavLink>
                        < NavLink to='/news' className='border style-global-title-medium-white pointer-cursor'>News</NavLink>
                        <SelectOption setOpenMen={setOpenMen} defultOption='POST LAYOUTS' selectedData={pagesPostLayouts}/>
                        <SelectOption  setOpenMen={setOpenMen} defultOption='POST FEATURE' selectedData={pagePostFeature}/>
                        <SelectOption  setOpenMen={setOpenMen} defultOption='FEATURE' selectedData={feature}/>
                        <NavLink to='/'
                                 className='border style-global-title-medium-white pointer-cursor '>PURCHASE</NavLink>

                    </div>
                </div>
            }
        </div>


    );
};

export default Nav;