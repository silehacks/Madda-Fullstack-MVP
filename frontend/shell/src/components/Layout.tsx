import React from 'react';
import Header from './Header';
import { Footer } from 'shared/Footer';
import { Sidebar } from 'shared/Sidebar';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex flex-1">
        <Sidebar>
          <p>Sidebar Content</p>
        </Sidebar>
        <main className="flex-1 p-4">{children}</main>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;