import React, { Component } from "react";
import { useDispatch, useSelector } from "react-redux";
import Slider from "react-slick";
import { SET_PHIM_DANG_CHIEU, SET_PHIM_SAP_CHIEU } from "../../Redux/Types/MovieManageType";
import Flip_Film from "../film/flip-film/Flip_Film";
import styleSlick from './MultipleRowSlick.module.css'
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} ${styleSlick['slick-next']}`}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} ${styleSlick['slick-prev']}`}
      style={{ ...style, display: "block"  }}
      onClick={onClick}
    />
  );
}




function MultipleRowSlick(props) {

   const dispatch = useDispatch();

  const renderFilm = () =>{
      return props.arrFilm.slice(0,12).map((item,i) =>{
        return <div key={i}>
          <Flip_Film item={item} />
        </div>
      })
    }


  
    const settings = {
      className: "center variable-width",
      centerMode: true,
      infinite: true,
      centerPadding: "60px",
      slidesToShow: 2,
      speed: 500,
      rows: 2,
      slidesPerRow: 2,
      variableWidth: true,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />
    };

    const {dangChieu,sapChieu} = useSelector(state => state.MovieManageReducer);

    let activeDangChieu = dangChieu ? 'active-film' : 'non-active-film';
    let activeSapChieu = sapChieu ? 'active-film' : 'non-active-film';
    console.log(activeDangChieu);

    return (
      <div>
        <button type="button" className={`${styleSlick[activeDangChieu]} px-8 py-3 font-semibold rounded bg-gray-800 text-white mr-2`}
        onClick={() =>{
          dispatch({
            type : SET_PHIM_DANG_CHIEU
          })
        }}
        >Đang Chiếu</button>
        <button type="button" className={`px-8 py-3 font-semibold border rounded ${styleSlick[activeSapChieu]}`}
        onClick={() =>{
          dispatch({
            type : SET_PHIM_SAP_CHIEU
          })
        }}
        >Sắp Chiếu</button>
        <Slider {...settings}>
          {renderFilm()}
          {renderFilm()}
          {renderFilm()}
          {renderFilm()}
          {renderFilm()}
          {renderFilm()}
          {renderFilm()}
          {renderFilm()}
        
          
         
        </Slider>
      </div>
    );
  
}
export default MultipleRowSlick;