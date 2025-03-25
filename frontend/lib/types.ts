export interface Product {
  id: string
  name: string
  description: string
  price: number
  format: string
  image: string
  category: string
}

export interface CartItem extends Product {
  quantity: number
}

