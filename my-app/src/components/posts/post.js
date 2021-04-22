import React from 'react';


export const Post = ({props}) => {

    return (
        <div key = {props.id} id = {props.id}>
            <span>  {props.body}</span>
        </div>
    
    )
}