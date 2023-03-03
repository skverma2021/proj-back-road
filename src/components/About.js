import aboutImage from '../images/about.jpeg';
import React from 'react';
import Title from './Title';

const About = () => {
  return (
    <section className='section' id='about'>
      <Title startWith='About' endWith='us' />
      <div className='section-center about-center'>
        <div className='about-img'>
          <img src={aboutImage} className='about-photo' alt='awesome beach' />
        </div>
        <article className='about-info'>
          <h3>Explore the difference</h3>
          <p>
            Hi This is a new react app just for exploring gitHub and Netlify
          </p>
          <p>
            Hi This is a new react app just for exploring gitHub and Netlify
          </p>
          <p>Thanks for your visit</p>
          <a href='#about' className='btn'>
            read more
          </a>
        </article>
      </div>
    </section>
  );
};

export default About;
