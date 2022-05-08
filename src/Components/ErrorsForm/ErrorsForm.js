import React from 'react';
import {Container} from "@mui/material";
import './ErrorsForm.css'
const ErrorsForm = ({inputSearch}) => {
    return (
        <Container>
        <div className='errors'>
            {inputSearch!==isNaN?
                <p>we are sorry we don't found <span>{inputSearch}</span></p>
                :  <p>don't write number</p>
            }

        </div>
        </Container>
    );
};

export default ErrorsForm;