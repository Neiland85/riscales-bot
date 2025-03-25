"use client"
import Image from "next/image"

interface CategoryCardProps {
  category: {
    id: string
    name: string
    image: string
    description: string
  }
  onClick: () => void
}

export default function CategoryCard({ category, onClick }: CategoryCardProps) {
  return (
    <div
      className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100 cursor-pointer hover:shadow-md transition-shadow"
      onClick={onClick}
    >
      <div className="relative h-32 w-full">
        <Image src={category.image || "/placeholder.svg"} alt={category.name} fill className="object-cover" />
        <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
          <h3 className="text-white text-lg font-bold">{category.name}</h3>
        </div>
      </div>
      <div className="p-2">
        <p className="text-xs text-gray-600 line-clamp-2">{category.description}</p>
      </div>
    </div>
  )
}

