
import {useEffect, useState} from "react";
import './SelectOption.css'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import {NavLink} from "react-router-dom";
const SelectOption=({selectedData,defultOption,setOpenMen})=> {

    const [toggle, setToggle] = useState(false)

    const[width,setWidth]=useState(window.innerWidth)
    const closeMenu=()=>{
        setOpenMen(false)
    }
    const resizeWidth=()=>{
        setWidth(window.innerWidth)
    }
    useEffect(()=>{
        window.addEventListener('resize',resizeWidth)

        return ()=>{
            window.removeEventListener('resize',resizeWidth)
        }
    },[])

    return (
        <div className='content-app-selected '>
            <div className='control-select'>
                <h2 className={width > 768 ? 'style-global-title-medium pointer-cursor border' : 'style-global-title-medium-white'}>{defultOption}</h2>
                {toggle ? <ArrowDropDownIcon color='error' onClick={() => setToggle(!toggle)}/>
                    : <ArrowDropUpIcon color='error' onClick={() => setToggle(!toggle)}/>}
            </div>
            <div className={`${toggle && 'active-nav-menu-item'}`}>
                <div className='menu-item  '>
                    {selectedData.map(item => {
                        return (
                            <NavLink onClick={closeMenu} className='style-global-text-info-smallSize opacity-07' to={`/main/${item.des}`}
                                     key={item.name}>{item.name}
                            </NavLink>
                        )
                    })}
                </div>
            </div>
        </div>
    );
}
export default SelectOption;