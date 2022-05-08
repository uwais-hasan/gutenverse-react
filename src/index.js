import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {Provider} from "react-redux";


import {createStore} from "redux";
import Reducer from "./Redux/Reducer";

const store=createStore(Reducer);


const root=ReactDOM.createRoot(document.getElementById('root'))
root.render(<Provider store={store}><App/></Provider>)