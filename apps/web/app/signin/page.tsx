'use client'

import React, { useState } from 'react';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import axios from 'axios'
import { signinFormSchema } from '../api/signin/route';
import { useRouter } from 'next/router';


const SignupForm = () => {
  const navigator = useRouter()
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [errMsg, setErrMsg] = useState("")

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
    // do zod validation
    if(!signinFormSchema.safeParse(formData).success){
      setError("Please put valid inputs in the input fields")
    }
    // send to the backend
    const response = await axios.post('http://localhost:3000/api/signup')
    // check if it was a success or not
    if (!response.data.success){
      setError(response.data.msg)
    }
    // if success, redirect to the dashboard
    else {
      navigator.push("/dashboard")
    }
    // Add form submission logic here
    console.log('Form submitted:', formData);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Signup</h2>
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
    </form>
  );
};

export default SignupForm;