import React from 'react';

interface SidebarProps {
  children: React.ReactNode;
}

export const Sidebar = ({ children }: SidebarProps) => {
  return (
    <aside className="w-64 h-screen p-4 bg-gray-100">
      {children}
    </aside>
  );
};

export default Sidebar;