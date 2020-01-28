import React, { Component } from 'react';
import Banner from '../views/Banner';
import {Link} from 'react-router-dom';
import {RoomContext} from '../Context';
import StylingHero from '../views/StylingHero';

export default class SingleRoom extends Component {
    constructor(props) {
        super(props);
        console.log(this.props);
        this.state = {
            roomName: this.props.match.params.roomName
        }
    }

    static contextType = RoomContext;

    render() {
        const {getRoom} = this.context;
        const roomN = getRoom(this.state.roomName);
        console.log(roomN);
        if(!roomN) {
            return (
                <div className="error">
                    <h3>There is no room found</h3>
                    <Link to="/rooms" className="btn-primary">
                        To rooms
                    </Link>
                </div>
            )
        }
        const {name, price, size, capacity, pets, breakfast, description, extras, images} = roomN;
        return (
            <>
            <StylingHero img={images[0]}>
                <Banner title={`${name} room`}>
                    <Link to="/rooms" className="btn-primary">
                        To rooms
                    </Link>
                </Banner>
            </StylingHero>

            {/* <div className="slider">
                <div className="slide" style={{backgroundImage: `url(${images[0]})`}}>
                </div>
                <div className="slide" style={{backgroundImage: `url(${images[1]})`}}>
                </div>
                <div className="slide" style={{backgroundImage: `url(${images[2]})`}}>
                </div>
                <div className="slide" style={{backgroundImage: `url(${images[3]})`}}>
                </div>
            </div> */}

            <div className="single-room">
                <div className="">
                    <div className="carousel-wrapper">
                        <span id="target-item-1"></span>
                        <span id="target-item-2"></span>
                        <span id="target-item-3"></span>
                        <div className="carousel-item item-1" style={{backgroundImage: `url(${images[1]})`}}>
                            <a className="arrow arrow-prev" href="#target-item-3"></a>
                            <a className="arrow arrow-next" href="#target-item-2"></a>
                        </div>
                        <div className="carousel-item item-2 light" style={{backgroundImage: `url(${images[2]})`}}>
                            <a className="arrow arrow-prev" href="#target-item-1"></a>
                            <a className="arrow arrow-next" href="#target-item-3"></a>
                        </div>
                        <div className="carousel-item item-3" style={{backgroundImage: `url(${images[3]})`}}>
                            <a className="arrow arrow-prev" href="#target-item-2"></a>
                            <a className="arrow arrow-next" href="#target-item-1"></a>
                        </div>
                    </div>
                </div>
                <div className="single-room-info">
                    <article className="desc">
                        <h3>Details</h3>
                        <p>{description}</p>
                    </article>
                    <article className="info">
                        <h3>Info</h3>
                        <h6>Price: ${price}</h6>
                        <h6>Size: {size} m<sup>2</sup></h6>
                        <h6>Capacity: {capacity}</h6>
                        <h6>{pets ? 'Pets allowed' : 'No pets allowed'}</h6>
                        <h6>{breakfast ? 'Breakfast included' : 'Breakfast not included'}</h6>
                    </article>
                </div>
            </div>
            <div className="room-extras">
                    <h3>Additions</h3>
                    <ul className="extras">
                        {extras.map((item, index) => {
                            return <li key={index}>- {item}</li>
                        })}
                    </ul>
            </div>
            </>
        )
    }
}
