import { NavLink } from 'react-router-dom';
import Logo from '../../../shared/components/Logo/Logo';
import css from './WelcomeSection.module.css';

export default function WelcomeSection() {
  return (
    <div className={css.section}>
      <div className={css.pad}>
        <div className={css.logo}>
          <Logo />
        </div>
        <div className={css.div}>
          <p className={css.parag}>Record daily water intake and track</p>
          <h1 className={css.h1}>Water consumption tracker</h1>
          <NavLink to="/signup" className={css.signup}>
            Try tracker
          </NavLink>
          <NavLink to="/signin" className={css.login}>
            Sign In
          </NavLink>
        </div>
      </div>
    </div>
  );
}
