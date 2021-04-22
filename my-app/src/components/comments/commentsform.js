import React from 'react';
import {Comment} from './comment';
import {ModalComment} from './modalComment'
import './comments.css';

export const Comments = (props) =>{
    let comment = props.comments.filter(item => item.postId === props.postId)
    let commentsList = comment.map(item =>{
        return(
        <div className = 'comment-container' key = {item.id} id = {item.id}>
            <div  className = 'comment'>
                <Comment props = {item} />
            </div>
            <div className = 'buttons-comment'>
                <div onClick = {() => props.onSelectComment(item.id)}>
                    <ModalComment editComment = {props.editComment} />
                </div>
                <div>
                    <button type = 'button' className = 'edit-delete-button' onClick = {() => {props.deleteComment()}}> delete </button>
                </div> 
            </div>
        </div>
        )
    } )
    let post = props.posts.filter(item => {return(item.id === Number(props.postId))})
    const specificPost = post.map(item => item.body);


    return(
        <div>
            <div className = 'specificPost'>{specificPost}</div>
            {commentsList}
        </div>
    )
}