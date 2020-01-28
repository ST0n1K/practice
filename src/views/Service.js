import React, { Component } from 'react';
import Title from './Title';
import { FaBicycle, FaBus, FaHorse, FaPizzaSlice} from 'react-icons/fa';

export default class Service extends Component {
    state = {
        services: [
            {
                icon: <FaBicycle />,
                title: 'Bike Rides',
                description: 'Every day you can grab one of the bicycles at the reception desc absolutely FOR FREE.'
            },
            {
                icon: <FaHorse />,
                title: 'Horse Riding',
                description: 'Every Monday, Wednesday and Friday you can order a horse riding on the reception desc.'
            },
            {
                icon: <FaBus />,
                title: 'Free Bus',
                description: 'We have our own bus which departs from the main enter each hour towards the beach.'
            },
            {
                icon: <FaPizzaSlice />,
                title: 'All Inclusive',
                description: 'You can take all food and drinks absolutely for free in our restaurant.'
            }
        ]
    }
    render() {
        return (
            <section className="services">
                <Title title="What We Provide"></Title>
                <div className="services-center">
                    {this.state.services.map((item, index) => {
                        return (
                            <article key={index} className="service">
                                <span>{item.icon}</span>
                                <h6>{item.title}</h6>
                                <p>{item.description}</p>
                            </article>
                        )
                    })}
                </div>
            </section>
        )
    }
}
