import React from 'react';
import prizes_girl from '../../images/prizes/prizes-packs2.png';
import prizes_packs from '../../images/prizes/prizes-packs.png';

const PrizesPage = () => {
    return (
        <article className='prizespage section'>
                <img className='prizespage__girl' src={prizes_girl} />
                <div className='prizespage__info'>
                <div className='prizespage__text'>
                       <div className='top-text'>
                       Крутые призы<br/>
                       <span>от KOTEX каждую неделю</span>
                       </div>
                       <div className='middle-text'>
                       <span>Приглашение<br/>на съемки шоу "Танцы"</span>
                       </div>
                       <div className='bottom-text'>
                           <span>10</span> поясных сумок<br/>
                           <span>10</span> подарочных наборов
                       </div>
                </div>
                <div className='prizespage__img'><img className='prizespage__packs' src={prizes_packs} /></div>
                <span className='prizespage__bottomtext'>Внешний вид призов может отличаться от их изображения в рекламных материалах</span>
                </div>
        </article>
    );
};

export default PrizesPage;