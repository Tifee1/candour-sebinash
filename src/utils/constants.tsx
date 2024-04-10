import { OrderType, ProductionLineType, TabLink } from './types'
import DashboardIcon from '@/assets/svgs/DashboardIcon'
import FabricsIcon from '@/assets/svgs/FabricsIcon'
import InventoryIcon from '@/assets/svgs/InventoryIcon'
import OrdersIcon from '@/assets/svgs/OrdersIcon'
import ProductionIcon from '@/assets/svgs/ProductionIcon'
import SettingsIcon from '@/assets/svgs/SettingsIcon'
import SuppliersIcon from '@/assets/svgs/SuppliersIcon'
import TutorialIcon from '@/assets/svgs/TutorialIcon'

export const tabLinks: TabLink[] = [
  { name: 'Dashboard', path: '/dashboard', icon: <DashboardIcon /> },
  {
    name: 'Production Line',
    path: '/dashboard/production-line',
    icon: <ProductionIcon />,
  },
  { name: 'Orders', path: '/dashboard/orders', icon: <OrdersIcon /> },
  { name: 'Fabrics', path: '/dashboard/fabrics', icon: <FabricsIcon /> },
  { name: 'Inventory', path: '/dashboard/inventory', icon: <InventoryIcon /> },
  { name: 'Suppliers', path: '/dashboard/suppliers', icon: <SuppliersIcon /> },
]

export const subTabLinks: TabLink[] = [
  { name: 'Settings', path: '/dashboard/settings', icon: <SettingsIcon /> },
  {
    name: 'Tutorial',
    path: '/dashboard/tutorial',
    icon: <TutorialIcon />,
  },
]

export const dummyMessages = [
  { img: '/images/msg1.png', number: 3 },
  { img: '/images/msg2.png', number: 3 },
  { img: '/images/msg3.png', number: 3 },
  { img: '/images/msg4.png', number: 3 },
]

export const dummyProductionLineData: ProductionLineType[] = [
  { name: 'Cascade center table', image: '/images/cascade.png', unit: 5 },
  { name: 'Slate armchair', image: '/images/slate-armchair.png', unit: 1020 },
  { name: 'Zest upholstered bed', image: '/images/upholstered.png', unit: 40 },
  { name: 'Tulipan armchair', image: '/images/tulipan.png', unit: 500 },
  { name: 'Tulipan armchair', image: '/images/tulipan.png', unit: 500 },
]

export const dummyOrderData: OrderType[] = [
  {
    image: '/images/dummyorder.jpeg',
    product: 'Benjamin bookcase',
    qty: 50,
    supplier: 'Alvin and band',
    status: 'delivered',
  },
  {
    image: '/images/dummyorder.jpeg',
    product: 'Benjamin bookcase',
    qty: 50,
    supplier: 'Alvin and band',
    status: 'delivered',
  },
  {
    image: '/images/dummyorder.jpeg',
    product: 'Benjamin bookcase',
    qty: 50,
    supplier: 'Alvin and band',
    status: 'delivered',
  },
  {
    image: '/images/dummyorder.jpeg',
    product: 'Benjamin bookcase',
    qty: 50,
    supplier: 'Alvin and band',
    status: 'delivered',
  },
  {
    image: '/images/dummyorder.jpeg',
    product: 'Benjamin bookcase',
    qty: 50,
    supplier: 'Alvin and band',
    status: 'delivered',
  },
  {
    image: '/images/dummyorder.jpeg',
    product: 'Benjamin bookcase',
    qty: 50,
    supplier: 'Alvin and band',
    status: 'delivered',
  },
  {
    image: '/images/dummyorder.jpeg',
    product: 'Benjamin bookcase',
    qty: 50,
    supplier: 'Alvin and band',
    status: 'delivered',
  },
  {
    image: '/images/dummyorder.jpeg',
    product: 'Benjamin bookcase',
    qty: 50,
    supplier: 'Alvin and band',
    status: 'delivered',
  },
  {
    image: '/images/dummyorder.jpeg',
    product: 'Benjamin bookcase',
    qty: 50,
    supplier: 'Alvin and band',
    status: 'delivered',
  },
  {
    image: '/images/dummyorder.jpeg',
    product: 'Benjamin bookcase',
    qty: 50,
    supplier: 'Alvin and band',
    status: 'delivered',
  },
]
