'use client'

import React, { useState } from 'react';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import axios from 'axios'
import z from "zod"
import {signinFormSchema, signinType } from '@repo/zodtypes/auth'
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const SignupForm = () => {
  const navigator = useRouter()
  const [formData, setFormData] = useState<signinType>({
    email: '',
    password: ''
  });
  const [errMsg, setErrMsg] = useState<string>("")

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const setError = (errMessage: string) => {
    setErrMsg(errMessage)
      setTimeout(() => {
        setErrMsg("")
      }, 5000)
  }
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const form = signinFormSchema.parse(formData);
    if(!false){
      setError("Please put valid inputs in the input fields")
    }
    // send to the backend
    const response = await axios.post('http://localhost:3000/api/signin', form)
    // check if it was a success or not
    if (!response.data.success){
      setError(response.data.msg)
    }
    // if success, redirect to the dashboard
    else {
      navigator.push("/dashboard")
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Signin</h2>
      <div className="mb-4">
        <Label htmlFor="email">Email</Label>
        <Input 
          type="email" 
          id="email" 
          name="email" 
          value={formData.email} 
          onChange={handleChange} 
          required 
        />
      </div>
      <div className="mb-4">
        <Label htmlFor="password">Password</Label>
        <Input 
          type="password" 
          id="password" 
          name="password" 
          value={formData.password} 
          onChange={handleChange} 
          required 
        />
      </div>
      <Button type="submit" className="w-full">Signup</Button>
      <h3 className="mt-2 text-sm text-left">Don't have a account yet? <Link href="signup" className="text-cyan-500">Create your account</Link></h3>
    </form>
  );
};

export default SignupForm;