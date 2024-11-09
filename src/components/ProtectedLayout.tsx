import React from 'react';
import Header from './Layouts/Admin/Header'
import SubHeader from './Layouts/Admin/SubHeader';

const ProtectedLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-full">

      <Header />
      <div className="py-10">

        <SubHeader />
     
        <main>
          <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">{children}</div>           
        </main>

      </div>
    </div>
  );
};

export default ProtectedLayout;
