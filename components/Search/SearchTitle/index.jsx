import React from 'react';
import styles from './styles.module.css';

const SearchTitle = ({ props }) => (
  <div className={styles.search_section_contains}>
    <p className={styles.search_title_section}>
      {props.sellFlat}
      <br />
      {props.byOne}
      {' '}
        &nbsp;
      <span className={styles.clic}>
        {props.click}
      </span>
    </p>
    <p className={styles.search_title_section_desktop}>
      {props.sellHouse}
      <br />
      {props.byOne}
      {' '}
        &nbsp;
      <span className={styles.clic}>
        {props.click}
      </span>
    </p>
    <img className={styles.bitmap} src="/images/bitmap.png" alt="bitmap" />
    <img className={styles.bitmap_desktop} src="/images/bitmap@2x.png" alt="bitmap@2x" />
  </div>
);
export default SearchTitle;
