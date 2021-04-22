import React from "react";
import './user.css';

export const User = ({props})=>{
    return(
        <div key = {props.id} id = {props.id} >
            <div className = 'person'>
                <div className = 'name'>{props.name}</div>
                <div className = 'username'>{'@' + props.username}</div>
            </div>
        </div>
    )
  };