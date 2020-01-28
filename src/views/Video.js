import React from 'react';
import video from '../images/video.mp4';
import Title from './Title';

export default function Video() {
    return (
        <div className="video-section">
            <Title title="Room tour" />
            <video id="background-video" loop autoPlay muted>
                <source src={video} type="video/mp4" />
            </video>
        </div>
    )
}
