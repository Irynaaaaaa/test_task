import {GET_USERS_REQUEST, GET_USERS_SUCCESS, SELECT_ITEM} from "../actions";

const initialState = {
    data : [{}],
};

export const userReducer  = (state = initialState, action)=>{
    switch (action.type) {
        case GET_USERS_REQUEST:
            return {...state};
        case GET_USERS_SUCCESS:
            return {...state, data: action.payload};
        case SELECT_ITEM:
            return {...state, userId: action.payload };
        default:
            return state;
    }
};
