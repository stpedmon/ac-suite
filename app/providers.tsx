'use client'
import { ThemeProvider } from '@/lib/ThemeContext'
import { AuthProvider } from '@/lib/AuthContext'

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <AuthProvider>
      <ThemeProvider>
        {children}
      </ThemeProvider>
    </AuthProvider>
  )
}
