import React from 'react';

const UserProfile = ({params}: {params: {id: string}}) => {

  const user = {
    name: 'John Doe',
    username: params.id,
    email: 'johndoe@example.com',
    bio: 'Web Developer | UI/UX Enthusiast',
    avatarUrl: 'https://example.com/avatar.jpg',

  };

  return (
    <div className="min-h-screen bg-gray-100 py-6">
      <div className="max-w-screen-lg mx-auto p-6">
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center">
            <img
              src={user.avatarUrl}
              alt={user.name}
              className="w-16 h-16 rounded-full border-4 border-white"
            />
            <div className="ml-4">
              <h1 className="text-2xl font-semibold text-gray-800">{user.name}</h1>
              <p className="text-gray-600">@{user.username}</p>
            </div>
          </div>
          <div className="mt-6">
            <h2 className="text-xl font-semibold text-gray-800">About Me</h2>
            <p className="mt-2 text-gray-600">{user.bio}</p>
          </div>
          <div className="mt-6">
            <h2 className="text-xl font-semibold text-gray-800">Contact Information</h2>
            <ul className="mt-2 text-gray-600">
              <li>Email: {user.email}</li>
              {/* Add more contact information as needed */}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;