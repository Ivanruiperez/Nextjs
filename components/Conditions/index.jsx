import React from 'react';
import styles from './styles.module.css';

const Conditions = ({ conditios }) => (
  <section className={`${styles.conditions_section} row`}>
    <div className={`${styles.conditions_mobile} col-xs-12`}>
      <img src={conditios.imgMobile} alt={conditios.imgMobile} />
    </div>
    <div className={`${styles.conditions_desktop} col-md-12`}>
      <img src={conditios.imgDesktop} alt={conditios.imgDesktop} />
    </div>
  </section>
);

export default Conditions;
