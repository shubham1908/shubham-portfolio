import { useEffect, useRef, useState } from "react";

interface UseInfiniteCarouselProps {
  length: number;              // number of unique slides
  slideWidth?: number;         // % width of each slide
  transitionTime?: number;     // ms
  autoScrollInterval?: number; // ms
}

export const useInfiniteCarousel = ({
  length,
  slideWidth = 80,
  transitionTime = 700,
  autoScrollInterval = 3000,
}: UseInfiniteCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(1); // start at first real slide
  const [hovering, setHovering] = useState(false);

  const sliderRef = useRef<HTMLDivElement>(null);
  const isTransitioning = useRef(false);

  const sideWidth = (100 - slideWidth) / 2;

  // Auto-scroll
  useEffect(() => {
    if (hovering) return;
    const interval = setInterval(() => {
      if (!isTransitioning.current) {
        goNext();
      }
    }, autoScrollInterval);
    return () => clearInterval(interval);
  }, [hovering, autoScrollInterval]);

  // Handle transition
  useEffect(() => {
    if (!sliderRef.current) return;

    isTransitioning.current = true;
    sliderRef.current.style.transition = `transform ${transitionTime}ms ease-in-out`;
    sliderRef.current.style.transform = `translateX(-${currentIndex * slideWidth - sideWidth
      }%)`;

    const timer = setTimeout(() => {
      if (!sliderRef.current) return;

      // Jump logic (seamless because of clones)
      if (currentIndex === length + 1) {
        sliderRef.current.style.transition = "none";
        setCurrentIndex(1); // back to first real slide
        sliderRef.current.style.transform = `translateX(-${1 * slideWidth - sideWidth
          }%)`;
      } else if (currentIndex === 0) {
        sliderRef.current.style.transition = "none";
        setCurrentIndex(length); // back to last real slide
        sliderRef.current.style.transform = `translateX(-${length * slideWidth - sideWidth
          }%)`;
      }

      isTransitioning.current = false;
    }, transitionTime);

    return () => clearTimeout(timer);
  }, [currentIndex, slideWidth, sideWidth, length, transitionTime]);

  const goNext = () => {
    if (!isTransitioning.current) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const goPrev = () => {
    if (!isTransitioning.current) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  const goToSlide = (i: number) => {
    if (!isTransitioning.current) {
      setCurrentIndex(i + 1); // offset by 1 because of leading clone
    }
  };

  const getCurrentProjectIndex = () => {
    if (currentIndex === 0) return length - 1;
    if (currentIndex === length + 1) return 0;
    return currentIndex - 1;
  };

  return {
    sliderRef,
    currentIndex,
    goNext,
    goPrev,
    goToSlide,
    getCurrentProjectIndex,
    setHovering,
    slideWidth,
  };
};
