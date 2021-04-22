import axios from "axios";

export const GET_USERS_REQUEST = 'GET_USERS_REQUEST';
export const GET_USERS_SUCCESS = 'GET_USERS_SUCCESS';
export const POST_POSTS_REQUEST = 'POST_POSTS_REQUEST';
export const POST_POSTS_SUCCESS = 'POST_POSTS_SUCCESS';
export const SELECT_ITEM = 'SELECT_ITEM';
export const GET_POSTS_REQUEST = 'GET_POSTS_REQUEST';
export const GET_POSTS_SUCCESS = 'GET_POSTS_SUCCESS';
export const SELECT_POST = 'SELECT_POST';
export const SELECT_COMMENT = 'SELECT_COMMENT';
export const GET_COMMENT_REQUEST = 'GET_COMMENT_REQUEST';
export const GET_COMMENT_SUCCESS = 'GET_COMMENT_SUCCESS';
export const EDIT_COMMENT_REQUEST = 'EDIT_COMMENT_REQUEST';
export const EDIT_COMMENT_SUCCESS = 'EDIT_COMMENT_SUCCESS';



const getUsersRequest = ()=> {
    return{
        type: GET_USERS_REQUEST
    }
};
const getUsersSuccess = (payload)=>{
    return{
        type: GET_USERS_SUCCESS,
        payload
    }
};


const getPostsRequest = ()=> {
    return{
        type: GET_POSTS_REQUEST
    }
};
const getPostsSuccess = (payload)=>{
    return{
        type: GET_POSTS_SUCCESS,
        payload
    }
};

const getCommentsRequest = () => {
    return{
        type: GET_COMMENT_REQUEST
    }
}

const getCommentsSuccess = (payload) => {
    return{
        type: GET_COMMENT_SUCCESS,
        payload
    }
}

export const selectItem = (newId) => {
    return {
        type: SELECT_ITEM,
        payload: newId
    }
};

export const selectPost = (newId) => {
    return {
        type: SELECT_POST,
        payload: newId
    }
};
export const selectComment = (newId) => {
    return {
        type: SELECT_COMMENT,
        payload: newId
    }
};


const postsURL = 'https://jsonplaceholder.typicode.com/posts';

export const getPosts = () => {
    return dispatch => {
        dispatch(getPostsRequest());
        axios
        .get(postsURL)
        .then(result => {
                    dispatch(getPostsSuccess(result.data))
                }
            ).catch(err => {console.log(err)})
    }
};

const usersURL = 'https://jsonplaceholder.typicode.com/users';

export const getUsers = () => {
    return dispatch => {
        dispatch(getUsersRequest());
        axios
        .get(usersURL)
        .then(result => {
                    dispatch(getUsersSuccess(result.data))
                }
            ).catch(err => {console.log(err)})
    }
}



const postPostRequest = () => {
    return {
        type:  POST_POSTS_REQUEST
    }
};
const postPostSuccess = (payload) => {
    return {
        type: POST_POSTS_SUCCESS,
        payload 
    }
};

export  const addPost = ({ userId, body}) => {
    const data = {
        userId,
        body
    }
    return async dispatch => {
        dispatch(postPostRequest());
        try {
            const response = await fetch(postsURL, {
              method: 'POST', 
              body: JSON.stringify(data), 
              headers: {
                'Content-Type': 'application/json'
              }});
            const json = await response.json();
            console.log('Success:', JSON.stringify(json));
            postPostSuccess(json)
          } catch (error) {
            console.error('Error:', error);
          }
        }
}

const commentsURL = 'https://jsonplaceholder.typicode.com/comments?postId=1';

export const getComments = () => {
    return dispatch => {
        dispatch(getCommentsRequest());
        axios
        .get(commentsURL)
        .then(result => {
                    dispatch(getCommentsSuccess(result.data))
                }
            ).catch(err => {console.log(err)})
    }
}

const editCommentsRequest = () =>{
    return{
        type : EDIT_COMMENT_REQUEST
    }
}
const editCommentsSuccess = payload => {
    return{
        type : EDIT_COMMENT_SUCCESS,
        payload
    }
}

export const editComments = ({body}) => {
    const data = {
        body
    }

    return async dispatch => {
        dispatch(editCommentsRequest());
        try {
            const response = await fetch(postsURL, {
              method: 'PUT', 
              body: JSON.stringify(data), 
              headers: {
                'Content-Type': 'application/json'
              }});
            const json = await response.json();
            console.log('Success:', JSON.stringify(json));
            editCommentsSuccess(json)
          } catch (error) {
            console.error('Error:', error);
          }
        }
}
