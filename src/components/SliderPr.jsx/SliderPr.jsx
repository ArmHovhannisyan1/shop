import React, { useState } from 'react';
import './sliderpr.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

const SliderPr = (props) => {
  let images
  if (props.hoverimage) {
    images = [props.image, props.hoverimage]
  } else {
    images = [props.image]
  }
  // const goToSlide = (index) => {
  //   setCurrentIndex((prevIndex) => (index + images.length) % images.length);
  // };
  const [currIndex, setCurrIndex] = useState(0)

  const nextImage = () => {
    if (currIndex !== images.length - 1) {
      setCurrIndex(prev => prev + 1)
    } else {
      setCurrIndex(0)
    }
  }

  const prevImage = () => {
    if (currIndex === 0) {
      setCurrIndex(images.length - 1)
    } else {
      setCurrIndex(prev => prev - 1)
    }
  }

  // const renderThumbnails = () => {
  //   const thumbnailsToDisplay = 5;
  //   const start = Math.max(0, Math.min(currentIndex, images.length - thumbnailsToDisplay));
  //   const visibleThumbnails = images.slice(start, start + thumbnailsToDisplay);

  //   const renderThumbnail = (image, index) => (
  //     <div
  //       key={index}
  //       className={`thumbnail ${currentIndex === start + index ? 'active' : ''}`}
  //       onMouseEnter={() => goToSlide(start + index)}
  //     >
  //       <div className="image">
  //         <img src={`/images/${image}`} alt={`Thumbnail ${start + index + 1}`} />
  //       </div>
  //     </div>
  //   );

  // return (
  //   <div className="thumbnail-container text-center">
  //     {start > 0 && (
  //       <button className="btn slider-pr-btn" onClick={() => goToSlide(start - 1)}>
  //         <FontAwesomeIcon icon={faChevronUp} />
  //       </button>
  //     )}
  //     {visibleThumbnails.map(renderThumbnail)}
  //     {start + thumbnailsToDisplay < images.length && (
  //       <button className="btn slider-pr-btn" onClick={() => goToSlide(start + thumbnailsToDisplay)}>
  //         <FontAwesomeIcon icon={faChevronDown} />
  //       </button>
  //     )}
  //   </div>
  // );


  return (
    <div className="simple-gallery">
      <div className="gallery-container row">
        {images.length > 1 &&
          <SmallImages
            images={images}
            currIndex={currIndex}
            setCurrIndex={setCurrIndex}
          />}
        <div className="item">
          <div className="image container-image">
            <img src={`../images/${images[currIndex]}`} alt={`Slide ${currIndex + 1}`} className="main-image" />
          </div>
          {images.length > 1 && <div className="nav-buttons">
            <button className="btn slider-pr-btn" onClick={() => prevImage(currIndex - 1)}><FontAwesomeIcon icon={faChevronLeft} /></button>
            <button className="btn slider-pr-btn" onClick={() => nextImage(currIndex + 1)}><FontAwesomeIcon icon={faChevronRight} /></button>
          </div>}
        </div>
      </div>
    </div>
  );
};

const SmallImages = ({ images, currIndex, setCurrIndex }) => {
  return (
    <div className='thumbnail-container small-images-row'>
      {images.map((el,index) =>(
        <div
          key={index}
          className={`thumbnail ${currIndex === index ? 'active' : ''}`}
          onMouseEnter={() => setCurrIndex(index)}>
          <img src={`../images/${el}`} alt="" />
        {console.log(el)}
        </div>
      ))}
    </div>
  );
};

export default SliderPr;