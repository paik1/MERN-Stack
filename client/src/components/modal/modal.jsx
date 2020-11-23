import React from 'react';

function Modal({ title, description, size, cancelAction }) {
  return (
    <main className='modal'>
      <div className={`modal__container modal-${size}`}>
        <div className='modal__container__header'>
          <img
            src={require('../../assets/icons/error.svg')}
            alt='modal-error'
          />
          <h3>{title}</h3>
        </div>
        <div className='modal__container__body'>{description}</div>
        <div className='modal__container__footer'>
          <div
            className='modal__container__footer__cancel'
            onClick={cancelAction}>
            Cancel
          </div>
          <div className='modal__container__footer__delete'>Delete</div>
        </div>
      </div>
    </main>
  );
}

export default Modal;
