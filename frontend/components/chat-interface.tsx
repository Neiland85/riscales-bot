"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { ShoppingBag } from "lucide-react"
import Image from "next/image"
import { getProductsByCategory } from "@/lib/api"
import ProductList from "@/components/product-list"
import CartSummary from "@/components/cart-summary"
import ChatMessage from "@/components/chat-message"
import CategoryCard from "@/components/category-card"
import type { Product, CartItem } from "@/lib/types"

export default function ChatInterface() {
  const [messages, setMessages] = useState<Array<{ type: string; content: string | React.ReactNode }>>([])
  const [input, setInput] = useState("")
  const [step, setStep] = useState(0)
  const [businessType, setBusinessType] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("")
  const [cart, setCart] = useState<CartItem[]>([])
  const [showCart, setShowCart] = useState(false)
  const [contactInfo, setContactInfo] = useState({ name: "", location: "", contact: "" })
  const [isTyping, setIsTyping] = useState(false)
  const [products, setProducts] = useState<Product[]>([])
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const categories = [
    {
      id: "jamones",
      name: "Jamones",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DALL%C2%B7E%202025-03-25%2000.42.20%20-%20Create%20a%20high-quality%20digital%20banner%20representing%20the%20gourmet%20food%20category%20%27Jamones%27%20%28Iberian%20and%20Serrano%20ham%29%20for%20a%20Spanish%20premium%20food%20distributor-V4PDTKzED00Jw5TeXLKXL3sTDyDQdd.webp",
      description: "Jamones ibéricos y serranos de la mejor calidad",
    },
    {
      id: "embutidos",
      name: "Embutidos",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DALL%C2%B7E%202025-03-25%2000.42.28%20-%20Create%20a%20high-quality%20digital%20banner%20representing%20the%20gourmet%20food%20category%20%27Embutidos%27%20%28Spanish%20cured%20sausages%20like%20chorizo%2C%20salchicho%CC%81n%2C%20and%20lomo%29%20fo-LQvReFnaanLS8usvGyaaX88OGxzJl5.webp",
      description: "Embutidos tradicionales elaborados artesanalmente",
    },
    {
      id: "quesos",
      name: "Quesos",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DALL%C2%B7E%202025-03-25%2000.42.38%20-%20Create%20a%20high-quality%20digital%20banner%20representing%20the%20gourmet%20food%20category%20%27Quesos%27%20%28Spanish%20cheeses%20like%20Manchego%2C%20goat%20cheese%20with%20rosemary%2C%20and%20bl-L7bLY1SvL5Jxe5rUYvOAd2ppEUubEs.webp",
      description: "Selección de quesos nacionales e internacionales",
    },
    {
      id: "aceites",
      name: "Aceites",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DALL%C2%B7E%202025-03-25%2000.42.52%20-%20Create%20a%20high-quality%20digital%20banner%20representing%20the%20gourmet%20food%20category%20%27Aceites%27%20%28Spanish%20extra%20virgin%20olive%20oils%29%20for%20a%20premium%20Spanish%20food%20dis-uIki6yg0EBQWfo3dW4tN47K8xoMIfw.webp",
      description: "Aceites de oliva virgen extra de primera calidad",
    },
    {
      id: "conservas",
      name: "Conservas gourmet",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DALL%C2%B7E%202025-03-25%2000.42.59%20-%20Create%20a%20high-quality%20digital%20banner%20representing%20the%20gourmet%20food%20category%20%27Conservas%20Gourmet%27%20%28Spanish%20canned%20delicacies%20such%20as%20anchovies%2C%20bonito%2C%20-C3GmJ5rE0tWkwEMWOu4DyAESUOQzvU.webp",
      description: "Conservas premium del mar y de la tierra",
    },
    {
      id: "vinos",
      name: "Vinos",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DALL%C2%B7E%202025-03-25%2000.43.05%20-%20Create%20a%20high-quality%20digital%20banner%20representing%20the%20gourmet%20food%20category%20%27Vinos%27%20%28Spanish%20wines%20including%20red%20Rioja%2C%20white%20Albarin%CC%83o%2C%20and%20Ribera%20del-5oXuOFyU6O8MtcLRPFt0hLaEdMqJqb.webp",
      description: "Vinos de las mejores denominaciones de origen",
    },
  ]

  useEffect(() => {
    // Initial greeting
    if (messages.length === 0) {
      setIsTyping(true)
      setTimeout(() => {
        setMessages([
          {
            type: "bot",
            content: (
              <div className="space-y-4">
                <p>
                  👋 ¡Bienvenido a Riscales Alimentación! Somos distribuidores de productos gourmet para hostelería y
                  restauración.
                </p>
                <div className="relative w-full h-48 rounded-lg overflow-hidden">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DALL%C2%B7E%202025-03-25%2000.41.26%20-%20Create%20a%20set%20of%20six%20high-quality%20digital%20banners%2C%20each%20representing%20a%20gourmet%20food%20category%20for%20a%20Spanish%20premium%20food%20distributor.%20Each%20banner%20should-fRvGuZN2es8eKK7jIwMLWbyQ4SCwaV.webp"
                    alt="Riscales Alimentación Productos Gourmet"
                    fill
                    className="object-cover"
                  />
                </div>
                <p>¿Qué tipo de negocio tienes?</p>
              </div>
            ),
          },
        ])
        setIsTyping(false)
      }, 1000)
    }
  }, [messages.length])

  useEffect(() => {
    scrollToBottom()
  }, [messages, isTyping])

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  const addBotMessage = (content: string | React.ReactNode) => {
    setIsTyping(true)
    setTimeout(() => {
      setMessages((prev) => [...prev, { type: "bot", content }])
      setIsTyping(false)
    }, 500)
  }

  const handleBusinessTypeSelection = (type: string) => {
    setBusinessType(type)
    setMessages([...messages, { type: "user", content: type }])

    addBotMessage("Excelente. Para poder atenderte mejor, ¿podrías proporcionarme algunos datos?")
    setStep(1)
  }

  const handleContactInfoSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Verificar que los campos no estén vacíos
    if (!contactInfo.name || !contactInfo.location || !contactInfo.contact) {
      return
    }

    setMessages([
      ...messages,
      {
        type: "user",
        content: `${contactInfo.name}, ${contactInfo.location}, ${contactInfo.contact}`,
      },
    ])

    addBotMessage(
      <div className="space-y-4">
        <p>Gracias {contactInfo.name}. ¿Qué categoría de productos te interesa explorar?</p>
        <div className="grid grid-cols-2 gap-3">
          {categories.map((category) => (
            <CategoryCard
              key={category.id}
              category={category}
              onClick={() => handleCategorySelection(category.name)}
            />
          ))}
        </div>
      </div>,
    )
    setStep(2)
  }

  const handleCategorySelection = async (category: string) => {
    setSelectedCategory(category)
    setMessages([...messages, { type: "user", content: category }])

    setIsTyping(true)
    try {
      const categoryProducts = await getProductsByCategory(category)
      setProducts(categoryProducts)

      // Find the category object to get the image
      const categoryObj = categories.find((cat) => cat.name === category)
      const categoryImage = categoryObj ? categoryObj.image : ""

      addBotMessage(
        <div className="space-y-4">
          <div className="relative w-full h-48 rounded-lg overflow-hidden">
            <Image src={categoryImage || "/placeholder.svg"} alt={category} fill className="object-cover" />
            <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
              <h3 className="text-white text-2xl font-bold">{category}</h3>
            </div>
          </div>
          <p>
            Aquí tienes nuestra selección de {category.toLowerCase()}. Puedes añadir los productos que desees a tu
            pedido.
          </p>
          <ProductList products={categoryProducts} onAddToCart={handleAddToCart} />
          <button
            onClick={() => setStep(2)}
            className="w-full bg-gray-200 text-black px-4 py-2 rounded-md hover:bg-gray-300 transition-colors mt-2"
          >
            Volver a categorías
          </button>
        </div>,
      )
    } catch (error) {
      addBotMessage("Lo siento, ha ocurrido un error al cargar los productos. Por favor, inténtalo de nuevo.")
    }

    setStep(3)
  }

  const handleAddToCart = (product: Product) => {
    const existingItem = cart.find((item) => item.id === product.id)

    if (existingItem) {
      setCart(cart.map((item) => (item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item)))
    } else {
      setCart([...cart, { ...product, quantity: 1 }])
    }
  }

  const handleFinishOrder = () => {
    addBotMessage(
      <div className="space-y-4">
        <p>¡Perfecto! Aquí tienes el resumen de tu pedido:</p>
        <div className="bg-gray-50 rounded-lg p-4">
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center py-2 border-b border-gray-200 last:border-0"
            >
              <div className="flex-1">
                <p className="font-medium text-sm">{item.name}</p>
                <p className="text-xs text-gray-500">
                  {item.price.toFixed(2)}€ x {item.quantity}
                </p>
              </div>
              <p className="font-medium text-sm">{(item.price * item.quantity).toFixed(2)}€</p>
            </div>
          ))}
          <div className="flex justify-between items-center pt-2 font-bold">
            <p>Total:</p>
            <p>{cart.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2)}€</p>
          </div>
        </div>
        <p>¿Deseas confirmar este pedido o seguir comprando?</p>
        <div className="flex gap-2">
          <button
            onClick={handleSendWhatsApp}
            className="flex-1 bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors flex items-center justify-center gap-2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="white">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Confirmar pedido
          </button>
          <button
            onClick={() => setStep(2)}
            className="flex-1 bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 transition-colors"
          >
            Seguir comprando
          </button>
        </div>
      </div>,
    )

    setStep(4)
  }

  const handleSendWhatsApp = () => {
    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)

    let message = `*Nuevo pedido de ${contactInfo.name} (${businessType})*\n`
    message += `*Localidad:* ${contactInfo.location}\n`
    message += `*Contacto:* ${contactInfo.contact}\n\n`
    message += "*Productos:*\n"

    cart.forEach((item) => {
      message += `- ${item.name} x${item.quantity}: ${(item.price * item.quantity).toFixed(2)}€\n`
    })

    message += `\n*Total: ${total.toFixed(2)}€*`

    const encodedMessage = encodeURIComponent(message)
    window.open(`https://wa.me/34600000000?text=${encodedMessage}`, "_blank")

    addBotMessage(
      <div className="space-y-4">
        <p>¡Gracias por tu pedido! Nuestro equipo lo procesará a la mayor brevedad posible.</p>
        <p>¿Deseas realizar algún otro pedido?</p>
        <button
          onClick={() => {
            setStep(2)
            setCart([])
          }}
          className="w-full bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 transition-colors"
        >
          Realizar nuevo pedido
        </button>
      </div>,
    )

    setStep(5)
  }

  const renderContactForm = () => {
    if (step !== 1) return null

    return (
      <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200 mt-4">
        <h3 className="font-medium mb-3">Información de contacto</h3>
        <form onSubmit={handleContactInfoSubmit} className="space-y-3">
          <div>
            <input
              type="text"
              value={contactInfo.name}
              onChange={(e) => setContactInfo((prev) => ({ ...prev, name: e.target.value }))}
              placeholder="Nombre del establecimiento"
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
              required
            />
          </div>
          <div>
            <input
              type="text"
              value={contactInfo.location}
              onChange={(e) => setContactInfo((prev) => ({ ...prev, location: e.target.value }))}
              placeholder="Localidad"
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
              required
            />
          </div>
          <div>
            <input
              type="text"
              value={contactInfo.contact}
              onChange={(e) => setContactInfo((prev) => ({ ...prev, contact: e.target.value }))}
              placeholder="Teléfono o Email"
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 transition-colors"
          >
            Continuar
          </button>
        </form>
      </div>
    )
  }

  const renderOptions = () => {
    switch (step) {
      case 0:
        return (
          <div className="grid grid-cols-2 gap-2">
            {["Restaurante", "Bar", "Hotel", "Tienda gourmet", "Catering", "Otro"].map((type) => (
              <button
                key={type}
                onClick={() => handleBusinessTypeSelection(type)}
                className="bg-white border border-gray-200 text-black px-4 py-2 rounded-md hover:bg-gray-50 transition-colors text-sm"
              >
                {type}
              </button>
            ))}
          </div>
        )
      case 2:
        return (
          <div className="grid grid-cols-2 gap-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => handleCategorySelection(category.name)}
                className="bg-white border border-gray-200 text-black px-4 py-2 rounded-md hover:bg-gray-50 transition-colors text-sm"
              >
                {category.name}
              </button>
            ))}
            {cart.length > 0 && (
              <button
                onClick={handleFinishOrder}
                className="col-span-2 bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 transition-colors text-sm mt-2"
              >
                Finalizar pedido ({cart.reduce((sum, item) => sum + item.quantity, 0)} productos)
              </button>
            )}
          </div>
        )
      default:
        return null
    }
  }

  return (
    <>
      <header className="bg-white border-b border-gray-200 py-4 px-4">
        <div className="container mx-auto max-w-2xl flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
              <span className="text-white text-xs font-bold">RA</span>
            </div>
            <h1 className="text-lg font-medium">Riscales Alimentación</h1>
          </div>
          <button
            onClick={() => setShowCart(!showCart)}
            className="relative p-2 rounded-full hover:bg-gray-100 transition-colors"
            disabled={cart.length === 0}
          >
            <ShoppingBag size={20} className={cart.length === 0 ? "text-gray-400" : "text-black"} />
            {cart.length > 0 && (
              <span className="absolute top-0 right-0 bg-black text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {cart.reduce((sum, item) => sum + item.quantity, 0)}
              </span>
            )}
          </button>
        </div>
      </header>

      <main className="flex-1 container mx-auto max-w-2xl p-4 overflow-y-auto">
        {showCart ? (
          <CartSummary
            cart={cart}
            setCart={setCart}
            onClose={() => setShowCart(false)}
            onCheckout={handleFinishOrder}
          />
        ) : (
          <div className="space-y-4">
            {messages.map((message, index) => (
              <ChatMessage key={index} message={message} />
            ))}

            {isTyping && (
              <div className="flex justify-start">
                <div className="max-w-[85%] rounded-lg p-3 bg-white border border-gray-200 shadow-sm">
                  <div className="flex space-x-2">
                    <div
                      className="w-2 h-2 rounded-full bg-gray-300 animate-bounce"
                      style={{ animationDelay: "0ms" }}
                    ></div>
                    <div
                      className="w-2 h-2 rounded-full bg-gray-300 animate-bounce"
                      style={{ animationDelay: "150ms" }}
                    ></div>
                    <div
                      className="w-2 h-2 rounded-full bg-gray-300 animate-bounce"
                      style={{ animationDelay: "300ms" }}
                    ></div>
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />

            {renderContactForm()}

            {!isTyping && renderOptions()}
          </div>
        )}
      </main>

      <footer className="bg-white border-t border-gray-200 py-3 px-4 text-center text-xs text-gray-500">
        <a
          href="https://integrabot.net"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-1 hover:text-black transition-colors"
        >
          🧠 Potenciado por Integrabot.net
        </a>
      </footer>
    </>
  )
}

