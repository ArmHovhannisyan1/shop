import { memo, useState } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import './filter.css';
import { useDispatch, useSelector } from "react-redux";
import { setPriceFilter } from "../../redux/filter/actions";

const SliderFilter = ({maxPrice,minPrice}) => {
  const dispatch = useDispatch();
  const priceFilter = useSelector(state => state.filter.priceFilter)
console.log(priceFilter[0])
// console.log(minPrice)
// console.log(priceFilter[1])
// console.log(maxPrice)
  const handleSliderChange = (values) => {
    dispatch(setPriceFilter(values));
  };

  return (
    <div className="slider-filter w20 wrapper">
      <h4 className="slider-label">Price Range</h4>
      <div className="slider-container">
        <div className="slider-values">
          <span>${priceFilter[0]}</span>-
          <span>${priceFilter[1]}</span>
        </div>
        <Slider
          min={minPrice}
          max={maxPrice}
          range
          value={priceFilter}
          onChange={handleSliderChange}
          allowCross={false}
        />
      </div>
      {/* <div className="slider-filter-btn">
        <button className="btn" type="button">
            Filter
        </button>
      </div> */}
    </div>
  );
};

export default memo(SliderFilter);