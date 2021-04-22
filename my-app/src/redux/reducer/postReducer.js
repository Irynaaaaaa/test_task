import { SELECT_ITEM, GET_POSTS_REQUEST, GET_POSTS_SUCCESS, POST_POSTS_REQUEST, POST_POSTS_SUCCESS} from "../actions";

const initialState = {
    userId : null,
    data : [{ }]
};

export const postsReducer  = (state = initialState, action)=>{
    switch (action.type) {
        case SELECT_ITEM:
            return {...state, userId : action.payload };
        case GET_POSTS_REQUEST:
            return {...state};
        case GET_POSTS_SUCCESS:
            return {...state, data : action.payload};
        case POST_POSTS_REQUEST:
                return {...state};
        case POST_POSTS_SUCCESS:
                return ({...state});
        default:
            return state;
    }
}; 
