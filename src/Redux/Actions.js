import {DRAWER_LEFT, DRAWER_TOP, PAGINATION_PAGES} from "./Type";

const updateDrawerTop=(data)=>{
    return{
        type:DRAWER_TOP,
        data
    }
}

const updateDrawerLeft=(data)=>{
    return{
        type:DRAWER_LEFT,
        data
    }
}
const paginationPagesFun=(data)=>{
    return{
        type:PAGINATION_PAGES,
        data
    }
}


export {updateDrawerTop,updateDrawerLeft,paginationPagesFun}