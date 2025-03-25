"use client"

import type React from "react"
import { Minus, Plus, X } from "lucide-react"

interface OrderSummaryProps {
  cart: Array<{
    id: string
    name: string
    price: number
    quantity: number
  }>
  setCart: React.Dispatch<
    React.SetStateAction<
      Array<{
        id: string
        name: string
        price: number
        quantity: number
      }>
    >
  >
  onClose: () => void
}

export default function OrderSummary({ cart, setCart, onClose }: OrderSummaryProps) {
  const updateQuantity = (id: string, change: number) => {
    setCart(
      cart.map((item) => {
        if (item.id === id) {
          const newQuantity = Math.max(1, item.quantity + change)
          return { ...item, quantity: newQuantity }
        }
        return item
      }),
    )
  }

  const removeItem = (id: string) => {
    setCart(cart.filter((item) => item.id !== id))
  }

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)

  return (
    <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold">Resumen del pedido</h2>
        <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
          <X size={24} />
        </button>
      </div>

      {cart.length === 0 ? (
        <p className="text-center py-8 text-gray-500">Tu carrito está vacío</p>
      ) : (
        <>
          <div className="space-y-4 mb-6">
            {cart.map((item) => (
              <div key={item.id} className="flex justify-between items-center border-b pb-4">
                <div className="flex-1">
                  <h3 className="font-medium">{item.name}</h3>
                  <p className="text-gray-600">
                    {item.price.toFixed(2)}€ x {item.quantity}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => updateQuantity(item.id, -1)}
                    className="p-1 rounded-full bg-gray-100 hover:bg-gray-200"
                  >
                    <Minus size={16} />
                  </button>
                  <span className="w-8 text-center">{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.id, 1)}
                    className="p-1 rounded-full bg-gray-100 hover:bg-gray-200"
                  >
                    <Plus size={16} />
                  </button>
                  <button
                    onClick={() => removeItem(item.id)}
                    className="p-1 rounded-full bg-gray-100 hover:bg-gray-200 ml-2"
                  >
                    <X size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="border-t pt-4">
            <div className="flex justify-between items-center font-bold text-lg">
              <span>Total:</span>
              <span>{total.toFixed(2)}€</span>
            </div>
          </div>
        </>
      )}
    </div>
  )
}

