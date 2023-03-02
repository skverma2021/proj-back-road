import React from 'react';

const Title = ({ startWith, endWith }) => {
  return (
    <div className='section-title'>
      <h2>
        {startWith} <span>{endWith}</span>
      </h2>
    </div>
  );
};

export default Title;
