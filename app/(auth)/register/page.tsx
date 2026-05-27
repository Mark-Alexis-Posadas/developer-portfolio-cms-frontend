"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { registerUser } from "./api";

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const handleRegister = async () => {
    try {
      setLoading(true);

      await registerUser({
        name,
        email,
        password,
      });

      // after register → go login
      router.push("/login");
    } catch (err) {
      alert("Registration failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black px-4">
      <div className="w-full max-w-md bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl p-8">
        {/* Header */}
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold text-white">
            Create Admin Account
          </h1>
          <p className="text-gray-300 text-sm mt-1">
            Register to manage your CMS
          </p>
        </div>

        {/* Name */}
        <input
          className="w-full mb-3 p-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
        />

        {/* Email */}
        <input
          className="w-full mb-3 p-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />

        {/* Password */}
        <input
          type="password"
          className="w-full mb-5 p-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />

        {/* Button */}
        <button
          onClick={handleRegister}
          disabled={loading}
          className="w-full py-3 rounded-lg font-semibold bg-green-600 hover:bg-green-700 transition-all disabled:opacity-50"
        >
          {loading ? "Creating account..." : "Register"}
        </button>

        {/* Footer */}
        <p className="text-center text-gray-400 text-xs mt-6">
          Already have an account? <span className="text-blue-400">Login</span>
        </p>
      </div>
    </div>
  );
}
