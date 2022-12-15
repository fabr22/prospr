/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

import "./competition.css";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import winnerPhoto from "../../assets/winnerPhoto.jpg";
import sliderImg from "../../assets/sliderImg.jpg";

import SliderArrow from "./swiperArrows";

const Competititon = () => {
  return (
    <div className="competitionWrapper">
      <div className="competitionSlider">
        <Swiper>
          <SwiperSlide>
            <img src={sliderImg} alt="imageSlider" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={sliderImg} alt="imageSlider" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={sliderImg} alt="imageSlider" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={sliderImg} alt="imageSlider" />
          </SwiperSlide>
          <SliderArrow direction={'left'}/>
          <SliderArrow direction={'right'} />
        </Swiper>
      </div>
      <div className="competitionDescription">
        <div className="competitionName">Won on ...</div>
        <div className="competitionTitle">Title of Competition</div>
        <div className="competitionWinner">Winners Name & Ticket Number</div>
        <div className="competitonInfo">
          Information about how many ticket entries there were and what the
          tickets were bought at and summary from new winner? Lorem ipsum dolor
          sit amet consetetur
        </div>
        <div className="buttons">
          <button className="watchDrawButton">Watch Draw</button>
          <button className="downloadButton">Download Draw List</button>
        </div>
      </div>
      <div className="winnerPhotoWrapper">
        <img
          src={winnerPhoto}
          alt="winnerPhoto"
          width={139}
          height={139}
          className="winnerPhoto"
        ></img>
      </div>
    </div>
  );
};

export default Competititon;
