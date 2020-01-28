import React from 'react';
import Hero from '../views/Hero';
import Banner from '../views/Banner';
import {Link} from 'react-router-dom';
import Service from '../views/Service';
import BestPriceRooms from '../views/BestPriceRooms';
import Video from '../views/Video';

export default function Home() {
    return (
        <>
        <Hero hero="defaultHero">
        <Banner title="Luxury rooms" subtitle="Starts from 100$">
                <Link to="/rooms" className="btn-primary">Book now!</Link>
            </Banner>
        </Hero>
        <Service />
        <BestPriceRooms />
        <Video />
        </>
    );
}
