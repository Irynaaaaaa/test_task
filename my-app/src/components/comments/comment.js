import React from 'react';


export const Comment = ({props}) => {

    return (
        <div key = {props.id} id = {props.id} >
            <div className = 'author-comment' >
                <div className = 'name-comment'>  {props.name}</div>
                <div className = 'email'> {props.email}</div>
            </div>
            <div className = 'comment-body'>{props.body}</div>            

         </div>
    )
}