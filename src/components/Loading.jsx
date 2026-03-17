import React from 'react';

const Loading = ({ text = "Loading..." }) => {
  return (
    <div className='loading-container'>
      <i className='fa fa-spinner fa-4x loading-spinner'></i>
      <p className='loading-text'>{text}</p>
    </div>
  );
};

export default Loading;
