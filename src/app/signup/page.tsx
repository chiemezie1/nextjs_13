"use client";
import Link from 'next/link';
import React from 'react'
import { useRouter } from 'next/navigation';
import { axios } from 'axios';


export default function SignupPage() {
  const [user, setUser] = React.useState({
    email: '',
    password: '',
    username: '',
  }); 

  const onSignup = async () => {
    const res = await axios.post('/api/users/signup', user);
    console.log(res);
  }

  return (
    <div>
      <div>signup</div>
    </div>
  )
}


