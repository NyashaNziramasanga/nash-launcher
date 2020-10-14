import React from 'react';

type Content = {
  content: string;
};

export default function Content(props: Content) {
  return (
    <div className='modal-content'>
      <p>{props.content}</p>
    </div>
  );
}
