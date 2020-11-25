import React from 'react';
import {
  ActionDeleteEmployeeUI,
  SET_SHOW_DELETE_EMPLOYEE,
} from '../../state/action';
import useData from '../../state/dataLayer';

function Modal({ title, description, size, actionType, actionMethod }) {
  const [, dispatch] = useData();

  const closeModal = () => {
    switch (actionType) {
      case SET_SHOW_DELETE_EMPLOYEE:
        ActionDeleteEmployeeUI(dispatch, false);
        break;
      default:
        return;
    }
  };

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
            onClick={closeModal}>
            Cancel
          </div>
          <div
            className='modal__container__footer__delete'
            onClick={actionMethod}>
            Delete
          </div>
        </div>
      </div>
    </main>
  );
}

export default Modal;
