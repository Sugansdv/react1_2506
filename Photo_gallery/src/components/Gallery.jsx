import React, { useState } from "react";
import Lightbox from "./Lightbox";

const images = [
  "https://picsum.photos/id/1015/600/400",
  "https://picsum.photos/id/1016/600/400",
  "https://picsum.photos/id/1018/600/400",
  "https://picsum.photos/id/1020/600/400",
  "https://picsum.photos/id/1024/600/400",
  "https://picsum.photos/id/1025/600/400",
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div id="gallery" className="container mt-4">
      <h2 className="mb-4">Photo Gallery</h2>
      <div className="row g-3">
        {images.map((img, index) => (
          <div className="col-md-4" key={index}>
            <img
              src={img}
              alt={`Gallery ${index}`}
              className="img-fluid rounded shadow-sm"
              onClick={() => setSelectedImage(img)}
              style={{ cursor: "pointer" }}
            />
          </div>
        ))}
      </div>

      {selectedImage && (
        <Lightbox image={selectedImage} onClose={() => setSelectedImage(null)} />
      )}
    </div>
  );
};

export default Gallery;
