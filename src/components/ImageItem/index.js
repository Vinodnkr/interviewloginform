// ImageItem.js
import React from "react";

function ImageItem({ image, onEdit, onDelete }) {

 
  return (
    <div>
      <img src={URL.createObjectURL(image.file)} alt={image.title} />
      <h3>{image.title}</h3>
      <button onClick={onEdit}>Edit</button>
      <button onClick={onDelete}>Delete</button>
    </div>
  );
}

export default ImageItem;
