import React from 'react';
import Profile from '../components/Profile';

const ProfilePage = () => {
  return (
    <div className="p-4">
      <h1 className="mb-4 text-3xl font-bold">My Profile</h1>
      <Profile />
    </div>
  );
};

export default ProfilePage;