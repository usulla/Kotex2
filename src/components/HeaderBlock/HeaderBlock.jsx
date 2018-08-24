import React, { Component } from 'react';
import Nav from '../Nav/Nav.jsx';
import ToggleMenu from '../ToggleMenu/ToggleMenu.jsx';
import MobileMenu from '../MobileMenu/MobileMenu.jsx';
import header_girl from '../../images/header/header_girl.png';
import header_packs from '../../images/header/header_packs.png';
import header_logo from '../../images/header/header_logo.png';

class HeaderBlock extends Component {
    render() {
        return (
            <section className='header section'>  
                <ToggleMenu/>
                <MobileMenu list={[['Конкурс','sectionThree'],['Тест','section6'],['История успеха','sectionTwo'],['О продукте', 'section8']]}/>
                <div className='header__info'>
                <img className='header__girl' src={header_girl}/>
                <div className='header__content'>
                   <div className='header__text'>
                        Участвуй<br/> в конкурсе от Kotex <br/>и попади на съемки шоу
                    </div>
      <img className='header__logo' src={header_logo}/>
                    <div className='header__packs'><img src={header_packs}/></div>
                </div>
                </div>
            </section>
        );
    }
}

export default HeaderBlock;
