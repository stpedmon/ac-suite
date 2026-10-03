import type { Metadata } from 'next'
import './globals.css'
import { Providers } from './providers'

export const metadata: Metadata = {
  title: 'Pet ID - Tarjeta Digital para Mascotas',
  description: 'Plataforma de identidad digital para mascotas con QR, historial médico y certificados de vacunación',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
