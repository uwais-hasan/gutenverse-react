import React from 'react';
import {Button, Container, TextField} from "@mui/material";
import './Section-Signup_print.css'
const SectionSignup_print = () => {
    return (

          <div className='content-Signup_print flex-row align-center justify-center'>
              <div className='content-row '>
                  <p className='style-big-title margin-none'>Sign Up to get print<br/> & digital access to the <br/>Magazine</p>
                  <p className='style-global-text-info letter-space-none '>Magazine publishes monthly, except for combined <br/>issues that count as two, as indicated on issue’s cover.</p>
                  <div className='content-info'>
                      <TextField
                          placeholder='your email'
                          className='border-radius-none color-white width_300px'


                      />
                      <Button variant='contained ' className='border-radius-none color-red'>submit</Button>
                  </div>
                  <p className='.style-middleTitle-2'>Subscribe to my email list and stay up-to-date!</p>
              </div>
              <div className='content-row width_50px'>
                  <img className='width_100' src='./img-news/book.png'/>
              </div>
          </div>

    );
};

export default SectionSignup_print;