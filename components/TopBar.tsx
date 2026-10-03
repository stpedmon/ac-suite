'use client'
import { useTheme } from '@/lib/ThemeContext'
import { useAuth } from '@/lib/AuthContext'
import { Dog, LogOut } from 'lucide-react'

export default function TopBar({ title }: { title?: string }) {
  const { theme } = useTheme()
  const { signOut } = useAuth()

  return (
    <header
      className="sticky top-0 z-40 flex items-center justify-between px-5 py-3"
      style={{ background: theme.primary }}
    >
      <div className="flex items-center gap-2">
        <Dog size={26} color="#fff" />
        <span className="text-white font-bold text-lg" style={{ fontFamily: "'Playfair Display', serif" }}>
          {title || 'Pet ID'}
        </span>
      </div>
      <button onClick={signOut} className="p-2 rounded-lg hover:bg-white/10">
        <LogOut size={20} color="#fff" />
      </button>
    </header>
  )
}
