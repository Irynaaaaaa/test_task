import React, {useState} from 'react';
import './posts.css';

export const InputPost = (props) =>{
    const [obj, setObj] = useState({text : ''})
    const onFormChange = ({value , name})=>{
        setObj({...obj, [name] : value});
    } 
    const onButtonClick = ()=>{
        if(obj.text !== '')
        {
        let object = {
            userId : props.id,
            body : obj.text,
        };
        setObj({text : ''})
        props.addPost(object);
        }
    };

    return (
        <div className = 'input-button'>
            <div className = 'add-input'>
                <input type = 'text' name = 'text'  placeholder = 'type something here '
                onChange ={(event) => onFormChange(event.target)} value = {obj.text}/>
            </div>
                <button type = 'button' className = 'add-button' onClick = {onButtonClick}>add</button> 
            </div>
        )

}