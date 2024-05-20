import { NavLink } from 'react-router-dom';
import Logo from '../../../shared/components/Logo/Logo';
import css from './WelcomeSection.module.css';
import { useTranslation } from 'react-i18next';
import TourButton from './ButtonTour';

export default function WelcomeSection() {
  const { t } = useTranslation();
  return (
    <div className={css.section}>
      <div className={css.pad}>
        <div className={css.logo}>
          <Logo />
          <TourButton />
        </div>
        <div className={css.div}>
          <p className={css.parag}>{t('welcomeSection.recordPparag')}</p>
          <h1 className={css.h1}>{t('welcomeSection.title')}</h1>
          <button data-tour="welcomeSection1" className={css.button}>
            <NavLink to="/signup" className={css.signup}>
              {t('welcomeSection.tryTrackerBtn')}
            </NavLink>
          </button>
          <button data-tour="welcomeSection2" className={css.login}>
            <NavLink to="/signin">{t('welcomeSection.signIn')}</NavLink>
          </button>
        </div>
      </div>
    </div>
  );
}
