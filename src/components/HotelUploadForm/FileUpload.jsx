import { connect } from "formik";
import React, { Component } from "react";
import Files from "react-files";
import "./fileUpload/fileupload.css";

class FileUpload extends Component {
  state = {
    image: [],
    files: this.props.formik.values.files
  };
  onFilesChange = image => {
    image.forEach(img => {
      this.props.formik.values.files.push(img);
    });
    this.setState({ image });
  };

  onFilesError(error, file) {
    console.log("error code " + error.code + ": " + error.message);
  }
  render() {
    const { files } = this.state;
  
 
    return (
      <section>
        <div className="mb-4 p-3 custom-shadow">
        <div className="files">
          <h3>Upload Pictures of your hotel</h3>
          <br />
          <Files
            className="files-dropzone"
            onChange={this.onFilesChange}
            onError={this.onFilesError}
            accepts={["image/png", "image/jpeg", ".pdf", "audio/*"]}
            multiple={true}
            maxFiles={4}
            maxFileSize={10000000}
            minFileSize={0}
            clickable
          >
            <div className=" piccard">
              <p className="tex">Drop files here or click to upload</p>
              <div className="blogphoto">
                {files[0] &&
                  files.map(img => (
                    <img
                      src={img.preview.url}
                      alt="just uploaded"
                      className="imageup"
                    />
                  ))}
              </div>
            </div>
          </Files>
        </div>
        </div>
      
      </section>
    );
  }
}

export default connect(FileUpload);
