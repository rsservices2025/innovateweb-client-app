import Link from 'next/link';
import { createClient } from '@/lib/supabase/server-client';
import LogoutButton from './LogoutButton';

export default async function Header() {
  const supabase = createClient();
  const { data: { user } } = await supabase.auth.getUser();

  return (
    <header className="bg-white shadow-md fixed w-full top-0 z-50">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-gray-800">
          Innovate<span className="text-blue-600">Web</span>
        </Link>
        <div className="hidden md:flex space-x-6 items-center">
          <Link href="/#features" className="text-gray-600 hover:text-blue-600">Features</Link>
          <Link href="/portfolio" className="text-gray-600 hover:text-blue-600">Portfolio</Link>
          <Link href="/#pricing" className="text-gray-600 hover:text-blue-600">Pricing</Link>
        </div>
        <div>
          {user ? (
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-600 hidden sm:block">{user.email}</span>
              <LogoutButton />
            </div>
          ) : (
            <Link href="/login" className="bg-blue-600 text-white font-semibold px-4 py-2 rounded-lg hover:bg-blue-700">
              Login / Signup
            </Link>
          )}
        </div>
      </nav>
    </header>
  );
}