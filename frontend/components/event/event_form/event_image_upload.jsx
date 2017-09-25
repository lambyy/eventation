import React from 'react';

class EventImageUpload extends React.Component {
  constructor(props) {
    super(props);

    this.upload = this.upload.bind(this);
  }

  upload(e) {
    e.preventDefault();
    window.cloudinary.openUploadWidget(
      window.cloudinary_options,
      (error, image) => {
        if (error === null) {
          this.props.updateImageURL(image.url);
        }
      }
    );
  }

  render() {
    const { imageUrl } = this.props;
    console.log(imageUrl);
    return (
      <div className="image-upload">
        <button onClick={this.upload}>
          { `${imageUrl ? "EDIT": "ADD"} EVENT IMAGE` }
        </button>
        { imageUrl ? <p>{imageUrl}</p> : null }
      </div>
    );
  }
}

export default EventImageUpload;
