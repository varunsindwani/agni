import React from 'react';
import PropTypes from 'prop-types';

const { shell } = window.require('electron')

const Header = () => (
  <header className="bg-red-600 max-w-full p-2 flex">
    <div className="w-8 mx-2">
      <a href={shell.openExternal('https://github.com/varunsindwani/agni')}>
        <img src={require('../assets/logo/agni.png')} alt="agni" />
      </a>
    </div>
    <nav className="ml-auto flex">
      <button className="w-5 mx-4 ">
        <img src={require('../assets/icons/new.png')} alt="new file" className="justify-center"/>
      </button>
      <button className="w-5 mx-4 my-auto">
        <img src={require('../assets/icons/load.png')}  alt="load file" className="justify-center"/>
      </button>
      <button className="w-5 mx-4">
        <img src={require('../assets/icons/save.png')}  alt="save file" className="justify-center"/>
      </button>
      <button className="w-5 mx-4">
        <img src={require('../assets/icons/settings.png')}  alt="settings" className="justify-center"/>
      </button>
    </nav>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: '',
};

export default Header;
