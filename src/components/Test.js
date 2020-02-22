import React from "react";
import Files from "react-files";

class Test extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      files: []
    };
  }

  onFilesChange = files => {
    this.setState(
      {
        files
      },
      () => {
        console.log(this.state.files);
      }
    );
  };

  onFilesError = (error, file) => {
    console.log("error code " + error.code + ": " + error.message);
  };

  filesRemoveOne = file => {
    this.refs.files.removeFile(file);
  };

  filesRemoveAll = () => {
    this.refs.files.removeFiles();
  };

  render() {
    return (
      <div>
        <h1>Example 1 - List</h1>
        <Files
          ref="files"
          className="files-dropzone"
          style={{ height: "100px" }}
          onChange={this.onFilesChange}
          onError={this.onFilesError}
          multiple
          maxFiles={10}
          maxFileSize={10000000}
          minFileSize={0}
          clickable
        >
          Drop files here or click to upload
        </Files>
        <button onClick={this.filesRemoveAll}>Remove All Files</button>
        <button onClick={this.filesUpload}>Upload</button>
        {this.state.files.length > 0 ? (
          <div className="files-list">
            <ul>
              {this.state.files.map(file => (
                <li className="files-list-item" key={file.id}>
                  <div className="files-list-item-preview">
                    {file.preview.type === "image" ? (
                      <img
                        className="files-list-item-preview-image"
                        src={file.preview.url}
                      />
                    ) : (
                      <div className="files-list-item-preview-extension">
                        {file.extension}
                      </div>
                    )}
                  </div>
                  <div className="files-list-item-content">
                    <div className="files-list-item-content-item files-list-item-content-item-1">
                      {file.name}
                    </div>
                    <div className="files-list-item-content-item files-list-item-content-item-2">
                      {file.sizeReadable}
                    </div>
                  </div>
                  <div
                    id={file.id}
                    className="files-list-item-remove"
                    onClick={this.filesRemoveOne.bind(this, file)} // eslint-disable-line
                  />
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </div>
    );
  }
}

export default Test;
