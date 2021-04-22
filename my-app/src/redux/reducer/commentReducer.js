import { SELECT_POST, SELECT_COMMENT, GET_COMMENT_REQUEST, GET_COMMENT_SUCCESS, EDIT_COMMENT_REQUEST, EDIT_COMMENT_SUCCESS} from "../actions";

const initialState = {
    postId : null,
    commentId : null,
    data : [{ }]
};

export const commentReducer  = (state = initialState, action)=>{
    switch (action.type) {
        case SELECT_POST:
            return {...state, postId : action.payload };
        case SELECT_COMMENT:
            return {...state, commentId : action.payload };
        case GET_COMMENT_REQUEST:
            return {...state};
        case GET_COMMENT_SUCCESS:
            return {...state, data : action.payload};
        case EDIT_COMMENT_REQUEST:
            return{...state}
        case EDIT_COMMENT_SUCCESS:
            return({...state }, console.log('success'))
        default:
            return state;
    }
}; 
