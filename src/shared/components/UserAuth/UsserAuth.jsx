// import TourButton from '../ButtonTour/ButtonTour';
import css from './UserAuth.module.css';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';

const UsserAuth = () => {
  const { i18n } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState(i18n.language);

  const changeLanguage = lng => {
    i18n.changeLanguage(lng);
    setCurrentLanguage(lng);
    window.location.reload(); // Перезагрузка страницы
  };

  return (
    <>
      <div className={css.lngBtns}>
        <button
          className={`${css.lngBtn} ${
            currentLanguage === 'en' ? `${css.active}` : ''
          }`}
          type="button"
          onClick={() => changeLanguage('en')}
        >
          EN
        </button>
        <button
          className={`${css.lngBtn} ${
            currentLanguage === 'ua' ? `${css.active}` : ''
          }`}
          type="button"
          onClick={() => changeLanguage('ua')}
        >
          UA
        </button>
      </div>
    </>
  );
};

export default UsserAuth;
