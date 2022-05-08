import React from 'react';

import '../Style/Sign-Up-post.css'
const SingUp = () => {
    return (
    <div className='parent-sign-up'>
        <div className='form-signUp'>
            <input className=' style-global-title-small' placeholder='YOUR EMAIL ADDRESS'/>
            <span className='border-input'></span>
            <button >Sign up</button>
        </div>
        <p className='style-smallText-2'>Subscribe to my email list and stay up-to-date!</p>
    </div>
    );
};

export default SingUp;