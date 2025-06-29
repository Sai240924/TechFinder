import { Product } from '../types';

export const products: Product[] = [
  // Gaming Laptops
  {
    id: 'gl001',
    name: 'Asus ROG Zephyrus G14',
    category: 'gaming',
    device: 'laptop',
    price: 1499.99,
    specs: {
      cpu: 'ryzen9',
      gpu: 'rtx3060',
      ram: '16',
      storage: '1024',
      screenSize: '14',
      refreshRate: 144
    },
    image: 'https://images.pexels.com/photos/1229861/pexels-photo-1229861.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    description: 'Compact and powerful gaming laptop with a stunning display and excellent battery life.',
    tags: ['gaming', 'lightweight', 'premium']
  },
  {
    id: 'gl002',
    name: 'MSI Raider GE76',
    category: 'gaming',
    device: 'laptop',
    price: 2099.99,
    specs: {
      cpu: 'i9',
      gpu: 'rtx3080',
      ram: '32',
      storage: '2048',
      screenSize: '17.3',
      refreshRate: 240
    },
    image: 'https://images.pexels.com/photos/9945273/pexels-photo-9945273.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    description: 'Desktop-level performance in a laptop form factor with excellent cooling and RGB lighting.',
    tags: ['gaming', 'high-performance', 'premium']
  },
  {
    id: 'gl003',
    name: 'Acer Nitro 5',
    category: 'gaming',
    device: 'laptop',
    price: 899.99,
    specs: {
      cpu: 'i5',
      gpu: 'rtx3050',
      ram: '8',
      storage: '512',
      screenSize: '15.6',
      refreshRate: 144
    },
    image: 'https://images.pexels.com/photos/7974/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    description: 'Affordable gaming laptop with solid performance for most modern games.',
    tags: ['gaming', 'budget', 'value']
  },
  
  // Gaming Desktops
  {
    id: 'gd001',
    name: 'Alienware Aurora R13',
    category: 'gaming',
    device: 'desktop',
    price: 2399.99,
    specs: {
      cpu: 'i9',
      gpu: 'rtx3090',
      ram: '32',
      storage: '2048',
      cooling: 'aio'
    },
    image: 'https://images.pexels.com/photos/777001/pexels-photo-777001.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    description: 'Premium gaming desktop with otherworldly design and top-tier components.',
    tags: ['gaming', 'premium', 'high-performance']
  },
  {
    id: 'gd002',
    name: 'NZXT Streaming PC',
    category: 'gaming',
    device: 'desktop',
    price: 1799.99,
    specs: {
      cpu: 'ryzen7',
      gpu: 'rtx3070',
      ram: '16',
      storage: '1024',
      cooling: 'air'
    },
    image: 'https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    description: 'Perfect for gaming and streaming with optimized cooling and component selection.',
    tags: ['gaming', 'streaming', 'mid-range']
  },
  
  // Gaming Mobiles
  {
    id: 'gm001',
    name: 'ASUS ROG Phone 6',
    category: 'gaming',
    device: 'mobile',
    price: 999.99,
    specs: {
      processor: 'snapdragon8',
      ram: '16',
      storage: '512',
      refreshRate: '144'
    },
    image: 'https://images.pexels.com/photos/8117386/pexels-photo-8117386.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    description: 'The ultimate gaming phone with advanced cooling and gaming-focused features.',
    tags: ['gaming', 'mobile', 'premium']
  },
  {
    id: 'gm002',
    name: 'RedMagic 7 Pro',
    category: 'gaming',
    device: 'mobile',
    price: 799.99,
    specs: {
      processor: 'snapdragon8',
      ram: '12',
      storage: '256',
      refreshRate: '120'
    },
    image: 'https://images.pexels.com/photos/6845960/pexels-photo-6845960.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    description: 'Pro-level gaming phone with built-in cooling fan and shoulder triggers.',
    tags: ['gaming', 'mobile', 'mid-range']
  },
  
  // Productivity Laptops
  {
    id: 'pl001',
    name: 'MacBook Pro 16',
    category: 'productivity',
    device: 'laptop',
    price: 2499.99,
    specs: {
      cpu: 'm2',
      ram: '32',
      storage: '1024',
      display: 'retina',
      colorGamut: 'dcip3',
      thunderbolt: true
    },
    image: 'https://images.pexels.com/photos/303383/pexels-photo-303383.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    description: 'Professional-grade laptop with exceptional performance and display quality.',
    tags: ['productivity', 'creative', 'premium']
  },
  {
    id: 'pl002',
    name: 'Dell XPS 15',
    category: 'productivity',
    device: 'laptop',
    price: 1799.99,
    specs: {
      cpu: 'i7',
      ram: '16',
      storage: '512',
      display: '4k',
      colorGamut: 'adobergb',
      thunderbolt: true
    },
    image: 'https://images.pexels.com/photos/7974/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    description: 'Premium Windows laptop with InfinityEdge display and excellent build quality.',
    tags: ['productivity', 'creative', 'premium']
  },
  {
    id: 'pl003',
    name: 'HP Spectre x360',
    category: 'productivity',
    device: 'laptop',
    price: 1399.99,
    specs: {
      cpu: 'i7',
      ram: '16',
      storage: '512',
      display: '2k',
      colorGamut: 'srgb',
      thunderbolt: true
    },
    image: 'https://images.pexels.com/photos/1229861/pexels-photo-1229861.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    description: 'Versatile 2-in-1 laptop with excellent pen support and premium design.',
    tags: ['productivity', 'convertible', 'premium']
  },
  
  // Productivity Tablets
  {
    id: 'pt001',
    name: 'iPad Pro 12.9',
    category: 'productivity',
    device: 'tablet',
    price: 1099.99,
    specs: {
      processor: 'm1',
      storage: '256',
      stylus: true,
      display: 'miniled'
    },
    image: 'https://images.pexels.com/photos/221185/pexels-photo-221185.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    description: 'Professional tablet with desktop-class performance and exceptional display.',
    tags: ['productivity', 'creative', 'premium']
  },
  {
    id: 'pt002',
    name: 'Samsung Galaxy Tab S8 Ultra',
    category: 'productivity',
    device: 'tablet',
    price: 899.99,
    specs: {
      processor: 'snapdragon8',
      storage: '256',
      stylus: true,
      display: 'oled'
    },
    image: 'https://images.pexels.com/photos/5083411/pexels-photo-5083411.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    description: 'Premium Android tablet with massive display and included S Pen.',
    tags: ['productivity', 'creative', 'premium']
  },
  
  // Daily Use Laptops
  {
    id: 'dl001',
    name: 'MacBook Air M2',
    category: 'daily',
    device: 'laptop',
    price: 1199.99,
    specs: {
      batteryLife: '12',
      weight: 'ultra',
      storage: '256',
      os: 'macos'
    },
    image: 'https://images.pexels.com/photos/303383/pexels-photo-303383.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    description: 'Ultralight laptop with all-day battery life and fanless design.',
    tags: ['daily', 'lightweight', 'premium']
  },
  {
    id: 'dl002',
    name: 'Acer Swift 3',
    category: 'daily',
    device: 'laptop',
    price: 699.99,
    specs: {
      batteryLife: '10',
      weight: 'light',
      storage: '512',
      os: 'windows'
    },
    image: 'https://images.pexels.com/photos/7974/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    description: 'Affordable ultrabook with solid performance and great battery life.',
    tags: ['daily', 'value', 'mid-range']
  },
  
  // Daily Use Mobiles
  {
    id: 'dm001',
    name: 'iPhone 13',
    category: 'daily',
    device: 'mobile',
    price: 799.99,
    specs: {
      batteryCapacity: '3240',
      camera: '12',
      storage: '128',
      os: 'ios',
      waterResistant: true
    },
    image: 'https://images.pexels.com/photos/5747308/pexels-photo-5747308.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    description: 'Flagship iPhone with excellent cameras and performance.',
    tags: ['daily', 'premium', 'reliable']
  },
  {
    id: 'dm002',
    name: 'Samsung Galaxy S22',
    category: 'daily',
    device: 'mobile',
    price: 799.99,
    specs: {
      batteryCapacity: '4000',
      camera: '48',
      storage: '128',
      os: 'android',
      waterResistant: true
    },
    image: 'https://images.pexels.com/photos/9005393/pexels-photo-9005393.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    description: 'Feature-packed Android phone with excellent display and cameras.',
    tags: ['daily', 'premium', 'versatile']
  },
  {
    id: 'dm003',
    name: 'Google Pixel 6a',
    category: 'daily',
    device: 'mobile',
    price: 449.99,
    specs: {
      batteryCapacity: '4410',
      camera: '12',
      storage: '128',
      os: 'android',
      waterResistant: true
    },
    image: 'https://images.pexels.com/photos/7034254/pexels-photo-7034254.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    description: 'Mid-range phone with flagship-level camera and clean software.',
    tags: ['daily', 'value', 'mid-range']
  }
];