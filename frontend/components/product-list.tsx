"use client"
import Image from "next/image"
import { Plus } from "lucide-react"
import type { Product } from "@/lib/types"

interface ProductListProps {
  products: Product[]
  onAddToCart: (product: Product) => void
}

export default function ProductList({ products, onAddToCart }: ProductListProps) {
  return (
    <div className="grid grid-cols-1 gap-4">
      {products.map((product) => (
        <div key={product.id} className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
          <div className="flex">
            <div className="relative h-24 w-24 flex-shrink-0">
              <Image src={product.image || "/placeholder.svg"} alt={product.name} fill className="object-cover" />
            </div>
            <div className="p-3 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="font-medium text-sm">{product.name}</h3>
                <p className="text-xs text-gray-500 mt-1 line-clamp-2">{product.description}</p>
              </div>
              <div className="flex justify-between items-center mt-2">
                <span className="font-medium text-sm">{product.price.toFixed(2)}€</span>
                <button
                  onClick={() => onAddToCart(product)}
                  className="bg-black text-white p-1 rounded-full hover:bg-gray-800 transition-colors"
                >
                  <Plus size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

