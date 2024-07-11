'use client'

import React, { useState } from 'react';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import axios from 'axios'

const SignupForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // check if the password and confirm password are the same
    // do zod validation
    // send to the backend
    // check if it was a success or not
    // if success, redirect to the dashboard
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