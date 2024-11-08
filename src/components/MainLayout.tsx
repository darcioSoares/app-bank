import React from 'react';
import Header from './Layouts/LandPage/Header';
import Footer from './Layouts/LandPage/Footer';

const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <>
      <Header />
      <div className="flex-1 flex flex-col min-h-screen">{children}</div>
      <Footer />
    </>
  );
};

export default MainLayout;
