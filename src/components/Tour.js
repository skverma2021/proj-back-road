import React from 'react';

function Tour({
  tourImage,
  tourDate,
  tourTitle,
  tourDesc,
  tourFooterIconClass,
  tourFooterIconDesc,
  tourFooterDuration,
  tourFooterRate,
}) {
  return (
    <article className='tour-card'>
      <div className='tour-img-container'>
        <img src={tourImage} className='tour-img' alt='' />
        <p className='tour-date'>{tourDate}</p>
      </div>
      <div className='tour-info'>
        <div className='tour-title'>
          <h4>{tourTitle}</h4>
        </div>
        <p>{tourDesc}</p>
        <div className='tour-footer'>
          <p>
            <span>
              <i className={tourFooterIconClass}></i>
            </span>{' '}
            {tourFooterIconDesc}
          </p>
          <p>{tourFooterDuration}</p>
          <p>{tourFooterRate}</p>
        </div>
      </div>
    </article>
  );
}

export default Tour;
