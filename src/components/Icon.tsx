import React from 'react';

type Link = {
  url: string;
  icon: string;
};

export default function Icon(props: Link) {
  return (
    <div className='flex'>
      <a href={props.url} rel='noopener noreferrer' target='_blank'>
        <i className={props.icon}></i>
      </a>
    </div>
  );
}
