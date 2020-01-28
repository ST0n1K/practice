import React from 'react';
import Hero from '../views/Hero';
import Banner from '../views/Banner';
import {Link} from 'react-router-dom';
import RoomContainer from '../views/RoomContainer';

export const Rooms = () => {
    return (
        <>
        <Hero hero="roomsHero">
            <Banner title="Our Rooms" subtitle="Book rooms from 99$">
                <Link to="/" className="btn-primary">To Home</Link>
            </Banner>
        </Hero>
        <RoomContainer />
        </>
    )
}

export default Rooms;
