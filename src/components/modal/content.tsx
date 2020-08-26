import React from 'react';

interface IContent {
  content: string;
}

export default function Content(props: IContent) {
  return (
    <div className='modal-content'>
      <p>{props.content}</p>
    </div>
  );
}
