import React from 'react';
import PropTypes from 'prop-types';

const Header = () => (
  <header className="bg-red-600 max-w-full p-4">
    <nav>
      <h1 className="text-white text-xl font-bold">
        Agni
      </h1>
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
