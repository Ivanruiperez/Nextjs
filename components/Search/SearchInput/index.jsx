import React from 'react';
import styles from './styles.module.css';

const SearchInput = ({ placeholder, submitLink, sellProperty }) => (
  <div className={styles.search_input}>
    <img src="/images/shape.svg" alt="shape" />
    <input placeholder={placeholder} />
    <a href={submitLink} className={styles.search_bottom_desktop}>
      {sellProperty}
    </a>
  </div>
);

export default SearchInput;
