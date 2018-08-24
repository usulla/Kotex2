import React from 'react';
import PropTypes from 'prop-types';
import packs from '../../images/packs/packs.png';
import packs_logo from '../../images/header/header_logo.png';

const PacksPage = () => {
    return (
        <article className='packspage section'>
                <div className='packspage__top'>
                   <div className='packspage_text'>
                      <span>Участники шоу</span>
                      <img className='packspage__logo' src={packs_logo}/>
                      <span>выбирают</span>
                   </div>
                   <div className='packspage__packs'>
                   <a href='https://kotex.ru/?utm_source=tnt_online.ru&utm_medium=sp&utm_term=sites&utm_content=banner&utm_campaign=1231_kotex_sponsorship_digital_18' target='_blank'><img src={packs}/></a></div>
                </div>
        </article>
    );
};

export default PacksPage;