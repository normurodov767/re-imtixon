"use client";
import React, { useEffect } from "react"; // добавляем useEffect
import { useRouter } from "next/navigation";

function Page() {
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== "undefined" && localStorage.getItem("token")) {
      router.push("/dashboard");
    }
  }, [router]); // useEffect следит за router

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-md p-6 rounded-lg text-center w-80">
        <h1 className="text-2xl font-bold text-blue-600 mb-4">Home Page</h1>
        <button
          onClick={() => router.push("/login")}
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition mb-3"
        >
          Login
        </button>
        <button
          onClick={() => router.push("/register")}
          className="w-full bg-gray-600 text-white py-2 rounded-md hover:bg-gray-700 transition"
        >
          Register
        </button>
      </div>
    </div>
  );
}

export default Page;

