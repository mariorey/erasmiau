import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contacto",
  description: "Ponte en contacto con la Asociación Juvenil Erasmiau de Puente Genil.",
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
