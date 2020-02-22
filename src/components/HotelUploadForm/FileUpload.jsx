import { connect } from "formik";
import React, { Component } from "react";
import Files from "react-files";
import "./fileUpload/fileupload.css";

class FileUpload extends Component {
  state = {
    image: [],
    files: this.props.formik.values.files
  };
  // onFilesChange = image => {
  //   image.forEach(img => {
  //     this.props.formik.values.files.push(img);
  //   });
  //   this.setState({ image });
  // };

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
  onFilesError(error, file) {
    console.log("error code " + error.code + ": " + error.message);
  }

  filesRemoveOne = file => {
    this.refs.files.removeFile(file);
  };

  filesRemoveAll = () => {
    this.refs.files.removeFiles();
  };

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    const { files, image } = this.state;

    return (
      <section>
        <br />
        <h5>
          Upload 10 Pictures of your hotel (Maximum picture size should be 1
          megabyte)
        </h5>
        <div className="mb-4 p-3 custom-shadow">
          <div className="files" style={{ minHeight: "150px" }}>
            <br />
            <Files
              ref="files"
              className="files-dropzone-gallery"
              onChange={this.onFilesChange}
              onError={this.onFilesError}
              multiple
              maxFiles={10}
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
                  <h3 style={{ cursor: "pointer" }}>
                    Drop images here, to upload
                  </h3>
                </div>
              )}
            </Files>
            <br />
            <button onClick={this.filesRemoveAll}>Remove All Files</button>

            {/* <button onClick={this.filesUpload}>Upload</button> */}
          </div>
        </div>
      </section>
    );
  }
}

export default connect(FileUpload);
