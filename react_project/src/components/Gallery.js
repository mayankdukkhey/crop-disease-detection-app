// src/components/Gallery.js
import React from 'react';
import './Gallery.css'; // Optional: Add custom CSS for styling

const Gallery = () => {
  return (
    <div className="gallery-container">
      <h2 className="gallery-heading">Gallery</h2>
      <div className="gallery">
        <img
          src="https://static.vecteezy.com/system/resources/thumbnails/034/900/294/small_2x/delicate-cotton-fields-ready-to-be-gathered-generative-ai-photo.jpg"
          alt="Cotton fields"
        />
        <img
          src="https://www.agriculture.com/thmb/5AVSe1HcglBkhmyai7fQDbHf1KE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/JohnDeereS780combineincorn-563e34f978a14999a52c8a6b63917a89.jpg"
          alt="Corn harvest"
        />
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7WM7FFwlzDpgJcCH-zADkVSy-ywUjthbHdA&s"
          alt="Tomato plants"
        />
        <img
          src="https://us.123rf.com/450wm/photoman1551/photoman15511406/photoman1551140600005/29607499-shovel-near-a-wooden-wall.jpg?ver=6"
          alt="Farming tools"
        />
      </div>
    </div>
  );
};

export default Gallery;
