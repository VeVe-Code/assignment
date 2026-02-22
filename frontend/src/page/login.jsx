import React from "react";
import { Mail, Lock } from "lucide-react";
import { FaGoogle } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
function Login() {
  return (
    <div
      className="min-h-screen flex items-center justify-center 
      bg-gradient-to-br from-cyan-400 via-cyan-500 to-cyan-400
      relative overflow-hidden"
    >
      {/* Radial Pattern Overlay */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_white_1px,_transparent_1px)] bg-[length:20px_20px]" />

      {/* Card */}
      <div className="relative w-[460px] px-10 py-12 text-white">
        
        {/* Logo + Title */}
        <div className="flex items-center gap-3 mb-6">
          <div className="text-4xl">⚡</div>
          <div>
            <h1 className="text-2xl font-semibold">
              Create an account
            </h1>
            <p className="text-sm opacity-90">
              Join us and explore new possibilities!
            </p>
          </div>
        </div>

        {/* Form */}
        <form className="space-y-4">
          
          {/* Email */}
          <div className="relative">
            <Mail className="absolute left-3 top-3 text-gray-500" size={18} />
            <input
              type="email"
              placeholder="Email"
              className="w-full pl-10 pr-4 py-2 rounded-md 
              text-black bg-white focus:outline-none 
              focus:ring-2 focus:ring-black"
            />
          </div>

          {/* Password */}
          <div className="relative">
            <Lock className="absolute left-3 top-3 text-gray-500" size={18} />
            <input
              type="password"
              placeholder="Enter Your Password"
              className="w-full pl-10 pr-10 py-2 rounded-md 
              text-black bg-white focus:outline-none 
              focus:ring-2 focus:ring-black"
            />
            <span className="absolute right-3 top-2.5 text-gray-500 cursor-pointer">
              👁
            </span>
          </div>

          {/* Forgot */}
          <div className="text-right text-sm text-white/90 hover:underline cursor-pointer">
            Forgot Password
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-black text-white py-2.5 rounded-md 
            hover:bg-gray-800 transition font-medium"
          >
            Create account
          </button>
        </form>

        {/* Terms */}
        <p className="text-xs text-center mt-4 opacity-90">
          I agree to the Privacy Policy and Terms of Service
        </p>

        {/* Divider */}
        <div className="flex items-center my-5">
          <div className="flex-1 h-px bg-white/50" />
          <span className="px-4 text-sm">OR</span>
          <div className="flex-1 h-px bg-white/50" />
        </div>

        {/* Social Buttons */}
        <div className="flex justify-center items-center gap-6">
          <button className="w-10 h-10 text-black bg-white rounded-full flex items-center justify-center shadow hover:scale-105 transition">
           <FaGoogle />
          </button>

          <button className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center shadow hover:scale-105 transition">
        <FaApple />
          </button>

          <button className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center shadow hover:scale-105 transition">
         <FaFacebookF />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;