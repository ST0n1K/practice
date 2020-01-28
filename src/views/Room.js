import React from 'react';
import {Link} from 'react-router-dom';

export default function Room({room}) {
    const { name, slug, images, price } = room;
    return (
        <article className="room">
            <div className="img-container">
                <img src={images[0]} alt={name} />
                <div className="price-top">
                    <h6>${price}</h6>
                    <p>/night</p>
                </div>
                <Link to={`/rooms/${slug}`} className="btn-primary room-link">
                    Visit
                </Link>
                <p className="room-info">{name}</p>
            </div>
        </article>
    )
}
