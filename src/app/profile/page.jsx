"use client";

import { useState } from "react";
import Image from "next/image";
import { FiLogOut, FiEdit2, FiSave } from "react-icons/fi";
import cardImageNotFound from "@/assets/cardImageNotFound.png";

const MyProfilePage = () => {
  // Placeholder user data
  const [user, setUser] = useState({
    name: "John Doe",
    email: "john.doe@example.com",
    avatar: cardImageNotFound,
  });

  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);

  const handleSave = () => {
    setUser({
      ...user,
      name: name,
      email: email,
    });
    setIsEditing(false);
  };

  const handleLogout = () => {
    // Add logout logic later
    console.log("Logging out...");
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-2xl">
      <h1 className="text-3xl font-bold mb-8">My Profile</h1>

      <div className="bg-white rounded-lg shadow p-6">
        {/* Avatar */}
        <div className="flex flex-col items-center mb-6">
          <div className="w-24 h-24 rounded-full overflow-hidden mb-4">
            <Image
              src={user.avatar}
              alt={user.name}
              width={96}
              height={96}
              className="w-full h-full object-cover"
            />
          </div>
          <h2 className="text-xl font-semibold">{user.name}</h2>
          <p className="text-gray-500">{user.email}</p>
        </div>

        {/* Profile Info */}
        <div className="space-y-4">
          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Name
            </label>
            {isEditing ? (
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full p-2 border rounded-md"
              />
            ) : (
              <p className="p-2 bg-gray-50 rounded-md">{user.name}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            {isEditing ? (
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-2 border rounded-md"
              />
            ) : (
              <p className="p-2 bg-gray-50 rounded-md">{user.email}</p>
            )}
          </div>

          {/* Buttons */}
          <div className="flex gap-2 pt-4">
            {isEditing ? (
              <>
                <button
                  onClick={handleSave}
                  className="px-4 py-2 bg-primary text-white rounded-md flex items-center gap-2"
                >
                  <FiSave /> Save
                </button>
                <button
                  onClick={() => {
                    setIsEditing(false);
                    setName(user.name);
                    setEmail(user.email);
                  }}
                  className="px-4 py-2 bg-gray-200 rounded-md"
                >
                  Cancel
                </button>
              </>
            ) : (
              <button
                onClick={() => setIsEditing(true)}
                className="px-4 py-2 bg-primary text-white rounded-md flex items-center gap-2"
              >
                <FiEdit2 /> Edit Profile
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Logout */}
      <button
        onClick={handleLogout}
        className="mt-6 px-4 py-2 bg-red-500 text-white rounded-md flex items-center gap-2"
      >
        <FiLogOut /> Logout
      </button>
    </div>
  );
};

export default MyProfilePage;