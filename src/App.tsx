import React from 'react';
import './App.scss';
import NashLogo from './assets/images/logo.png';
import Content from './components/modal/content';
import Header from './components/modal/header';
import Icon from './components/modal/icon';
import Data from './data.json';

export default function App() {
  return (
    <div>
      <Header
        imgSrc={NashLogo}
        imgAlt={'Nash Launcher'}
        imgText={'Nash Launcher'}
        version={'1.0.0'}
      />
      <Content content={'Quick link access for Nash content'} />
      <div className='modal-icons'>
        <div className='flex-container'>
          <Icon url={Data.facebook.url} icon={Data.facebook.icon} />
          <Icon url={Data.github.url} icon={Data.github.icon} />
          <Icon url={Data.instagram.url} icon={Data.instagram.icon} />
          <Icon url={Data.linkedin.url} icon={Data.linkedin.icon} />
          <Icon url={Data.twitter.url} icon={Data.twitter.icon} />
          <Icon url={Data.website.url} icon={Data.website.icon} />
        </div>
      </div>
    </div>
  );
}
