import React from 'react';

import {Button, Container} from "@mui/material";
import '../../../../Components/Style/Section-AddComment.css'

const SectionAddComment = () => {
    return (
        <Container>
            <div className='content-addComment'>
                <h2 className='style-global-title'><span className='border-title'>Leave</span> a Reply</h2>
                <p className='style-global-text-info'>Your email address will not be published. Required fields are marked *</p>
                <div className='content-comment'>
                    <div className='content-textArea'>
                        <label className='style-global-smallSize-2'>Comment <span className='color-red-required'> * </span></label>
                        <textarea className='style-global-text-info' required/>
                    </div>
                    <div className='content-input padding-top'>
                        <div className='style-flex '>
                            <label className='style-global-smallSize-2'>name <span className='color-red-required'>*</span></label>
                            <input className='style-global-text-info' type='text' required/>
                        </div>
                        <div className='style-flex'>
                            <label className='style-global-smallSize-2'>email <span className='color-red-required'>*</span></label>
                            <input className='style-global-text-info' type='email' required/>
                        </div>
                        <div className='style-flex' >
                            <label className='style-global-smallSize-2 '>website</label>
                            <input className='style-global-text-info' type='url'/>
                        </div>


                    </div>
                </div>
                <div className='checkbox '>
                    <p className='style-global-smallSize-2'>
                        <input  type='checkbox'/>
                        <span className='margin-left-10'> Save my name, email, and website in this browser for the next time I comment.</span></p>
                    <Button  variant='contained'>POST COMMENT</Button>
                </div>
            </div>
        </Container>
    );
};

export default SectionAddComment;