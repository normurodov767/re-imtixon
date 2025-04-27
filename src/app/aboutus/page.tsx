'use client';
import useFetch from '@/hooks/useFetch';
import { Book } from '@/interface/books';
import { User } from '@/interface/User';
import React from 'react';

function AboutUs() {
  const { data: books } = useFetch<Book[] | null>('books/books');
  const { data: libraries } = useFetch<User | null>('libraries/libraries');

  const totalBooks = Array.isArray(books) ? books.length : 0;
  const totalLibraries = Array.isArray(libraries) ? libraries.length : 0;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-rose-50 p-6">
      <div className="bg-white p-10 rounded-3xl shadow-xl max-w-3xl text-center border border-rose-100">
        <h1 className="text-4xl font-bold text-rose-500 mb-4">📖 About Us</h1>
        <p className="text-rose-600 text-lg mb-6">
          Welcome to our cozy digital library! We're passionate about making books accessible and enjoyable for everyone 💫
        </p>
        <div className="flex justify-around text-rose-700 text-lg font-medium">
          <div>
            <p className="text-3xl font-bold text-rose-400">{totalBooks}</p>
            <p>Books Available</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-rose-400">{totalLibraries}</p>
            <p>Libraries Connected</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
