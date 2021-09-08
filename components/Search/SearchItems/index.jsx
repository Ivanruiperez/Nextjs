import React from 'react';
import styles from './styles.module.css';

const SearchItems = ({ sellProperty, searchItems, lorem }) => (
  <div className={styles.search_items}>
    <a className={styles.search_bottom} href={sellProperty}>
      {sellProperty}
    </a>
    <div className={styles.search_text}>
      <p>
        {lorem}
      </p>
    </div>
    <span className={styles.search_text_desktop}>
      {searchItems.searchTextDesktop}
    </span>
    <a className={styles.search_play_bottom} href={searchItems.watchVideo}>
      {searchItems.watchVideo.value}
      <div className={styles.search_play_bottom_icon} />
    </a>
  </div>
);
export default SearchItems;
