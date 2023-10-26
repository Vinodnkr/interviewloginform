// Home.js
import React, { useState } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import './index.css';
import ImageUploadForm from "../ImageUploadForm";
import ImageItem from "../ImageItem";

import './index.css'

function Home() {
  const [images, setImages] = useState([]);
  const [editIndex, setEditIndex] = useState(-1);

  const handleUpload = (newImage) => {
    setImages([...images, newImage]);
  };

  const handleDragEnd = (result) => {
    if (!result.destination) {
      return; // Dropped outside the list.
    }

    const reorderedImages = [...images];
    const [reorderedItem] = reorderedImages.splice(result.source.index, 1);
    reorderedImages.splice(result.destination.index, 0, reorderedItem);

    setImages(reorderedImages);
  };

  const handleEdit = (index) => {
    setEditIndex(index);
  };

  const handleSaveEdit = (index, updatedImage) => {
    const updatedImages = [...images];
    updatedImages[index] = updatedImage;
    setImages(updatedImages);
    setEditIndex(-1);
  };

  const handleDelete = (index) => {
    const updatedImages = [...images];
    updatedImages.splice(index, 1);
    setImages(updatedImages);
  };

  return (
    <div className="image-upload-container">
      <h2 className="image-upload-header">Image Upload</h2>
      <ImageUploadForm onUpload={handleUpload} />
      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId="image-list">
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef} className="image-container">
              {images.map((image, index) => (
                <Draggable key={index} draggableId={`image-${index}`} index={index}>
                  {(provided) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      className="image-item"
                    >
                      <ImageItem
                        image={image}
                        index={index}
                        isEditing={editIndex === index}
                        onEdit={() => handleEdit(index)}
                        onSave={handleSaveEdit}
                        onDelete={() => handleDelete(index)}
                      />
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
}

export default Home;
