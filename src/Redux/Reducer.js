
import {DRAWER_LEFT, DRAWER_TOP, PAGINATION_PAGES} from "./Type";


const initialState={
    drawerTop:false,
    drawerLeft:false,
    pagePagination:1,
}

const Reducer = (state = initialState, action) => {
    switch (action.type) {
        case DRAWER_TOP:
            return {
                ...state,
                drawerTop: !state.drawerTop
            }
        case DRAWER_LEFT:
            return {
                ...state,
                drawerLeft: !state.drawerLeft
            }
        case PAGINATION_PAGES:
            return {
                ...state,
                pagePagination: action.data
            }
    }

    return state;
}

export default Reducer;