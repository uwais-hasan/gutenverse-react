
import React, {Fragment, useEffect, useState} from 'react';
import {Button, TextField} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import './Drawer-top.css'
import {useDispatch} from "react-redux";
import {updateDrawerTop} from "../../Redux/Actions";
import ApiData from '../../Api/Category.json'
import {useNavigate, useParams} from "react-router-dom";
import ErrorsForm from "../ErrorsForm/ErrorsForm";

const DrawerTop = () => {
    const[inputSearch,setInputSearch]=useState('')
    const dispatch=useDispatch();
    const history=useNavigate();
    const[error,setError]=useState(false)
    const search=()=>{
        const getFeatured=ApiData['Featured'].data;
        const getLifestyle=ApiData['Lifestyle'].data;
        const getMovies=ApiData['Movies'].data;
        const getFood=ApiData['Food'].data;
        const getNews=ApiData['News'].data;
        const getPhoto=ApiData['Photo'].data;
        const getTrending=ApiData['Trending'].data;
        const getUncategorized=ApiData['Uncategorized'].data;
        const getVideo=ApiData['Video'].data;
        const concat=[...getFeatured,
            ...getLifestyle,
            ...getMovies,
            ...getFood,
            ...getNews,
            ...getPhoto,
            ...getTrending,
            ...getUncategorized,
            ...getVideo
        ]
        const filtered = concat.filter((item => {
            return item.title.toLowerCase().includes(inputSearch)
        }))


        if (filtered.length){
            return [dispatch(updateDrawerTop(false)), history(`/main/${filtered[0].title}`)]
        }else {
            setError(true)
            setInputSearch('')
        }
    }

    useEffect(()=>{
        let timeOut;
        if (error===true){
            timeOut= setTimeout(()=>{
              setError(false)
          },3000)
        }

        return ()=>{
            clearTimeout(timeOut)
        }
    },[error])
    return (
        <div className='section-search'>
            <form className='content-Drawer'>
                <input
                    type='text'
                    value={inputSearch}
                    onChange={(e)=>setInputSearch(e.target.value)}
                    placeholder='search...'
                />
                <Button onClick={search} variant="contained"><SearchIcon/></Button>
             <span  className='margin-right pointer-cursor'> <CloseIcon onClick={()=>dispatch(updateDrawerTop(true))} /></span>


            </form>
            {error&&<ErrorsForm inputSearch={inputSearch}/>}
        </div>
    );
};

export default DrawerTop;