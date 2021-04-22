import React from 'react';
import Modal from 'react-modal';
import {InputPost} from './input'

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

Modal.setAppElement('#root')

export const  ModalWindow = (props) =>{
  const [modalIsOpen,setIsOpen] = React.useState(false);
  function openModal() {
    setIsOpen(true);
  }


  function closeModal(){
    setIsOpen(false);
  }

    return (
      <div>
        <button type = 'button' className = 'button-add-post'  onClick={openModal} > add new post </button>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
         {/* <button onClick={closeModal}>close</button>*/} 
          <form>
            <InputPost addPost = {props.addPost} id = {props.id} />
          </form>
        </Modal>
      </div>
    );
}
