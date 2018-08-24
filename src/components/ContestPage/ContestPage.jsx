import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import $ from "jquery";
import Button from '../Button/Button.jsx';
import Frames from './Frames/Frames.jsx';
import ImageUpload from './ImageUpload/ImageUpload.jsx';
import Taglines from './Taglines/Taglines.jsx';
import SharePhoto from './SharePhoto/SharePhoto.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import contest_girl from '../../images/contest/contest-girl1.png';
import contest2_girl from '../../images/test/test-girl2.png';
import contest2_icon from '../../images/contest/contest2-icon.png';
import contest4_icon from '../../images/contest/contest4-icon.png';
import contest4_border from '../../images/contest/contest4-border.png';
import contest5_icon from '../../images/contest/contest5-icon.gif';
import './contestpage.js';

class ContestPage extends React.Component {
 state = {
      imageUrl:'',
      imageWithTag:'',
      imageShare:''
    };
 constructor(props) {
    super(props);
    this.state = {
      isChecked: false,
      imageUrl:window.imageUrl,
      imageWithTag:window.imageUrl2,
      imageShare:window.imageUrl3
    };
  }
   submitNote = (value1) => {
     this.setState({
         imageUrl: value1
    });

     this.state.imageUrl = value1;
     console.log(value1,'YYYYYYYYYYYYYYYYYYYYYYY');
     console.log(this.state.imageUrl,'09fffffTTTT');
   };

   submitNote2 = (value1) => {
     this.setState({
         imageWithTag: value1
    });

    this.state.imageWithTag = value1;
       console.log(value1,'YYYYYYrfrfrfrfrf');
     console.log(this.state.imageWithTag,'imageWithTag');
 };
    submitNote3 = (value1) => {
     this.setState({
         imageShare: value1
    });

    this.state.imageShare = value1;
       console.log(value1,'imageShare');
     console.log(this.state.imageShare,'imageShare');
 };

   toggleChange = () => {
    this.setState({
      isChecked: !this.state.isChecked,
    });
  }
  checkCheckbox = ()=>{
    if (this.state.isChecked == false ){
        $('.agelabel').after('<span>Вам нет 18 лет</span>');
    }
  }
render() {
return (
<article className='contestpage section'>
    <div className='contestpage__block'>
        <div className='contestpage__center-block'>

            <div className='contestpage__block1'>
                <div className='contestpage__left-block'>
                    <span className='top-text'>Мы - девочки! Мы можем все!</span>
                    <span className='top-description'>Хочешь выиграть крутые призы от KOTEX<br/> и попасть на шоу ТАНЦЫ - участвуй в конкурсе!</span>
                    <ul>
                        <li><span>1</span>Загрузи фото своей яркой жизни</li>
                        <li><span>2</span>Оформи креативную рамку</li>
                        <li><span>3</span>Добавь мотивирующую фразу</li>
                        <li><span>4</span>Поделись с друзьями в соц.сети</li>
                        <li><span>5</span>Получай призы каждую неделю</li>
                    </ul>
                    <Button text='Участвовать' classadd='start-contest'/>
                    <a href='' target='_blank' className='read-rules'>Читать правила</a>
                </div>
                <div className='contestpage__right-block'>
                    <img className='contestpage__girl' src={contest_girl}/>
                </div>
            </div>

            <div className='contestpage__block2 contest-child hide'>
                <div className='contestpage__block2-left'>
                   <div className='block2-icon'>
                    <img className='contest-icon' src={contest2_icon}/>
                    Загрузи<br/>фото
                    </div>
                </div>

             <div className='contestpage__block2-middle'>
             <form method="post" className="medata" action="javascript:void(null);" onSubmit={call}>
             <h3>Мои данные</h3>
             <input id="name" name="name" type="text" placeholder="Имя" required/>
             <input id="email" name="email" type="email" placeholder="Email" required/>
             <input id="city" name="city" type="text" placeholder="Город" required/>
             <div className='checkbox-block'>
             <input type="checkbox" required id="age" name="age"
               value="age" checked={this.state.isChecked} onChange={this.toggleChange}/>
             <label for="age" class='agelabel'>мне есть 18</label>
             </div>  
             <input type="submit" value="Загрузить фото" className='button' onClick={this.checkCheckbox} required/>
             </form>

             <ImageUpload submitNote={this.submitNote}/>
             </div> 

                <div className='contestpage__block2-right'>
                    <img className='contestpage__block2-girl' src={contest2_girl}/>
                </div>
            </div>
          <Frames submitNote2={this.submitNote2} userImg={this.state.imageUrl}/>
          <Taglines submitNote3={this.submitNote3} userFrame={this.state.imageWithTag}/>
          <SharePhoto userFinish={this.state.imageShare}/>
        </div>
    </div>

    <div className='contestpage__crystall'></div>
    </article>
    );
}
};
document.addEventListener('DOMContentLoaded', () => {
    $(".fileInput").on("click", function() {
    });

});
window.dataIdVar;
function call() {
    $(".fileInput").trigger("click");
    var msg = $('.medata').serializeArray();
    var value1 = msg[0].value;
    var name1 = msg[0].name;
    var value2 = msg[1].value;
    var name2 = msg[1].name;
    var value3 = msg[2].value;
    var name3 = msg[2].name;
    $.ajax({
        type: 'POST',
        url: 'https://kotex.tnt-online.ru/photo.php',
        data: {action:'add', name:value1, email:value2, city:value3},
        success: function(data) {
            console.log(data, 'data');
            var tempData = JSON.parse(data);
            	window.dataIdVar = tempData.user_id;
                console.log(window.dataIdVar, 'window.dataIdVar');
        },
        error: function(data) {
            window.dataIdVar = data.user_id;
        }
    });
}

export default ContestPage;