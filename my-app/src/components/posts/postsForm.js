import React from 'react';
import {Post} from './post';
import {ModalWindow} from './modalPost';
import {Link} from "react-router-dom";
import './posts.css'


export const Posts = (props) =>{
    let post = props.posts.filter(item => item.userId === props.userId)
    let postsList = post.map(item =>{
        return(
        <div className = 'post-container' key = {item.id} id = {item.id}>
            <div  className = 'post'>
                <Post props = {item} />
            </div>
            <div >
                <Link to = '/Post'>
                    <button type= 'button' className = 'button-add-post' onClick={() => props.onSelectPost(item.id)}>view comments</button>
                </Link>
            </div>
        </div>
        )
    } )
    let user = props.users.filter(item => {return(item.id === Number(props.userId))})
    const name = user.map(item => item.name);
    const username = user.map(item => item.username);

    
    return(
        <div>
            <div className = 'header'>
                <div className = 'author'>
                    <div className = 'name-post'>{name}</div>
                    <div className = 'username-post'>{'@' + username}</div>
                </div>
                <div> <ModalWindow addPost = {props.addPost} id = {props.userId}/></div>
            </div>
                {postsList}
        </div>
    )

}