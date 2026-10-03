'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Home, PlusCircle, Settings, Dog } from 'lucide-react'
import { useTheme } from '@/lib/ThemeContext'

const navItems = [
  { href: '/dashboard', icon: Home, label: 'Inicio' },
  { href: '/pet/new', icon: PlusCircle, label: 'Nueva' },
  { href: '/settings', icon: Settings, label: 'Ajustes' },
]

export default function BottomNav() {
  const pathname = usePathname()
  const { theme } = useTheme()

  return (
    <nav
      className="fixed bottom-0 left-0 right-0 z-50 flex justify-around items-center h-16 border-t"
      style={{ background: theme.bgCard, borderColor: theme.border }}
    >
      {navItems.map(({ href, icon: Icon, label }) => {
        const active = pathname.startsWith(href)
        return (
          <Link
            key={href}
            href={href}
            className="flex flex-col items-center gap-0.5 px-4 py-2"
          >
            <Icon
              size={22}
              color={active ? theme.primary : theme.textMuted}
              strokeWidth={active ? 2.5 : 1.5}
            />
            <span
              className="text-xs font-medium"
              style={{ color: active ? theme.primary : theme.textMuted }}
            >
              {label}
            </span>
          </Link>
        )
      })}
    </nav>
  )
}
