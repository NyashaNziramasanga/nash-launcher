import React from 'react';
import './App.scss';
import NashLogo from './assets/images/logo.png';

function App() {
  return (
    <div>
      <div className='modal-header'>
        <h1 className='logo'>
          <img src={NashLogo} alt='Nash Launcher' className='logo-icon' /> Nash
          Launcher <span className='version'>(1.0.0)</span>
        </h1>
      </div>
      <div className='modal-content'>
        <p>Quick link access for Nash's content</p>
      </div>
      <div className='modal-icons'>
        <div className='flex-container'>
          <div className='flex'>
            <a href='https://nyashanziramasanga.com/' target='_blank'>
              <i className='fa fa-globe'></i>
            </a>
          </div>
          <div className='flex'>
            <a
              href='https://www.linkedin.com/in/nyasha-nash-nziramasanga-446380116/'
              target='_blank'
            >
              <i className='fa fa-linkedin'></i>
            </a>
          </div>
          <div className='flex'>
            <a href='https://github.com/NyashaNziramasanga' target='_blank'>
              <i className='fa fa-github'></i>
            </a>
          </div>
          <div className='flex'>
            <a href='https://twitter.com/NyashaNziboi' target='_blank'>
              <i className='fa fa-twitter'></i>
            </a>
          </div>
          <div className='flex'>
            <a href='https://www.instagram.com/nyasha_nziboi/' target='_blank'>
              <i className='fa fa-instagram'></i>
            </a>
          </div>
          <div className='flex'>
            <a href='https://www.facebook.com/Nyasha.Nziboi' target='_blank'>
              <i className='fa fa-facebook'></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
