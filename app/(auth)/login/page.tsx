"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { loginUser } from "./api";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const handleLogin = async () => {
    try {
      setLoading(true);

      const data = await loginUser({
        email,
        password,
      });

      // store token
      localStorage.setItem("token", data.token);

      router.push("/dashboard");
    } catch (err) {
      alert("Invalid credentials");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black px-4">
      <div className="w-full max-w-md bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl p-8">
        {/* Header */}
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold text-white">CMS Admin</h1>
          <p className="text-gray-300 text-sm mt-1">
            Login to manage your portfolio
          </p>
        </div>

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
          onClick={handleLogin}
          disabled={loading}
          className="w-full py-3 rounded-lg font-semibold bg-blue-600 hover:bg-blue-700 transition-all disabled:opacity-50"
        >
          {loading ? "Logging in..." : "Login"}
        </button>

        {/* Footer */}
        <p className="text-center text-gray-400 text-xs mt-6">
          Built with Next.js + Node CMS
        </p>
      </div>
    </div>
  );
}
