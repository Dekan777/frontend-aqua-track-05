import { useState } from 'react';
import Button from '../../../shared/components/Button/Button';
import { sprite } from '../../../shared/icons/index';
// import { Modal } from '../../../shared/components/Modal/Modal.jsx';
import { UserSettingsModal } from '../../modals/UserSettingsModal/UserSettingsModal.jsx';

import css from './UserBarPopover.module.css';
import { Modal } from '../../../shared/components/Modal/Modal.jsx';

export const UserBarPopover = () => {
  const [isUserSettingsModalOpen, setIsUserSettingsModalOpen] = useState(false);
  const [isLogOutModalOpen, setIsLogOutModalOpen] = useState(false);

  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const toggleSettingsModalOpen = () => {
    setIsUserSettingsModalOpen(!isUserSettingsModalOpen);
  };

  const toggleLogoutModalOpen = () => {
    setIsLogOutModalOpen(!isLogOutModalOpen);
  };

  return (
    <>
      <div onClick={toggleModal} className={css.wrapper}>
        <Button onClick={toggleSettingsModalOpen} className={css.settingBtn}>
          <svg width="16" height="16" className={css.icon}>
            <use xlinkHref={`${sprite}#settings`}></use>
          </svg>
          Setting
        </Button>
        {isOpen && (
          <div className="modal-overlay" onClick={closeModal}>
            <UserSettingsModal active={isOpen} setActive={setIsOpen}>
              {/* <UserSettingsModal onClose={closeModal} /> */}
            </UserSettingsModal>
          </div>
        )}
        <Button onClick={toggleLogoutModalOpen} className={css.logoutBtn}>
          <svg width="16" height="16" className={css.icon}>
            <use xlinkHref={`${sprite}#log_out`}></use>
          </svg>
          Log out
        </Button>
      </div>
    </>
  );
};
