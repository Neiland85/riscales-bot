"use client"
import Image from "next/image"
import { Plus } from "lucide-react"

interface ProductCardProps {
  product: {
    id: string
    name: string
    description: string
    price: number
    image: string
    format: string
  }
  onAddToCart: () => void
}

export default function ProductCard({ product, onAddToCart }: ProductCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100">
      <div className="relative h-48 w-full">
        <Image src={product.image || "/placeholder.svg"} alt={product.name} fill className="object-cover" />
      </div>
      <div className="p-4">
        <h3 className="font-bold text-lg">{product.name}</h3>
        <p className="text-sm text-gray-600 mt-1">{product.description}</p>
        <p className="text-sm text-gray-500 mt-1">Formato: {product.format}</p>
        <div className="flex justify-between items-center mt-4">
          <span className="font-bold text-lg">{product.price.toFixed(2)}€</span>
          <button
            onClick={onAddToCart}
            className="bg-amber-500 text-white p-2 rounded-full hover:bg-amber-600 transition-colors"
          >
            <Plus size={18} />
          </button>
        </div>
      </div>
    </div>
  )
}

