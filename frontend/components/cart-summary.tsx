"use client"

import type React from "react"
import { Minus, Plus, X } from "lucide-react"
import type { CartItem } from "@/lib/types"
import Image from "next/image"

interface CartSummaryProps {
  cart: CartItem[]
  setCart: React.Dispatch<React.SetStateAction<CartItem[]>>
  onClose: () => void
  onCheckout: () => void
}

export default function CartSummary({ cart, setCart, onClose, onCheckout }: CartSummaryProps) {
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
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-medium">Tu pedido</h2>
        <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
          <X size={20} />
        </button>
      </div>

      {cart.length === 0 ? (
        <p className="text-center py-8 text-gray-500">Tu carrito está vacío</p>
      ) : (
        <>
          <div className="space-y-4 mb-4">
            {cart.map((item) => (
              <div key={item.id} className="flex items-center border-b pb-3">
                <div className="relative h-16 w-16 flex-shrink-0 mr-3">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.name}
                    fill
                    className="object-cover rounded-md"
                  />
                </div>
                <div className="flex-1">
                  <p className="font-medium text-sm">{item.name}</p>
                  <p className="text-xs text-gray-500">
                    {item.price.toFixed(2)}€ x {item.quantity}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => updateQuantity(item.id, -1)}
                    className="p-1 rounded-full bg-gray-100 hover:bg-gray-200"
                  >
                    <Minus size={14} />
                  </button>
                  <span className="w-6 text-center text-sm">{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.id, 1)}
                    className="p-1 rounded-full bg-gray-100 hover:bg-gray-200"
                  >
                    <Plus size={14} />
                  </button>
                  <button
                    onClick={() => removeItem(item.id)}
                    className="p-1 rounded-full bg-gray-100 hover:bg-gray-200 ml-1"
                  >
                    <X size={14} />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="border-t pt-3">
            <div className="flex justify-between items-center font-medium mb-4">
              <span>Total:</span>
              <span>{total.toFixed(2)}€</span>
            </div>

            <button
              onClick={onCheckout}
              className="w-full bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 transition-colors"
            >
              Finalizar pedido
            </button>
          </div>
        </>
      )}
    </div>
  )
}

