import React from 'react';
import {SwiperSlide,Swiper} from 'swiper/react'
import {swiperHeaderData} from "../../Data/Data";
import {Pagination,Navigation} from "swiper";


// get method by swiper core
import SwiperCore from 'swiper';

//css file
import 'swiper/swiper.min.css'
import 'swiper/components/pagination/pagination.min.css'
import 'swiper/components/navigation/navigation.min.css'
import './SwiperHeader.css'

//get svg
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import useResize from "../Hooks/UseResize";
const SwiperHeader = () => {
    SwiperCore.use([Pagination,Navigation])
    const width=useResize();
    return (
  <div className='content-app-swiperHeader'>
      <Swiper
           navigation={true}
           pagination={true}
      >
          {swiperHeaderData.map(item=>{
              return(
                  <SwiperSlide  key={Math.random()*10} >
                    <div className='flex'>
                        <img src={item.ImgUrl}/>
                     <div className='svg-camera'>
                         <PhotoCameraIcon style={{color:'white'}}/>
                     </div>
                        <div className='backgroundColor-img'>da</div>
                        <div className='position-info'>
                            <p className='styleSmallSpan '><span className='border-bottom'>{item.data.history}</span><span className='margin-rightLeft'>•</span><span>{item.data.feature}</span></p>
                            <p className='styleBigTitle'>{item.data.title}</p>
                            <p className='styleMiddleTitle'>{width>768&&item.data.description}</p>
                        </div>

                    </div>

                  </SwiperSlide>
              )
          })}
      </Swiper>
  </div>
    );
};

export default SwiperHeader;