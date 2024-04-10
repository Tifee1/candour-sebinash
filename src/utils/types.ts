export type TabLink = {
  name: string
  path: string
  icon: JSX.Element
}

export type ProductionLineType = {
  name: string
  image: string
  unit: number
}

export type OrderType = {
  image: string
  product: string
  qty: number
  supplier: string
  status: string
}
