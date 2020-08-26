import React from 'react';

interface IHeader {
  imgSrc: string;
  imgAlt: string;
  version: string;
  imgText: string;
}

export default function Header(props: IHeader) {
  return (
    <div className='modal-header'>
      <h1 className='logo'>
        <img src={props.imgSrc} alt={props.imgAlt} className='logo-icon' />{' '}
        {props.imgText} <span className='version'>({props.version})</span>
      </h1>
    </div>
  );
}
