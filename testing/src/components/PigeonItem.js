import React from "react";

function PigeonItem({ id, name = "unknown", longitude, latitude, img_url }) {
  return (
    <li className="pigeon-item">
      <div>
        <p>id: {id}</p>
        <p>name: {name}</p>
        <p>longitude: {longitude}</p>
        <p>latitude: {latitude}</p>
      </div>
      <img src={img_url}></img>
    </li>
  );
}

export default PigeonItem;
