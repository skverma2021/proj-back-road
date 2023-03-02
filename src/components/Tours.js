import React from 'react';
import Title from './Title';
import { tourDetails } from '../data';
import Tour from './Tour';

const Tours = () => {
  return (
    <section className='section' id='tours'>
      <Title startWith='featured' endWith='tours' />
      <div className='section-center featured-center'>
        {tourDetails.map((t) => {
          return <Tour {...t} />;
        })}
      </div>
    </section>
  );
};

export default Tours;
