import React from "react";

const Settings = ({
  color,
  upperText,
  lowerText,
  uploadImage,
  upperTextSize,
  lowerTextSize,
  upperTextColor,
  lowerTextColor
}) => {
  return (
    <div className="card bg-light container">
      <b>Change Background color</b>
      <div className="frame-color">
        <span class="badge badge-primary" onClick={color} id="primary">
          {" "}
        </span>
        <span class="badge badge-secondary" onClick={color} id="secondary">
          {" "}
        </span>
        <span class="badge badge-success" onClick={color} id="success">
          {" "}
        </span>
        <span class="badge badge-danger" onClick={color} id="danger">
          {" "}
        </span>
        <span class="badge badge-warning" onClick={color} id="warning">
          {" "}
        </span>
        <span class="badge badge-info" onClick={color} id="info">
          {" "}
        </span>
        <span class="border badge badge-light" onClick={color} id="light">
          {" "}
        </span>
        <span class="badge badge-dark" onClick={color} id="dark">
          {" "}
        </span>
      </div>
      <hr />
      <b>Upload Image</b>
      <div className="form-group">
        <input
          onChange={uploadImage}
          type="file"
          className="form-control-file mb-2"
        />
      </div>
      <hr />
      <b>Write Upper Text</b>
      <input
        onChange={upperText}
        type="text"
        className="form-control form-control-sm mb-2"
        placeholder="Upper text"
      />
      <b>Size</b>
      <input onChange={upperTextSize} type="range" min="12" max="52" />

      <b>Color</b>
      <select
        onChange={upperTextColor}
        className="form-control form-control-sm mb-2"
      >
        <option>white</option>
        <option>black</option>
        <option>red</option>
        <option>blue</option>
        <option>yellow</option>
        <option>green</option>
      </select>
      <hr />
      <b>Write Lower Text</b>
      <input
        onChange={lowerText}
        type="text"
        className="form-control form-control-sm"
        placeholder="Lower text"
      />
      <b>Size</b>
      <input onChange={lowerTextSize} type="range" min="12" max="52" />

      <b>Color</b>
      <select
        onChange={lowerTextColor}
        className="form-control form-control-sm mb-2"
      >
        <option>white</option>
        <option>black</option>
        <option>red</option>
        <option>blue</option>
        <option>yellow</option>
        <option>green</option>
      </select>
    </div>
  );
};

export default Settings;
