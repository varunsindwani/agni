import React from 'react';
import PropTypes from 'prop-types';

import Header from './Header';
import ToolBar from '../components/ToolBar'

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
        <Header/>
        <main className="flex flex-col flex-1 md:justify-center max-w-4xl mx-auto py-4 w-full">
            {children}
        </main>
        <ToolBar />
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
