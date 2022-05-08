import React, {useEffect} from 'react';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import './LightBox.css'
const LightBox = ({clickImg,setClickImg,handelRight,handelLeft,currentImg,lengthData}) => {
    const handleClick=(e)=>{
        if (e.target.classList.contains('section-LightBoc')){
            setClickImg(null)
        }
    }

    useEffect(() => {
        const handleEsc = (event) => {
            if (event.keyCode === 27)
               setClickImg(null)
        };
        window.addEventListener('keydown', handleEsc);

        return () => {
            window.removeEventListener('keydown', handleEsc);
        };
    }, []);
    console.log(lengthData-1)
    console.log(currentImg)
    return (
        <div  className='section-LightBoc' onClick={handleClick} >

         <div  className='content-img'>
             <span onClick={()=>setClickImg(null)} className='position-absolute-span'>x</span>
             <ArrowBackIosNewIcon   onClick={handelLeft}>left</ArrowBackIosNewIcon>
             <img   src={clickImg}/>
             <ArrowForwardIosIcon   onClick={handelRight}>right</ArrowForwardIosIcon>
         </div>
        </div>
    );
};

export default LightBox;