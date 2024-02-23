import FilterItem from "./FilterItem";
import './filter.css';
import SliderFilter from "./SliderFilter"; // Import the new SliderFilter component
import { useEffect, useRef, useState } from "react";

export default function Filter({ showFilter,hide,maxPrice,minPrice }) {
    const filter = useRef();
    useEffect(() => {
        const handler = (e) => {
            if (!filter.current.contains(e.target)) {
                hide()
            }
        }
        window.addEventListener('mousedown',handler)
        return () => {
            window.removeEventListener('mousedown', handler)
        }
    }, [showFilter]);
    return (
        <div className={`filter-item ${showFilter ? 'visible' : ''}`} ref={filter}>
            <div className="filter-container">
                <div className="row f-jBetween">
                    <FilterItem
                        title={"Filter By Categories"}
                        items={['Bedroom', 'Sofa', 'Decor', 'Chair', 'Kitchen', 'Lamp', 'Lighting', 'Living Room', 'Outdoor', 'Table']}
                        filterType={'category'}
                    />
                    <FilterItem
                        title={"Filter By Choose Color"}
                        items={['Blue', 'Brown', 'Beige', 'Black', 'White', 'Orange', 'Gold', 'Gray']}
                        filterType={'color'}
                    />
                    <FilterItem
                        title={"Filter By Brand"}
                        items={['Clements Ribeiro', 'Dominique Aurientis', 'Matthew Christopher', 'John Galliano', 'Jean-Paul Gaultier', 'Chrome Hearts', 'Georgine']}
                        filterType={'brand'}
                    />
                    <SliderFilter minPrice={minPrice}  maxPrice={maxPrice} />
                </div>
            </div>
        </div>
    );
}