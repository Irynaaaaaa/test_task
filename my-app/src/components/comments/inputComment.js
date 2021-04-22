import React, {useState} from 'react';
import '../posts/posts.css';

export const InputComment = (props) =>{
    const [obj, setObj] = useState({text : ''})
    const onFormChange = ({value , name})=>{
        setObj({...obj, [name] : value});
    } 
    const onButtonClick = ()=>{
        if(obj.text !== '')
        {
        let object = {
            postId : 'props.id',
            name : 'props.name',
            email : 'props.email',
            body : obj.text,
        };
        setObj({text : ''})
        props.editComment(object);
        }
    };

    return (
        <div className = 'input-button'>
            <div className = 'add-input'>
                <input type = 'text' name = 'text'  placeholder = 'type something here '
                onChange ={(event) => onFormChange(event.target)} value = {obj.text}/>
            </div>
                <button type = 'button' className = 'add-button' onClick = {onButtonClick}>save changes</button> 
            </div>
        )

}