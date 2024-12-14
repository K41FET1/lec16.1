import React, { useState } from "react";
import { useParams } from "react-router-dom";
import data from "../data.json";
import "../ArtworkDetail.css";
import ProgressBar from "../components/progressBar/ProgressBar";

function ArtworkDetail() {
  const [isModalOpen, setModalOpen] = useState(false);
  const { id } = useParams();

  const selectedArtwork = data.find((item) => item.id === parseInt(id));

  if (!selectedArtwork) {
    return <p>Artwork not found!</p>;
  }

  const galleryImages = data.filter((item) => item.gallery === selectedArtwork.gallery);

  const [currentIndex, setCurrentIndex] = useState(
    galleryImages.findIndex((item) => item.id === selectedArtwork.id)
  );

  const handlePreviousImage = () => {
    setCurrentIndex((currentIndex - 1 + galleryImages.length) % galleryImages.length);
  };

  const handleNextImage = () => {
    setCurrentIndex((currentIndex + 1) % galleryImages.length);
  };

  const toggleModal = () => {
    setModalOpen(!isModalOpen);
  };

  return (
    <div className="artwork-detail">
      <div className="content-wrapper">
        <div className="desktop-view">
          <div className="image-section">
            <img
              className="artwork-image"
              src={`.${galleryImages[currentIndex].images.hero.small}`}
              width={475}
              height={560}
              alt={galleryImages[currentIndex].name}
            />

            <div className="action-buttons">
              <button
                className="view-image-button"
                type="button"
                onClick={toggleModal}
              >
                <img
                  src="../../assets/shared/icon-view-image.svg"
                  alt="View image icon"
                />
                VIEW IMAGE
              </button>
            </div>

            <div className="artist-info">
              <h1 className="artwork-title">
                {galleryImages[currentIndex].name}
              </h1>
              <p className="artist-name">
                {galleryImages[currentIndex].artist.name}
              </p>
            </div>

            <img
              src={`.${galleryImages[currentIndex].artist.image}`}
              alt={galleryImages[currentIndex].artist.name}
              className="artist-portrait"
              width={200}
              height={200}
            />
          </div>

          <div className="details-section">
            <p className="artwork-year">{galleryImages[currentIndex].year}</p>
            <div className="description-wrapper">
              <p className="artwork-description">
                {galleryImages[currentIndex].description}
              </p>
              <a className="source-link" href={galleryImages[currentIndex].source}>
                GO TO SOURCE
              </a>
            </div>
          </div>
        </div>

        {isModalOpen && (
          <div className="modal-overlay" onClick={toggleModal}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <img
                className="modal-image"
                src={`.${galleryImages[currentIndex].images.gallery}`}
                alt={galleryImages[currentIndex].name}
              />
              <button
                className="close-modal-button"
                type="button"
                onClick={toggleModal}
              >
                Close
              </button>
            </div>
          </div>
        )}

        <footer>
          <ProgressBar
            activeImageIndex={currentIndex}
            imageList={galleryImages}
          />
          <div className="footer-wrapper">
            <div className="footer-details">
              <h1>{galleryImages[currentIndex].name}</h1>
              <p>{galleryImages[currentIndex].artist.name}</p>
            </div>

            <div className="footer-buttons">
              <button onClick={handlePreviousImage}>
                <img
                  src="../../assets/shared/icon-back-button.svg"
                  alt="Previous"
                />
              </button>
              <button onClick={handleNextImage}>
                <img
                  src="../../assets/shared/icon-next-button.svg"
                  alt="Next"
                />
              </button>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default ArtworkDetail;
