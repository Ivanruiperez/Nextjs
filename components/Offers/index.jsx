import React from 'react';
import styles from './styles.module.css';

const Offers = ({ offers, lorem }) => (
  <div className={`${styles.offers_box} row`}>
    <section className="col-xs-12">
      <div className={styles.offers_section_box}>
        <span className={styles.offers_title}>
          {offers.title}
        </span>
        <span className={styles.offers_text}>
          {lorem}
        </span>
        <button className={styles.offers_button} type="submit">
          {offers.buttonValue}
        </button>
      </div>
    </section>
  </div>

);

export default Offers;
