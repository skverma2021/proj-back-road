import React from 'react';

function Service({ iconClass, serviceText, serviceDesc }) {
  return (
    <article className='service'>
      <span className='service-icon'>
        <i className={iconClass}></i>
      </span>
      <div className='service-info'>
        <h4 className='service-title'>{serviceText}</h4>
        <p className='service-text'>{serviceDesc}</p>
      </div>
    </article>
  );
}

export default Service;
