import React, { Component } from "react";
import Display from "../design/Display";
import Settings from "../design/Setting";
import { connect } from "react-redux";
import { storage } from "../../config/firebaseConfig";
import { saveDesign } from "../../store/actions/saveDesignAction";

class Dashboard extends Component {
  state = {
    frameColor: "dark",
    upperText: "Upper Text",
    lowerText: "Lower Text",
    memeImg: "",
    url: "",
    upperTextSize: 38,
    upperTextColor: "white",
    lowerTextSize: 38,
    lowerTextColor: "white"
  };

  handleFrameColor = e => {
    this.setState({ frameColor: e.target.id });
  };

  handleUpperText = e => {
    this.setState({ upperText: e.target.value });
  };

  handleLowerText = e => {
    this.setState({ lowerText: e.target.value });
  };

  handleImageUpload = e => {
    if (e.target.files[0]) {
      const image = e.target.files[0];
      const uploadTask = storage.ref(`images/${image.name}`).put(image);
      uploadTask.on(
        "state_changed",
        snapshot => {
          console.log(snapshot);
        },
        error => {
          console.log(error);
        },
        () => {
          storage
            .ref("images")
            .child(image.name)
            .getDownloadURL()
            .then(url => {
              this.setState({ url });
            });
        }
      );
    }
  };

  handleUpperTextSize = e => {
    this.setState({ upperTextSize: e.target.value });
  };

  handleLowerTextSize = e => {
    this.setState({ lowerTextSize: e.target.value });
  };

  formatUpperText() {
    const size = this.state.upperTextSize;
    return parseInt(size);
  }

  formatLowerText() {
    const size = this.state.lowerTextSize;
    return parseInt(size);
  }

  handleUpperTextColor = e => {
    this.setState({ upperTextColor: e.target.value });
  };

  handleLowerTextColor = e => {
    this.setState({ lowerTextColor: e.target.value });
  };

  handleSaveDesign = e => {
    if (e.target.id === "saveDesign") {
      this.props.saveDesign(this.state);
    }
  };

  render() {
    return (
      <div className="container py-5">
        <div className="row">
          <div className="col-lg-8 col-md-12 col-sm-12">
            <Display
              display={this.state}
              textUpperFormat={this.formatUpperText()}
              textLowerFormat={this.formatLowerText()}
            />
            <hr />
          </div>

          <div className="col-lg-4 col-md-12 col-sm-12">
            <Settings
              color={this.handleFrameColor}
              upperText={this.handleUpperText}
              lowerText={this.handleLowerText}
              uploadImage={this.handleImageUpload}
              upperTextSize={this.handleUpperTextSize}
              upperTextColor={this.handleUpperTextColor}
              lowerTextSize={this.handleLowerTextSize}
              lowerTextColor={this.handleLowerTextColor}
              saveDesign={this.handleSaveDesign}
            />
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    saveDesign: design => dispatch(saveDesign(design))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Dashboard);
