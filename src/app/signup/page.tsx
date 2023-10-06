"use client";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";
import { axios } from "axios";


function Signup() {
  const [user, setUser] = React.useState({
    email: '',
    password: '',
    username: '',
  });

  const onSignup = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/users/signup", user);
      console.log(res);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex flex-col min-h-screen justify-center items-center bg-gray-200">
      <div className="bg-white shadow-md rounded-md p-4 md:p-8 w-full max-w-md">
        <h1 className="text-2xl text-center font-bold text-gray-900 mb-6">Signup</h1>

        <form onSubmit={onSignup} className="flex flex-col gap-4">
          <input
            type="email"
            className="rounded-md border-2 border-gray-400 py-2 px-3"
            placeholder="Email"
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
          />
          <input
            type="password"
            className="rounded-md border-2 border-gray-400 py-2 px-3"
            placeholder="Password"
            value={user.password}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
          />
          <input
            type="text"
            className="rounded-md border-2 border-gray-400 py-2 px-3"
            placeholder="Username"
            value={user.username}
            onChange={(e) => setUser({ ...user, username: e.target.value })}
          />
          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-blue-500 rounded-md py-2 px-4 text-white hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-400"
            >
              Signup
            </button>
          </div>
        </form>
        <div className="mt-4 text-center">
          <span className="text-gray-500">Already have an account? </span>
          <Link href="/login">
            <div className="text-blue-500 hover:underline ">Sign in</div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Signup;
