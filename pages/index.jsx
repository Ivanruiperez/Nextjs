import React, { useState } from 'react';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import HeaderTitle from '../components/Header/HeaderTitle';
import HeaderMenu from '../components/Header/HeaderMenu';
import SearchInput from '../components/Search/SearchInput';
import {
  burguerMenuIcon,
  clicasaIcon,
  headerSections,
  phoneNumber,
  contactIcons,
  searchTitle,
  placeHolderSearchInput,
  lorem,
  sellProperty,
  searchItems,
  optionsHeaderTitle,
  optionsMobile,
  optionsDesktop,
  easySell,
  sellOptions,
  sellImg,
  sellImgDesktop,
  conditios,
  offers,
  business,
  businessTitle,
  footerOptions,
  mail,
  footerIcons,
  copyright,
  testimonialsUtils,
} from '../public/constants/index';
import HeaderIcon from '../components/Header/HeaderIcon';
import SearchTitle from '../components/Search/SearchTitle';
import SearchItems from '../components/Search/SearchItems';
import OptionsHeader from '../components/Options/OptionsHeader';
import OptionsMobile from '../components/Options/OptionsMobile';
import OptionsDesktop from '../components/Options/OptionsDesktop';
import SellHeader from '../components/Sell/SellHeader';
import SellOptionsMobile from '../components/Sell/SellOptionsMobile';
import SellOptionsDesktop from '../components/Sell/SellOptionsDesktop';
import Conditions from '../components/Conditions';
import Offers from '../components/Offers';
import Business from '../components/Business';
import FooterHeader from '../components/Footer/FooterHeader';
import FooterContact from '../components/Footer/FooterContact';
import FooterOptions from '../components/Footer/FooterOptions';
import FooterIcons from '../components/Footer/FooterIcons';
import Testimonials from '../components/Testimonials';

export default function Home() {
  const [testimonials, setTestimonials] = useState({ data: null, isLoading: true, error: null });
  return (
    <div className={styles.container}>
      <Head>
        <title>Proun test</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.png" />
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossOrigin="anonymous" />
        <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossOrigin="anonymous" />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossOrigin="anonymous" />
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossOrigin="anonymous" />
        <link href="http://fonts.googleapis.com/css?family=Lato:400,700" rel="stylesheet" type="text/css" />
      </Head>

      <main>
        <div className="container-fluid">
          <div className="row">
            <header className={`${styles.header} col-12`}>
              <HeaderTitle burguerMenuIcon={burguerMenuIcon} clicasaIcon={clicasaIcon} />
              <HeaderMenu sections={headerSections} />
              <HeaderIcon phoneNumber={phoneNumber} contactIcons={contactIcons} />
            </header>
          </div>
        </div>
        <div className="container-fluid">
          <div className={`${styles.search_section} row`}>
            <section className={`${styles.search_section_box} col-12`}>
              <SearchTitle props={searchTitle} />
              <SearchInput
                sellProperty={sellProperty}
                placeholder={placeHolderSearchInput}
                submitLink=""
              />
              <SearchItems
                sellProperty={sellProperty}
                searchItems={searchItems}
                lorem={lorem}
              />
            </section>
          </div>
        </div>
        <div className="container-fluid">
          <div className={`${styles.options_grid_desktop} row`}>
            <section className={`${styles.section_options} col-12`}>
              <OptionsHeader lorem={lorem} optionsHeaderTitle={optionsHeaderTitle} />
              <OptionsMobile optionsMobile={optionsMobile} />
              <OptionsDesktop optionsDesktop={optionsDesktop} />
            </section>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row">
            <section className="col-xs-12">
              <SellHeader lorem={lorem} easySell={easySell} />
            </section>
          </div>
        </div>
        <div className="container-fluid">
          <div className={`${styles.sell_options} row`}>
            <section className={`${styles.sell_options_box} col-12`}>
              <SellOptionsMobile sellOptions={sellOptions} sellImg={sellImg} />
              <SellOptionsDesktop sellOptions={sellOptions} sellImgDesktop={sellImgDesktop} />
            </section>
          </div>
        </div>
        <div className="container-fluid">
          <Conditions conditios={conditios} />
        </div>
        <div className="container-fluid">
          <Testimonials
            setTestimonials={setTestimonials}
            testimonials={testimonials}
            testimonialsUtils={testimonialsUtils}
            lorem={lorem}
          />
        </div>
        <div className="constainer-fluid">
          <Offers offers={offers} lorem={lorem} />
        </div>
        <div className="container-fluid">
          <Business business={business} businessTitle={businessTitle} lorem={lorem} />
        </div>
        <footer className="container-fluid">
          <div className={`${styles.footer_box} row`}>
            <section className="col-xs-12">
              <FooterHeader
                footerOptions={footerOptions}
                clicasaIcon={clicasaIcon}
                footerIcons={footerIcons}
              />
              <FooterContact
                clicasaIcon={clicasaIcon}
                mail={mail}
                phoneNumber={phoneNumber}
                contactIcons={contactIcons}
              />
              <FooterOptions
                copyright={copyright}
                footerOptions={footerOptions}
                footerIcons={footerIcons}
              />
              <FooterIcons footerIcons={footerIcons} />
            </section>
          </div>
        </footer>
      </main>
    </div>
  );
}