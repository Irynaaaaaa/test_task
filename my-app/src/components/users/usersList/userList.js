import React from 'react';
import {User} from '../user/user';
import './userList.css';
import {Link} from "react-router-dom";


export const UsersList = (props)=> {
    let list = props.users.map(user=>{
        return(
            <div className = 'userlist' key = {user.id} id = {user.id} >
                <div  className = 'user' >
                    <User props={user} />
                </div> 
                <div  > 
                    <Link to = '/Posts'  >
                        <button type = 'button' className = 'button-details' onClick={() => props.onSelectItem(user.id)}>Details</button>
                    </Link>
                </div>
            </div>
            
            )})
    return(
        <div >
            <div className = 'users'><h2>USERS</h2></div>
            {list}
        </div>
        )
};