import { useState } from "react";

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((a) => (a === 0 ? images.length - 1 : a - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((a) => (a === images.length - 1 ? 0 : a + 1));
  };

  return (
    <div className="relative w-full h-[300px]">
      <img
        src={images[currentIndex]}
        alt={`Slide ${currentIndex}`}
        className="w-full h-full object-cover"
      />

      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white text-3xl"
      >
        ❮
      </button>

      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white text-3xl"
      >
        ❯
      </button>
    </div>
  );
};

export default Carousel;
