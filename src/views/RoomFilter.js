import React from 'react';
import {useContext} from 'react';
import {RoomContext} from '../Context';
import Title from '../views/Title';

export default function RoomFilter() {
    const context = useContext(RoomContext);
    console.log(context);
    const {handleChange, type, capacity, price, minPrice, maxPrice, minSize, maxSize, pets, breakfast} = context;
    return (
        <section className="filter-container">
            <Title title="What We Provide" />
            <form className="filter-form">
                {/* Type */}
                <div className="form-group">
                    <label forhtml="type">Room type:</label>
                    <select name="type" id="type" value={type} className="form-control" onChange={handleChange}>
                        <option value="all" id="0">All</option>
                        <option value="single" id="1">Single</option>
                        <option value="double" id="2">Double</option>
                        <option value="family" id="3">Family</option>
                        <option value="presidential" id="4">Presidential</option>
                    </select>
                </div>
                {/* Capacity */}
                <div className="form-group">
                    <label forhtml="capacity">Visitors:</label>
                    <select name="capacity" id="capacity" value={capacity} className="form-control" onChange={handleChange}>
                        <option value="1" id="0">1 Person</option>
                        <option value="2" id="1">2 People</option>
                        <option value="3" id="2">3 People</option>
                        <option value="4" id="3">4 People</option>
                        <option value="5" id="4">5 People</option>
                        <option value="6" id="5">6 People</option>
                        <option value="7" id="6">7 People</option>
                        <option value="8" id="7">8 People</option>
                        <option value="9" id="8">9 People</option>
                        <option value="10" id="9">10 People</option>
                    </select>
                </div>
                {/* Price */}
                <div className="form-group">
                    <label htmlFor="price">Room price: ${price}</label>
                    <input type="range" name="price" min={minPrice} max={maxPrice} id="price" value={price} onChange={handleChange} className="form-control"></input>
                </div>
                {/* Size */}
                <div className="form-group">
                    <label forhtml="size">Size:</label>
                    <div className="size-inputs">
                        <input type="number" name="minSize" id="size" value={minSize} onChange={handleChange} className="size-input" />
                        <input type="number" name="maxSize" id="size" value={maxSize} onChange={handleChange} className="size-input" />
                    </div>
                </div>
                {/* Breakfast and pets */}
                <div className="form-group">
                    <div className="single-extra">
                        <input type="checkbox" name="breakfast" id="breakfast" checked={breakfast} onChange={handleChange}></input>
                        <label htmlFor="breakfast">Breakfast</label>
                    </div>
                    <div className="single-extra">
                        <input type="checkbox" name="pets" id="pets" checked={pets} onChange={handleChange}></input>
                        <label htmlFor="pets">Pets Allowed</label>
                    </div>
                </div>
            </form>
        </section>
    )
}
