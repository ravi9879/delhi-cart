import React from 'react'

function Profile() {
  // Example user data (replace with real data as needed)
  const user = {
    name: "Ravi Prasad Gupta",
    email: "ravi@example.com",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    role: "Customer",
    joined: "January 2024"
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 py-10">
      <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md flex flex-col items-center space-y-6">
        <img
          src={user.avatar}
          alt="Profile"
          className="w-28 h-28 rounded-full border-4 border-purple-300 shadow"
        />
        <h2 className="text-2xl font-bold text-blue-700">{user.name}</h2>
        <p className="text-gray-600 text-lg">{user.email}</p>
        <div className="flex flex-col items-center space-y-1 w-full">
          <span className="inline-block bg-purple-100 text-purple-700 px-4 py-1 rounded-full font-semibold">
            {user.role}
          </span>
          <span className="text-gray-500 text-sm">Joined: {user.joined}</span>
        </div>
        <button className="mt-4 px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg font-bold shadow hover:from-blue-600 hover:to-purple-600 transition">
          Edit Profile
        </button>
      </div>
    </div>
  )
}

export default Profile ;  