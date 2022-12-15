import { useSwiper } from "swiper/react";
import sliderArrow from "../../assets/sliderArrow.png";

const SwiperArrow = ({ direction }) => {
  const swiper = useSwiper();
  const handleClickNext = () => {
    swiper.slideNext();
  };
  const handleClickPrev = () => {
    swiper.slidePrev();
  };
  return (
    <div
      className={`${direction === "right" ? "prevArrow" : "nextArrow"}`}
      onClick={direction === "right" ? handleClickPrev : handleClickNext}
    >
      <img src={sliderArrow} alt="slider arrow" />
    </div>
  );
};

export default SwiperArrow;
