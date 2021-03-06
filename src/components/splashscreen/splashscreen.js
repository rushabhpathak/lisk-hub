import React from 'react';
import { Link } from 'react-router-dom';
import grid from 'flexboxgrid/dist/flexboxgrid.css';
import { translate } from 'react-i18next';
import routes from '../../constants/routes';
import { PrimaryButtonV2, SecondaryButtonV2 } from '../toolbox/buttons/button';
import HeaderV2 from '../headerV2/headerV2';
import styles from './splashscreen.css';

const Splashscreen = ({ t }) => (
  <React.Fragment>
    <HeaderV2 showSettings={true} />
    <div className={`${styles.splashscreen} ${grid.row}`}>
      <div className={`${styles.wrapper} ${grid['col-sm-6']}`}>
        <div className={`${grid['col-xs-10']} ${styles.titleHolder}`}>
          <h1>{t('Welcome to the Lisk Hub!')}</h1>
          <p>{
            t('Create an account or sign in to manage your LSK, become a delegate or vote for another delegates.')
          }</p>
        </div>
        <Link className={styles.button} to={routes.login.path}>
          <SecondaryButtonV2>{t('Sign in')}</SecondaryButtonV2>
        </Link>
        <Link className={styles.button} to={routes.register.path}>
          <PrimaryButtonV2>{t('Create an Account')}</PrimaryButtonV2>
        </Link>
        <span className={styles.separator}>
          <span>{t('or')}</span>
        </span>
        <Link className={styles.link} to={routes.dashboard.path}>
          {t('Explore as a Guest')}
        </Link>
      </div>
    </div>
  </React.Fragment>
);

export default translate()(Splashscreen);
