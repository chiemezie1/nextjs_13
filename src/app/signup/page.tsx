"use client";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";
import { axios } from "axios";

export default function SignupPage() {
  const [user, setUser] = React.useState({
    email: "",
    password: "",
    username: "",
  });

  const onSignup = async () => {
    const res = await axios.post("/api/users/signup", user);
    console.log(res);
  };

  return (
    <div className="flex flex-col min-h-screen justify-center pb-20 items-center bg-gray-200">
      <div className="bg-white shadow-md rounded-md p-4 md:p-8 w-full max-w-md">
        <h1 className="text-2xl font-bold text-center text-gray-900 mb-6">Sign up</h1>

        <form className="flex flex-col gap-4">
          <input
            type="email"
            className="rounded-md border-2 border-gray-400 py-1 px-3"
            placeholder="Email"
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
          />
          <input
            type="password"
            className="rounded-md border-2 border-gray-400 py-1 px-3"
            placeholder="Password"
            value={user.password}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
          />
          <input
            type="text"
            className="rounded-md border-2 border-gray-400 py-1 px-3"
            placeholder="Username"
            value={user.username}
            onChange={(e) => setUser({ ...user, username: e.target.value })}
          />
          <div className="flex justify-end">
            <button
              className="bg-blue-500 rounded-md py-2 px-4 text-white hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-400"
              onClick={onSignup}
            >
              Signup
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
