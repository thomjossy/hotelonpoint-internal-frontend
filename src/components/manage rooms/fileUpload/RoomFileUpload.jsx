import { connect } from "formik";
import React, { Component } from "react";
import Files from "react-files";
import "./Roomfileupload.css";

class FileUpload extends Component {
  state = {
    image: [],
    files: this.props.formik.values.files
  };

  onFilesChange = files => {
    this.setState(
      {
        files
      },
      () => {
        console.log(this.state.files);
      }
    );
    files.forEach(img => {
      this.props.formik.values.files.push(img);
    });
  };

  filesRemoveOne = file => {
    this.refs.files.removeFile(file);
  };

  filesRemoveAll = () => {
    this.refs.files.removeFiles();
  };

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  onFilesError(error, file) {
    console.log("error code " + error.code + ": " + error.message);
  }
  render() {
    const { files } = this.state;

    return (
      <section>
        <br />
        <h3>
          Upload 5 pictures of the room (Maximum picture size should be 1
          megabyte)
        </h3>
        <div className="mb-4 p-3 custom-shadow">
          <div className="files">
            <br />
            <br />
            <Files
              ref="files"
              className="files-dropzone-gallery"
              onChange={this.onFilesChange}
              onError={this.onFilesError}
              multiple
              maxFiles={5}
              maxFileSize={10000000}
              minFileSize={0}
              clickable
            >
              {files.length > 0 ? (
                <div className="files-wrapper">
                  {files.map(file => (
                    <div className="single-img-div">
                      <img
                        className="upload-img"
                        src={file.preview.url}
                        key={file.id}
                      />
                      <i
                        className="fas fa-trash-alt text-danger delete"
                        id={file.id}
                        onClick={this.filesRemoveOne.bind(this, file)}
                      ></i>
                    </div>
                  ))}
                </div>
              ) : (
                <div>
                  <h4 style={{ cursor: "pointer" }}>
                    Drop images here, to upload
                  </h4>
                </div>
              )}
            </Files>
            <br />
            <button onClick={this.filesRemoveAll}>Remove All Files</button>
          </div>
          <br />
        </div>
      </section>
    );
  }
}

export default connect(FileUpload);
