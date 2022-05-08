import React from 'react';
import {Container} from "@mui/material";

import '../../../../Components/Style/Register.css'
const Register = () => {
    return (
        <Container>
            <div className='section-register content-post-leatherhead'>
          <form>
              <label className='style-global-smallSize-2'>Your name</label>
              <input className='d-block width_100' type='text' />

              <label className='style-global-smallSize-2'>Your email</label>
              <input className='d-block width_100' type='text' />

              <label className='style-global-smallSize-2'>subject</label>
              <input className='d-block width_100' type='text' />

              <label className='style-global-smallSize-2'>Your message (optional)</label>
              <textarea className='d-block width_100'/>

              <button type='submit'>Submit</button>
          </form>
            </div>
        </Container>
    );
};

export default Register;