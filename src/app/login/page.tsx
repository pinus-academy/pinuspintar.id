// app/login/page.tsx
'use client';

import { useState } from 'react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    try {
      const result = await signIn('credentials', {
        redirect: false,
        username,
        password,
      });

      if (result?.error) {
        // Jika ada error dari fungsi authorize (misal: password salah)
        setError('Username atau password salah.');
      } else if (result?.ok) {
        // Jika login berhasil
        router.push('/donasi'); // Arahkan ke halaman donasi
      }
    } catch (err) {
      setError('Gagal terhubung ke server.');
    }
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100">
      <div className="w-full max-w-md rounded-lg bg-white p-8 shadow-md">
        <h1 className="mb-6 text-center text-3xl font-bold text-gray-800">Login</h1>
        <form onSubmit={handleSubmit}>
          {error && <p className="mb-4 rounded bg-red-100 p-3 text-center text-red-600">{error}</p>}
          <div className="mb-4">
            <label className="mb-2 block text-sm font-bold text-gray-700" htmlFor="username">Username</label>
            <input
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>
          <div className="mb-6">
            <label className="mb-2 block text-sm font-bold text-gray-700" htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full rounded-lg bg-emerald-700 px-4 py-2 font-bold text-white transition hover:bg-green-700 focus:outline-none focus:shadow-outline"
          >
            Login
          </button>
        </form>
         <p className="mt-6 text-center text-sm text-gray-600">
          Dont have account?{' '}
          <Link href="/register" className="font-bold text-emerald-700 hover:text-green-800">
            Sign Up here
          </Link>
        </p>
      </div>
    </div>
  );
}