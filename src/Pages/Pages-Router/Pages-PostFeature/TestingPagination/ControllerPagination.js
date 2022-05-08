import React, {useEffect, useState} from 'react';
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {paginationPagesFun} from "../../../../Redux/Actions";


import '../../../../Components/Style/ControllerPagination.css'
import {Container} from "@mui/material";
const ControllerPagination = ({params,length}) => {

    const{pagePagination}=useSelector(state=>state);
    const[flex,setFlex]=useState('')
    const[getHeight,setGetHeight]=useState(window.innerHeight)
    const dispatch=useDispatch()
    const nextPages=()=>{
       if (pagePagination<=length){
           dispatch(paginationPagesFun(pagePagination + 1))
       }
    }
    const prevPages=()=> {
       if (pagePagination>1){
           dispatch(paginationPagesFun(pagePagination - 1))
       }
    }
    const styleFlexClass=()=>{
        if (pagePagination===1){
            setFlex('flex-end')
        }
        else if (pagePagination===length+1){
            setFlex('flex-start')
        }
        else if(pagePagination!==1&&pagePagination!==length+1){
            setFlex('spaceBetween')
        }
    }
    const history=useNavigate();

    useEffect(() => {
        history(`${params}${pagePagination>1?-pagePagination:''}`)
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // for smoothly scrolling
        });
        styleFlexClass()
    }, [pagePagination])

    return (
        <Container>
            <div className={`pagination-button ${flex}`}>
                {pagePagination>1&& <button className='style-global-text-info-4 float-left ' onClick={prevPages}>  {`<< prev`} </button>}
                {pagePagination<length+1&&
                    <button className='style-global-text-info-4 float-right  ' onClick={nextPages}> {`next >>`}</button>}
            </div>
        </Container>
    );
};

export default ControllerPagination;

// {/*<NavLink to={`/main/We-Are-Testing-A-Pagination-Here${pagePagination>1?-pagePagination:''}`}>*/}
// {/*</NavLink>*/}
// {/*<NavLink to={`/main/We-Are-Testing-A-Pagination-Here${pagePagination>1?-pagePagination:''}`}>*/}
// {/*</NavLink>*/}