import {combineReducers} from "redux";
import { postsReducer } from "./postReducer";
import {userReducer} from './usersReducer';
import {commentReducer} from './commentReducer';

export const Reducer = combineReducers({
        user: userReducer,
        post : postsReducer,
        comment : commentReducer
    }
);