import type { Product } from "./types"

// Simulated product data
const productsData: Product[] = [
  // Jamones
  {
    id: "jam1",
    name: "Jamón Ibérico de Bellota",
    description: "Jamón ibérico de bellota 100% raza ibérica con 36 meses de curación.",
    price: 89.95,
    format: "Pieza 7-8kg",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DALL%C2%B7E%202025-03-25%2003.39.06%20-%20Create%20a%20high-quality%20digital%20product%20photo%20of%20%27Jamo%CC%81n%20Ibe%CC%81rico%20de%20Bellota%27%2C%20a%20premium%20Spanish%20cured%20ham.%20The%20image%20should%20feature%20a%20whole%20leg%20of%20jamo%CC%81n%20-72a3Ketkt9Jk9fTKPBJGVzCyuF4wUq.webp",
    category: "Jamones",
  },
  {
    id: "jam2",
    name: "Jamón Serrano Gran Reserva",
    description: "Jamón serrano de gran reserva con 24 meses de curación.",
    price: 59.95,
    format: "Pieza 6-7kg",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DALL%C2%B7E%202025-03-25%2003.39.39%20-%20Create%20a%20high-quality%20digital%20product%20photo%20of%20%27Jamo%CC%81n%20Serrano%20Gran%20Reserva%27%2C%20a%20traditional%20Spanish%20cured%20ham%20with%2024%20months%20of%20aging.%20The%20image%20should-4PTaiLMotelblXVVOAEDadmcYXIRVA.webp",
    category: "Jamones",
  },
  {
    id: "jam3",
    name: "Paleta Ibérica de Cebo",
    description: "Paleta ibérica de cebo con 24 meses de curación.",
    price: 45.95,
    format: "Pieza 4-5kg",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DALL%C2%B7E%202025-03-25%2003.39.55%20-%20Create%20a%20high-quality%20digital%20product%20photo%20of%20%27Paleta%20Ibe%CC%81rica%20de%20Cebo%27%2C%20a%20Spanish%20cured%20pork%20shoulder.%20The%20image%20should%20show%20a%20whole%20paleta%20ibe%CC%81rica%20o-JdNO6gUW0h8o9ZKsmmXVe5IJQQNoVv.webp",
    category: "Jamones",
  },

  // Embutidos
  {
    id: "emb1",
    name: "Chorizo Ibérico de Bellota",
    description: "Chorizo ibérico elaborado con carnes seleccionadas de cerdo ibérico.",
    price: 12.95,
    format: "Pieza 500g",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DALL%C2%B7E%202025-03-25%2001.31.27%20-%20Create%20a%20high-quality%20digital%20product%20photo%20of%20%27Chorizo%20Ibe%CC%81rico%20de%20Bellota%27%2C%20a%20premium%20Spanish%20cured%20sausage.%20The%20image%20should%20show%20slices%20and%20a%20whole-OXPk8KFojAR0G4VgctQrUMWl9zKun5.webp",
    category: "Embutidos",
  },
  {
    id: "emb2",
    name: "Salchichón Ibérico",
    description: "Salchichón ibérico elaborado de forma tradicional.",
    price: 11.95,
    format: "Pieza 500g",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DALL%C2%B7E%202025-03-25%2001.31.32%20-%20Create%20a%20high-quality%20digital%20product%20photo%20of%20%27Salchicho%CC%81n%20Ibe%CC%81rico%27%2C%20a%20traditional%20Spanish%20cured%20sausage.%20The%20image%20should%20show%20a%20sliced%20salchicho%CC%81n%20al-KjORrkSXdUW0iYqBhZjWa4CKM7PdQm.webp",
    category: "Embutidos",
  },
  {
    id: "emb3",
    name: "Lomo Ibérico de Bellota",
    description: "Lomo ibérico de bellota 100% natural.",
    price: 19.95,
    format: "Pieza 600g",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DALL%C2%B7E%202025-03-25%2001.31.45%20-%20Create%20a%20high-quality%20digital%20product%20photo%20of%20%27Lomo%20Ibe%CC%81rico%20de%20Bellota%27%2C%20a%20premium%20Spanish%20cured%20pork%20loin.%20The%20image%20should%20feature%20a%20full%20piece%20and-oKpgMB7EksLOdE3GnIeZHOVswMFJ1k.webp",
    category: "Embutidos",
  },

  // Quesos
  {
    id: "que1",
    name: "Queso Manchego Curado",
    description: "Queso manchego curado elaborado con leche cruda de oveja.",
    price: 15.95,
    format: "Pieza 1kg",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DALL%C2%B7E%202025-03-25%2001.24.49%20-%20Create%20a%20high-quality%20digital%20product%20photo%20of%20%27Queso%20Manchego%20Curado%27%2C%20a%20traditional%20Spanish%20cheese%20made%20from%20sheep%27s%20milk.%20The%20image%20should%20feature%20-3diBpn20NreodTyd40VoHsxBie2rfB.webp",
    category: "Quesos",
  },
  {
    id: "que2",
    name: "Queso de Cabra al Romero",
    description: "Queso de cabra semicurado con romero.",
    price: 12.95,
    format: "Pieza 800g",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DALL%C2%B7E%202025-03-25%2001.24.44%20-%20Create%20a%20high-quality%20digital%20product%20photo%20of%20%27Queso%20de%20Cabra%20al%20Romero%27%2C%20a%20Spanish%20goat%20cheese%20covered%20in%20rosemary.%20The%20image%20should%20show%20a%20wedge%20or-82htRELRL1TUwBwslFoGwVN1EkbOZ8.webp",
    category: "Quesos",
  },
  {
    id: "que3",
    name: "Queso Azul de Valdeón",
    description: "Queso azul de Valdeón elaborado con leche pasteurizada de vaca y cabra.",
    price: 14.95,
    format: "Pieza 500g",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DALL%C2%B7E%202025-03-25%2001.24.32%20-%20Create%20a%20high-quality%20digital%20product%20photo%20of%20%27Queso%20Azul%20de%20Valdeo%CC%81n%27%2C%20a%20Spanish%20blue%20cheese%20made%20from%20cow%20and%20goat%20milk.%20The%20image%20should%20feature%20a%20-yNH9DEbVugdD1nm2AFUx7zyhHMCa41.webp",
    category: "Quesos",
  },

  // Aceites
  {
    id: "ace1",
    name: "Aceite de Oliva Virgen Extra",
    description: "Aceite de oliva virgen extra de primera presión en frío.",
    price: 9.95,
    format: "Botella 500ml",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DALL%C2%B7E%202025-03-25%2001.29.42%20-%20Create%20a%20high-quality%20digital%20product%20photo%20of%20%27Aceite%20de%20Oliva%20Virgen%20Extra%27%2C%20a%20Spanish%20premium%20olive%20oil.%20The%20image%20should%20feature%20an%20elegant%20glass%20-Stjwl1B4t84ZTAfUdHnQDH0uYPo0Ei.webp",
    category: "Aceites",
  },
  {
    id: "ace2",
    name: "Aceite de Oliva Virgen Extra Ecológico",
    description: "Aceite de oliva virgen extra ecológico de producción sostenible.",
    price: 12.95,
    format: "Botella 500ml",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DALL%C2%B7E%202025-03-25%2001.29.47%20-%20Create%20a%20high-quality%20digital%20product%20photo%20of%20%27Aceite%20de%20Oliva%20Virgen%20Extra%20Ecolo%CC%81gico%27%2C%20a%20Spanish%20organic%20extra%20virgin%20olive%20oil.%20The%20image%20should%20sh-erhOssi0elBrTLYK8BMba0fAHLajns.webp",
    category: "Aceites",
  },
  {
    id: "ace3",
    name: "Aceite de Oliva Virgen Extra Arbequina",
    description: "Aceite de oliva virgen extra variedad arbequina.",
    price: 11.95,
    format: "Botella 500ml",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DALL%C2%B7E%202025-03-25%2001.29.54%20-%20Create%20a%20high-quality%20digital%20product%20photo%20of%20%27Aceite%20de%20Oliva%20Virgen%20Extra%20Arbequina%27%2C%20a%20Spanish%20extra%20virgin%20olive%20oil%20made%20from%20arbequina%20olives.%20-FyQdq4y8TwB61sdoNOq1KVh6Sqwpnm.webp",
    category: "Aceites",
  },

  // Conservas gourmet
  {
    id: "con1",
    name: "Anchoas del Cantábrico",
    description: "Anchoas del Cantábrico en aceite de oliva.",
    price: 14.95,
    format: "Lata 50g",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DALL%C2%B7E%202025-03-25%2001.21.56%20-%20Create%20a%20high-quality%20digital%20product%20photo%20of%20%27Anchoas%20del%20Canta%CC%81brico%27%2C%20a%20gourmet%20Spanish%20canned%20delicacy.%20The%20image%20should%20show%20the%20anchovies%20elegan-VWPE8FEJIFcfnljgyfehok1cJAbrGf.webp",
    category: "Conservas gourmet",
  },
  {
    id: "con2",
    name: "Bonito del Norte",
    description: "Bonito del Norte en aceite de oliva.",
    price: 12.95,
    format: "Lata 190g",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DALL%C2%B7E%202025-03-25%2001.22.10%20-%20Create%20a%20high-quality%20digital%20product%20photo%20of%20%27Bonito%20del%20Norte%27%2C%20a%20gourmet%20Spanish%20canned%20tuna%20product.%20The%20image%20should%20feature%20chunks%20of%20white%20tun-TpVcAShAn7zvjnZTvYX2cj9X6dRLjU.webp",
    category: "Conservas gourmet",
  },
  {
    id: "con3",
    name: "Paté de Perdiz",
    description: "Paté artesano de perdiz.",
    price: 8.95,
    format: "Tarro 180g",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DALL%C2%B7E%202025-03-25%2001.22.03%20-%20Create%20a%20high-quality%20digital%20product%20photo%20of%20%27Pate%CC%81%20de%20Perdiz%27%2C%20a%20gourmet%20Spanish%20delicacy.%20The%20image%20should%20show%20the%20pate%CC%81%20served%20elegantly%20in%20a%20glas-gVGwiUyZ4jjRduVBI9sSPtwJ03cNpx.webp",
    category: "Conservas gourmet",
  },

  // Vinos
  {
    id: "vin1",
    name: "Vino Tinto Ribera del Duero Crianza",
    description: "Vino tinto Ribera del Duero crianza.",
    price: 15.95,
    format: "Botella 75cl",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DALL%C2%B7E%202025-03-25%2001.42.54%20-%20Create%20a%20high-quality%20digital%20product%20photo%20of%20%27Vino%20Tinto%20Ribera%20del%20Duero%20Crianza%27%2C%20a%20premium%20Spanish%20red%20wine.%20The%20image%20should%20feature%20an%20elegant%20-OUlnC1jP3Z6eJRICtXseQkDRvgAFoI.webp",
    category: "Vinos",
  },
  {
    id: "vin2",
    name: "Vino Blanco Albariño",
    description: "Vino blanco Albariño D.O. Rías Baixas.",
    price: 13.95,
    format: "Botella 75cl",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DALL%C2%B7E%202025-03-25%2001.43.22%20-%20Create%20a%20high-quality%20digital%20product%20photo%20of%20%27Vino%20Blanco%20Albarin%CC%83o%27%2C%20a%20Spanish%20white%20wine%20from%20the%20Ri%CC%81as%20Baixas%20region.%20The%20image%20should%20feature%20a%20ch-us4UAeWXyd9VQOPMLOcZIWk58zppqP.webp",
    category: "Vinos",
  },
  {
    id: "vin3",
    name: "Vino Tinto Rioja Reserva",
    description: "Vino tinto Rioja reserva.",
    price: 18.95,
    format: "Botella 75cl",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DALL%C2%B7E%202025-03-25%2001.43.37%20-%20Create%20a%20high-quality%20digital%20product%20photo%20of%20%27Vino%20Tinto%20Rioja%20Reserva%27%2C%20a%20premium%20Spanish%20red%20wine.%20The%20image%20should%20feature%20a%20bottle%20and%20a%20glass%20o-91QA73m8vBcj4RXCgXSUPNkVomYHXz.webp",
    category: "Vinos",
  },
]

// Simulated API functions with async/await pattern
export const getProducts = async (): Promise<Product[]> => {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 500))
  return productsData
}

export const getProductsByCategory = async (category: string): Promise<Product[]> => {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 500))
  return productsData.filter((product) => product.category === category)
}

export const getProductById = async (id: string): Promise<Product | undefined> => {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 300))
  return productsData.find((product) => product.id === id)
}

