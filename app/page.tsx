"use client"
import { useEffect, useState } from "react"

export default function Home() {
  const [mensaje, setMensaje] = useState("Cargando...")

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}`)
      .then(res => res.json())
      .then(data => setMensaje(data.mensaje))
      .catch(() => setMensaje("Error conectando al backend"))
  }, [])

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-black text-white">
      <h1 className="text-4xl font-bold mb-6">PageKizoo 🚀</h1>
      <p>{mensaje}</p>
    </main>
  )
}
