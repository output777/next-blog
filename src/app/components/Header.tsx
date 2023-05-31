import React from 'react';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="flex justify-between items-center border-1 border-indigo-300 h-12 p-8 ">
      <Link href="/">
        <h1 className="flex text-2xl font-bold">코당블로그</h1>
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
