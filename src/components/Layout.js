import React from 'react';
import PropTypes from 'prop-types';

import Header from './Header';

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
        <Header/>
        <main className="flex flex-col flex-1 md:justify-center max-w-4xl mx-auto py-4 w-full">
            {children}
        </main>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
