import React from 'react';
import Modal from 'react-modal';
import {InputComment} from './inputComment'

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

export const  ModalComment = (props) =>{
  const [modalIsOpen,setIsOpen] = React.useState(false);
  function openModal() {
    setIsOpen(true);
  }


  function closeModal(){
    setIsOpen(false);
  }

    return (
      <div>
        <button type = 'button' className = 'edit-delete-button'  onClick={openModal} > edit </button>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
        >
          <form>
            <InputComment editComment = {props.editComment}  />
          </form>
        </Modal>
      </div>
    );
}
