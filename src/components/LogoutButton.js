'use client'

import { createClient } from '@/lib/supabase/browser-client'
import { useRouter } from 'next/navigation'

export default function LogoutButton() {
  const router = useRouter()
  const supabase = createClient()

  const handleLogout = async () => {
    await supabase.auth.signOut()
    router.refresh()
  }

  return (
    <button
      onClick={handleLogout}
      className="bg-red-500 text-white font-semibold px-4 py-2 rounded-lg hover:bg-red-600"
    >
      Logout
    </button>
  )
}