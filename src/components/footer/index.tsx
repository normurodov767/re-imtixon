'use client';
import React from 'react';
import { FaInstagram, FaTelegramPlane, FaGithub, FaBook, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="w-full bg-zinc-900 text-zinc-300 pt-16 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-10">

        <div>
          <h2 className="text-xl font-bold text-white mb-4">📚 MyLibrary</h2>
          <p className="text-sm text-zinc-400 leading-6">
            Biz — zamonaviy kutubxonamiz, bilimlar, texnologiyalar va odamlarni birlashtiramiz. Bu yerda siz klassikadan tortib yangi kitoblargacha hammasini topasiz.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Navigation</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/aboutus" className="hover:text-white transition">About Us</a></li>
            <li><a href="/books" className="hover:text-white transition">Books</a></li>
            <li><a href="/libraries" className="hover:text-white transition">Libraries</a></li>
            <li><a href="/#" className="hover:text-white transition">FAQ</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Contact</h3>
          <ul className="space-y-3 text-sm text-zinc-400">
            <li className="flex items-center gap-2"><FaPhoneAlt /> +998 90 123-45-67</li>
            <li className="flex items-center gap-2"><FaEnvelope /> support@mylibrary.uz</li>
            <li className="flex items-center gap-2"><FaBook /> Tashkent, Independence St. 10</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Follow Us</h3>
          <div className="flex gap-4 text-2xl text-zinc-400">
            <a href="https://t.me/telegram" target="_blank" className="hover:text-white transition"><FaTelegramPlane /></a>
            <a href="https://instagram.com/instagram" target="_blank" className="hover:text-white transition"><FaInstagram /></a>
            <a href="https://github.com/github" target="_blank" className="hover:text-white transition"><FaGithub /></a>
          </div>
        </div>
      </div>

      <div className="mt-12 text-center text-sm text-zinc-600 border-t border-zinc-800 pt-6">
        © {new Date().getFullYear()} MyLibrary. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
