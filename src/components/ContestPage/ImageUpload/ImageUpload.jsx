import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Button from '../../Button/Button.jsx';

class ImageUpload extends React.Component {
demoMethod(){ 
    // this.props.sendData(value); 
} 
  constructor(props) {
    super(props);
    this.state = {file: '',imagePreviewUrl: ''};
  }

  _handleSubmit(e) {
    e.preventDefault();
    // TODO: do something with -> this.state.file
    console.log('handle uploading-', this.state.file);
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
    }

    reader.readAsDataURL(file);
         document.querySelector('.contestpage__block2').classList.add('hide');
         document.querySelector('.contestpage__block2').classList.remove('active');
         document.querySelector('.contestpage__block3').classList.add('active');
         document.querySelector('.contestpage__block3').classList.remove('hide');
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
        <form onSubmit={(e)=>this._handleSubmit(e)}>
          <input className="fileInput" 
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

