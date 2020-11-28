import React from 'react';
import { Link } from 'react-router-dom';
import Loader from '../loader/loader';

function LandingModal({
  title,
  actionLabel,
  size,
  actionMethod,
  children,
  isLoading,
}) {
  return (
    <main className='modal full-screen-modal'>
      {isLoading ? (
        <Loader size={size} />
      ) : (
        <div className={`modal__container modal-${size}`}>
          <div className='modal__container__header'>
            <h1>{title}</h1>
          </div>
          <div className='modal__container__body'>{children}</div>
          <div className='modal__container__footer'>
            <Link to='/'>
              <div className='modal__container__footer__cancel'>Cancel</div>
            </Link>
            <div
              className='modal__container__footer__launch'
              onClick={actionMethod}>
              {actionLabel}
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

export default LandingModal;
