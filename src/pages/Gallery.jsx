import React from "react";
import data from "../data.json";
import { Link } from "react-router-dom";
import "../Gallery.css";

function Gallery() {
  console.log(data);

  return (
    <div>
      <div className="gallery-container">
        {data.map((item) => (
          <Link to={`/detail/${item.id}`} key={item.id}>
            <div className="gallery-item">
              <img
                src={`.${item.images.thumbnail}`}
                alt={item.artist.name}
                className="gallery-thumbnail"
              />
              <div className="gallery-info">
                <h2>{item.name}</h2>
                <p>{item.artist.name}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Gallery;
