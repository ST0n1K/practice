import React from 'react';
import Hero from '../views/Hero';
import Banner from '../views/Banner';
import {Link} from 'react-router-dom';

export default function Error() {
    return (
        <Hero hero="defaultHero">
            <Banner title="Page not found" subtitle="Get back to Rooms page">
                <Link to="/" className="btn-primary">Back</Link>
            </Banner>
        </Hero>
    )
}
