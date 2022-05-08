import React, { useState} from 'react';





const useLightBox =(arrayImg) =>{
    const[clickImg,setClickImg]=useState('');
    const[currentImg,setCurrentImg]=useState(0)
    const handleClick=(item,index)=>{
        setClickImg(item)
        setCurrentImg(index)
    }
    const handelRight=()=>{
        if (currentImg + 1 >= arrayImg.length) {
            const firstImg = arrayImg[0];
            setCurrentImg(0)
            setClickImg(firstImg)

        } else {

            const newCurrent = currentImg + 1;
            setCurrentImg(newCurrent)
            setClickImg(arrayImg[newCurrent])

        }

    }
    const handelLeft=()=>{
        if (currentImg===0){
            const lastImg = arrayImg[arrayImg.length-1];
           setCurrentImg(arrayImg.length-1)
            setClickImg(lastImg)
        }else {
            const newCurrent=currentImg-1
            setCurrentImg(newCurrent)
            setClickImg(arrayImg[newCurrent])

        }
    }

    return {clickImg, currentImg, setClickImg, handleClick, handelLeft, handelRight}

};

export default useLightBox;