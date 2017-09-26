import React from 'react';

class EventImageUpload extends React.Component {
  constructor(props) {
    super(props);

    this.upload = this.upload.bind(this);
  }

  upload(e) {
    e.preventDefault();
    cloudinary.openUploadWidget(
      window.cloudinary_options,
      (error, image) => {
        if (error === null) {
          this.props.updateImageURL(image[0].url);
        }
      }
    );
  }

  render() {
    const { imageUrl } = this.props;

    return (
      <div className="image-upload">
        <button className="green-button" onClick={this.upload}>
          { `${imageUrl ? "EDIT": "ADD"} EVENT IMAGE` }
        </button>
        { imageUrl ? <div>{imageUrl}</div> : null }
      </div>
    );
  }
}

export default EventImageUpload;
