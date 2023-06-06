import React from 'react';
import Link from 'next/link';
import profile from '../../../public/images/profile.png';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="flex justify-between items-center border-1 border-indigo-300 h-12 p-8 bg-gray-950 text-slate-50">
      <Link href="/">
        <h1 className="flex text-2xl gap-2 font-bold items-center">
          <Image src={profile} alt="profile" className="w-6 -scale-x-100" priority />
          <span>코당블로그</span>
        </h1>
      </Link>
      <nav className="flex gap-5">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/posts">Posts</Link>
        <Link href="/contact">Contact</Link>
      </nav>
    </header>
  );
}
