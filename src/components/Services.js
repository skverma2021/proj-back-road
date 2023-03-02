import React from 'react';
import Title from './Title';
import { serviceDetails } from '../data';
import Service from './Service';

const Services = () => {
  return (
    <section className='section services' id='services'>
      <Title startWith='our' endWith='services' />
      <div className='section-center services-center'>
        {serviceDetails.map((t) => {
          return <Service {...t} />;
        })}
      </div>
    </section>
  );
};

export default Services;
