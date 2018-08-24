import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import $ from "jquery";
import Button from '../../Button/Button.jsx';

class ImageUpload extends React.Component {
   componentDidMount() {
       this.setState({
         imageUrl: window.imageUrl
    });
  }

 state = {
      imageUrl:''
    };

  constructor(props) {
    super(props);
    this.state = {file: '', imagePreviewUrl: '', imageUrl: window.imageUrl};
  }
  submitNote = () => {
    this.props.submitNote('maria');
};
  _handleSubmit(e) {
    e.preventDefault();
    // TODO: do something with -> this.state.file
    var file_data = $('#inputfile').prop('files')[0];   
    var form_data = new FormData();                  
    form_data.append('photo', file_data);
    form_data.append('action', 'add_photo');
    form_data.append('id', window.dataIdVar);
         $.ajax({
            type:'POST', 
            url: 'https://kotex.tnt-online.ru/photo.php', 
            data:form_data,
            cache:false, // кэш и прочие настройки писать именно так (для файлов)
            // (связано это с кодировкой и всякой лабудой)
            contentType: false, // нужно указать тип контента false для картинки(файла)
            processData: false, // для передачи картинки(файла) нужно false 
            success:function( data ){
                console.log("Завершилось успешно! картинка"); // выведем в консоли успех 
                 var tempUrl = JSON.parse(data);
                 window.imageUrl = tempUrl.url;
                 this.props.submitNote(window.imageUrl);

            }.bind(this),
            error: function( data ){
                console.log("Завершилось с ошибкой"); // сообщение об ошибке
                console.log(data); // и данные по ошибке в том числе
                console.log(data.url); // и что в ответе получили, если там что-то есть
                window.imageUrl = 'https://img.stereo.ru/article-covers/2017/c71a414bdc059598dc76f92c51ab24a3.jpg';
                 //  this.setState({ imageUrl: window.imageUrl });//строка 2
                   this.props.submitNote(window.imageUrl);
            }.bind(this)
        });
    //console.log('handle uploading-', this.state.file);
  }

  _handleImageChange(e) {
    e.preventDefault();
    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      this.setState({
        file: file,
        imagePreviewUrl: reader.result
      });

      $(".submitButton").trigger("click");
       document.querySelector('.contestpage__block2').classList.add('hide');
         document.querySelector('.contestpage__block2').classList.remove('active');
         document.querySelector('.contestpage__block3').classList.add('active');
         document.querySelector('.contestpage__block3').classList.remove('hide');
    }

    reader.readAsDataURL(file);
        
  }

  render() {
    let {imagePreviewUrl} = this.state;
    window.$imagePreview = null;
    if (imagePreviewUrl) {
      window.$imagePreview = (<img src={imagePreviewUrl} />);
    } else {
      // $imagePreview = (<div className="previewText">Please select an Image for Preview</div>);
    }

    return (
      <div className="previewComponent">
        <form id="image-form" onSubmit={(e)=>this._handleSubmit(e)}>
          <input id='inputfile' name='photo' className="fileInput" 
            type="file" 
            onChange={(e)=>this._handleImageChange(e)} />
          <button className="submitButton" 
            type="submit" 
            onClick={(e)=>this._handleSubmit(e)}>U</button>
        </form>

        <div className="imgPreview">

        </div>
      </div>
    );
  }
}
  
export default ImageUpload;

