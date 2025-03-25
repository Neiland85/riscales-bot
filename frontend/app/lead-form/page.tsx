'use client'

import { useState } from 'react'

export default function LeadFormPage() {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [response, setResponse] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const getSaludo = () => {
    const hora = new Date().getHours()
    return hora < 14 ? 'Buenos días' : 'Buenas tardes'
  }

  const handleSubmit = async () => {
    setResponse('')
    setError('')

    if (!name || !phone) {
      setError('Debes rellenar nombre y teléfono')
      return
    }

    setLoading(true)

    try {
      // 1. Llamamos a nuestro backend para guardar en Google Sheets
      const res = await fetch('http://localhost:3001/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, phone, source: 'formulario-riscales-frontend' })
      })

      const data = await res.json()

      if (res.ok) {
        setResponse(data.message)
        setName('')
        setPhone('')

        // 2. Abrimos WhatsApp con saludo dinámico
        const message = `${getSaludo()} 👋 Soy ${name} y estoy interesado en vuestros productos gourmet. Mi número es ${phone}.`
        const whatsappURL = `https://wa.me/34613722441?text=${encodeURIComponent(message)}`
        window.open(whatsappURL, '_blank')
      } else {
        setError(data.error || 'Error al enviar lead')
      }
    } catch (err) {
      setError('No se pudo conectar con el backend')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="max-w-md mx-auto mt-10 p-6 border rounded shadow">
      <h1 className="text-2xl font-bold mb-4">Formulario de Lead</h1>

      <input
        className="w-full p-2 mb-3 border rounded"
        placeholder="Nombre"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        className="w-full p-2 mb-3 border rounded"
        placeholder="Teléfono"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />

<button
        type="button"
        className={`w-full py-2 rounded text-white ${
          loading ? 'bg-gray-500 cursor-wait' : 'bg-black hover:bg-gray-800'
        }`}
        onClick={handleSubmit}
        disabled={loading}
      >
        {loading ? 'Enviando...' : 'Enviar y abrir WhatsApp'}
      </button>

      {response && <p className="text-green-600 mt-4">{response}</p>}
      {error && <p className="text-red-600 mt-4">{error}</p>}
    </div>
  )
}

