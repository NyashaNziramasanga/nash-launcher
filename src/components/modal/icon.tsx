import React from 'react';

interface ILink {
  url: string;
  icon: string;
}

export default function Icon(props: ILink) {
  return (
    <div className='flex'>
      <a href={props.url} rel='noopener noreferrer' target='_blank'>
        <i className={props.icon}></i>
      </a>
    </div>
  );
}
