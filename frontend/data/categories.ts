import { CategoryConfig } from '../types';

export const categories: CategoryConfig[] = [
  {
    name: 'Gaming',
    icon: 'gamepad',
    description: 'High-performance devices optimized for the best gaming experience',
    path: 'gaming',
    devices: ['laptop', 'desktop', 'mobile', 'tablet', 'other'],
    filters: {
      laptop: [
        {
          id: 'cpu',
          name: 'CPU',
          type: 'select',
          options: [
            { id: 'i5', label: 'Intel Core i5', value: 'i5' },
            { id: 'i7', label: 'Intel Core i7', value: 'i7' },
            { id: 'i9', label: 'Intel Core i9', value: 'i9' },
            { id: 'ryzen5', label: 'AMD Ryzen 5', value: 'ryzen5' },
            { id: 'ryzen7', label: 'AMD Ryzen 7', value: 'ryzen7' },
            { id: 'ryzen9', label: 'AMD Ryzen 9', value: 'ryzen9' }
          ],
          specKey: 'cpu'
        },
        {
          id: 'gpu',
          name: 'GPU',
          type: 'select',
          options: [
            { id: 'rtx3050', label: 'NVIDIA RTX 3050', value: 'rtx3050' },
            { id: 'rtx3060', label: 'NVIDIA RTX 3060', value: 'rtx3060' },
            { id: 'rtx3070', label: 'NVIDIA RTX 3070', value: 'rtx3070' },
            { id: 'rtx3080', label: 'NVIDIA RTX 3080', value: 'rtx3080' },
            { id: 'rx6600', label: 'AMD RX 6600', value: 'rx6600' },
            { id: 'rx6700', label: 'AMD RX 6700', value: 'rx6700' },
            { id: 'rx6800', label: 'AMD RX 6800', value: 'rx6800' }
          ],
          specKey: 'gpu'
        },
        {
          id: 'ram',
          name: 'RAM',
          type: 'select',
          options: [
            { id: '8gb', label: '8GB', value: '8' },
            { id: '16gb', label: '16GB', value: '16' },
            { id: '32gb', label: '32GB', value: '32' },
            { id: '64gb', label: '64GB', value: '64' }
          ],
          specKey: 'ram'
        },
        {
          id: 'storage',
          name: 'Storage',
          type: 'select',
          options: [
            { id: '256gb', label: '256GB SSD', value: '256' },
            { id: '512gb', label: '512GB SSD', value: '512' },
            { id: '1tb', label: '1TB SSD', value: '1024' },
            { id: '2tb', label: '2TB SSD', value: '2048' }
          ],
          specKey: 'storage'
        },
        {
          id: 'screen',
          name: 'Screen Size',
          type: 'select',
          options: [
            { id: '14', label: '14"', value: '14' },
            { id: '15', label: '15.6"', value: '15.6' },
            { id: '16', label: '16"', value: '16' },
            { id: '17', label: '17.3"', value: '17.3' }
          ],
          specKey: 'screenSize'
        }
      ],
      desktop: [
        {
          id: 'cpu',
          name: 'CPU',
          type: 'select',
          options: [
            { id: 'i5', label: 'Intel Core i5', value: 'i5' },
            { id: 'i7', label: 'Intel Core i7', value: 'i7' },
            { id: 'i9', label: 'Intel Core i9', value: 'i9' },
            { id: 'ryzen5', label: 'AMD Ryzen 5', value: 'ryzen5' },
            { id: 'ryzen7', label: 'AMD Ryzen 7', value: 'ryzen7' },
            { id: 'ryzen9', label: 'AMD Ryzen 9', value: 'ryzen9' }
          ],
          specKey: 'cpu'
        },
        {
          id: 'gpu',
          name: 'GPU',
          type: 'select',
          options: [
            { id: 'rtx3060', label: 'NVIDIA RTX 3060', value: 'rtx3060' },
            { id: 'rtx3070', label: 'NVIDIA RTX 3070', value: 'rtx3070' },
            { id: 'rtx3080', label: 'NVIDIA RTX 3080', value: 'rtx3080' },
            { id: 'rtx3090', label: 'NVIDIA RTX 3090', value: 'rtx3090' },
            { id: 'rx6700', label: 'AMD RX 6700', value: 'rx6700' },
            { id: 'rx6800', label: 'AMD RX 6800', value: 'rx6800' },
            { id: 'rx6900', label: 'AMD RX 6900', value: 'rx6900' }
          ],
          specKey: 'gpu'
        },
        {
          id: 'ram',
          name: 'RAM',
          type: 'select',
          options: [
            { id: '16gb', label: '16GB', value: '16' },
            { id: '32gb', label: '32GB', value: '32' },
            { id: '64gb', label: '64GB', value: '64' },
            { id: '128gb', label: '128GB', value: '128' }
          ],
          specKey: 'ram'
        },
        {
          id: 'storage',
          name: 'Storage',
          type: 'select',
          options: [
            { id: '512gb', label: '512GB SSD', value: '512' },
            { id: '1tb', label: '1TB SSD', value: '1024' },
            { id: '2tb', label: '2TB SSD', value: '2048' },
            { id: '4tb', label: '4TB SSD', value: '4096' }
          ],
          specKey: 'storage'
        },
        {
          id: 'cooling',
          name: 'Cooling',
          type: 'select',
          options: [
            { id: 'air', label: 'Air Cooling', value: 'air' },
            { id: 'aio', label: 'AIO Liquid Cooling', value: 'aio' },
            { id: 'custom', label: 'Custom Loop', value: 'custom' }
          ],
          specKey: 'cooling'
        }
      ],
      mobile: [
        {
          id: 'processor',
          name: 'Processor',
          type: 'select',
          options: [
            { id: 'snapdragon8', label: 'Snapdragon 8', value: 'snapdragon8' },
            { id: 'snapdragon7', label: 'Snapdragon 7', value: 'snapdragon7' },
            { id: 'dimensity9000', label: 'Dimensity 9000', value: 'dimensity9000' },
            { id: 'a15', label: 'Apple A15', value: 'a15' },
            { id: 'a16', label: 'Apple A16', value: 'a16' }
          ],
          specKey: 'processor'
        },
        {
          id: 'ram',
          name: 'RAM',
          type: 'select',
          options: [
            { id: '6gb', label: '6GB', value: '6' },
            { id: '8gb', label: '8GB', value: '8' },
            { id: '12gb', label: '12GB', value: '12' },
            { id: '16gb', label: '16GB', value: '16' }
          ],
          specKey: 'ram'
        },
        {
          id: 'storage',
          name: 'Storage',
          type: 'select',
          options: [
            { id: '128gb', label: '128GB', value: '128' },
            { id: '256gb', label: '256GB', value: '256' },
            { id: '512gb', label: '512GB', value: '512' },
            { id: '1tb', label: '1TB', value: '1024' }
          ],
          specKey: 'storage'
        },
        {
          id: 'refreshRate',
          name: 'Refresh Rate',
          type: 'select',
          options: [
            { id: '60hz', label: '60Hz', value: '60' },
            { id: '90hz', label: '90Hz', value: '90' },
            { id: '120hz', label: '120Hz', value: '120' },
            { id: '144hz', label: '144Hz', value: '144' }
          ],
          specKey: 'refreshRate'
        }
      ]
    }
  },
  {
    name: 'Productivity & Creativity',
    icon: 'laptop',
    description: 'Tools designed for professional work and creative pursuits',
    path: 'productivity',
    devices: ['laptop', 'desktop', 'tablet', 'mobile', 'other'],
    subcategories: [
      {
        name: 'Coding & Development',
        icon: 'code',
        description: 'Powerful machines for software development and coding',
        path: 'coding'
      },
      {
        name: 'Video Editing',
        icon: 'video',
        description: 'High-performance systems for video production',
        path: 'video'
      },
      {
        name: 'Photo Editing',
        icon: 'image',
        description: 'Color-accurate displays and fast storage for photo work',
        path: 'photo'
      },
      {
        name: 'Animation & Motion',
        icon: 'clapperboard',
        description: 'Specialized tools for animation and motion graphics',
        path: 'animation'
      },
      {
        name: '3D Modeling',
        icon: 'box',
        description: 'Workstations for 3D modeling and rendering',
        path: '3d'
      },
      {
        name: 'Audio Production',
        icon: 'music',
        description: 'Audio interfaces and processing power for music production',
        path: 'audio'
      },
      {
        name: 'Graphic Design',
        icon: 'pen',
        description: 'Creative tools for graphic design and illustration',
        path: 'design'
      }
    ],
    filters: {
      laptop: [
        {
          id: 'cpu',
          name: 'CPU',
          type: 'select',
          options: [
            { id: 'i5', label: 'Intel Core i5', value: 'i5' },
            { id: 'i7', label: 'Intel Core i7', value: 'i7' },
            { id: 'i9', label: 'Intel Core i9', value: 'i9' },
            { id: 'ryzen5', label: 'AMD Ryzen 5', value: 'ryzen5' },
            { id: 'ryzen7', label: 'AMD Ryzen 7', value: 'ryzen7' },
            { id: 'ryzen9', label: 'AMD Ryzen 9', value: 'ryzen9' },
            { id: 'm1', label: 'Apple M1', value: 'm1' },
            { id: 'm2', label: 'Apple M2', value: 'm2' }
          ],
          specKey: 'cpu'
        },
        {
          id: 'ram',
          name: 'RAM',
          type: 'select',
          options: [
            { id: '8gb', label: '8GB', value: '8' },
            { id: '16gb', label: '16GB', value: '16' },
            { id: '32gb', label: '32GB', value: '32' },
            { id: '64gb', label: '64GB', value: '64' }
          ],
          specKey: 'ram'
        },
        {
          id: 'storage',
          name: 'Storage',
          type: 'select',
          options: [
            { id: '256gb', label: '256GB SSD', value: '256' },
            { id: '512gb', label: '512GB SSD', value: '512' },
            { id: '1tb', label: '1TB SSD', value: '1024' },
            { id: '2tb', label: '2TB SSD', value: '2048' }
          ],
          specKey: 'storage'
        },
        {
          id: 'display',
          name: 'Display',
          type: 'select',
          options: [
            { id: 'fhd', label: 'Full HD', value: 'fhd' },
            { id: '2k', label: '2K', value: '2k' },
            { id: '4k', label: '4K', value: '4k' },
            { id: 'retina', label: 'Retina', value: 'retina' }
          ],
          specKey: 'display'
        },
        {
          id: 'colorGamut',
          name: 'Color Gamut',
          type: 'select',
          options: [
            { id: 'srgb', label: '100% sRGB', value: 'srgb' },
            { id: 'adobergb', label: 'Adobe RGB', value: 'adobergb' },
            { id: 'dcip3', label: 'DCI-P3', value: 'dcip3' }
          ],
          specKey: 'colorGamut'
        },
        {
          id: 'thunderbolt',
          name: 'Thunderbolt',
          type: 'checkbox',
          options: [
            { id: 'yes', label: 'Yes', value: 'yes' },
            { id: 'no', label: 'No', value: 'no' }
          ],
          specKey: 'thunderbolt'
        }
      ],
      tablet: [
        {
          id: 'processor',
          name: 'Processor',
          type: 'select',
          options: [
            { id: 'a13', label: 'Apple A13', value: 'a13' },
            { id: 'a14', label: 'Apple A14', value: 'a14' },
            { id: 'a15', label: 'Apple A15', value: 'a15' },
            { id: 'm1', label: 'Apple M1', value: 'm1' },
            { id: 'snapdragon8', label: 'Snapdragon 8', value: 'snapdragon8' }
          ],
          specKey: 'processor'
        },
        {
          id: 'storage',
          name: 'Storage',
          type: 'select',
          options: [
            { id: '64gb', label: '64GB', value: '64' },
            { id: '128gb', label: '128GB', value: '128' },
            { id: '256gb', label: '256GB', value: '256' },
            { id: '512gb', label: '512GB', value: '512' },
            { id: '1tb', label: '1TB', value: '1024' }
          ],
          specKey: 'storage'
        },
        {
          id: 'stylus',
          name: 'Stylus Support',
          type: 'checkbox',
          options: [
            { id: 'yes', label: 'Yes', value: 'yes' },
            { id: 'no', label: 'No', value: 'no' }
          ],
          specKey: 'stylus'
        },
        {
          id: 'display',
          name: 'Display',
          type: 'select',
          options: [
            { id: 'lcd', label: 'LCD', value: 'lcd' },
            { id: 'oled', label: 'OLED', value: 'oled' },
            { id: 'miniled', label: 'Mini-LED', value: 'miniled' },
            { id: 'retina', label: 'Retina', value: 'retina' }
          ],
          specKey: 'display'
        }
      ]
    }
  },
  {
    name: 'Daily Use',
    icon: 'smartphone',
    description: 'Reliable devices for everyday tasks and communication',
    path: 'daily',
    devices: ['laptop', 'mobile', 'tablet', 'desktop', 'other'],
    filters: {
      laptop: [
        {
          id: 'battery',
          name: 'Battery Life',
          type: 'select',
          options: [
            { id: '6hr', label: '6+ hours', value: '6' },
            { id: '8hr', label: '8+ hours', value: '8' },
            { id: '10hr', label: '10+ hours', value: '10' },
            { id: '12hr', label: '12+ hours', value: '12' }
          ],
          specKey: 'batteryLife'
        },
        {
          id: 'weight',
          name: 'Weight',
          type: 'select',
          options: [
            { id: 'ultra', label: 'Ultra-light (<1.2kg)', value: 'ultra' },
            { id: 'light', label: 'Light (1.2-1.5kg)', value: 'light' },
            { id: 'medium', label: 'Medium (1.5-2kg)', value: 'medium' },
            { id: 'heavy', label: 'Heavy (>2kg)', value: 'heavy' }
          ],
          specKey: 'weight'
        },
        {
          id: 'storage',
          name: 'Storage',
          type: 'select',
          options: [
            { id: '256gb', label: '256GB SSD', value: '256' },
            { id: '512gb', label: '512GB SSD', value: '512' },
            { id: '1tb', label: '1TB SSD', value: '1024' }
          ],
          specKey: 'storage'
        },
        {
          id: 'os',
          name: 'Operating System',
          type: 'select',
          options: [
            { id: 'windows', label: 'Windows', value: 'windows' },
            { id: 'macos', label: 'macOS', value: 'macos' },
            { id: 'linux', label: 'Linux', value: 'linux' },
            { id: 'chrome', label: 'ChromeOS', value: 'chrome' }
          ],
          specKey: 'os'
        }
      ],
      mobile: [
        {
          id: 'battery',
          name: 'Battery Capacity',
          type: 'select',
          options: [
            { id: '3000', label: '3000+ mAh', value: '3000' },
            { id: '4000', label: '4000+ mAh', value: '4000' },
            { id: '5000', label: '5000+ mAh', value: '5000' }
          ],
          specKey: 'batteryCapacity'
        },
        {
          id: 'camera',
          name: 'Camera',
          type: 'select',
          options: [
            { id: '12mp', label: '12+ MP', value: '12' },
            { id: '48mp', label: '48+ MP', value: '48' },
            { id: '64mp', label: '64+ MP', value: '64' },
            { id: '108mp', label: '108+ MP', value: '108' }
          ],
          specKey: 'camera'
        },
        {
          id: 'storage',
          name: 'Storage',
          type: 'select',
          options: [
            { id: '64gb', label: '64GB', value: '64' },
            { id: '128gb', label: '128GB', value: '128' },
            { id: '256gb', label: '256GB', value: '256' },
            { id: '512gb', label: '512GB', value: '512' }
          ],
          specKey: 'storage'
        },
        {
          id: 'os',
          name: 'Operating System',
          type: 'select',
          options: [
            { id: 'android', label: 'Android', value: 'android' },
            { id: 'ios', label: 'iOS', value: 'ios' }
          ],
          specKey: 'os'
        },
        {
          id: 'waterResistant',
          name: 'Water Resistant',
          type: 'checkbox',
          options: [
            { id: 'yes', label: 'Yes', value: 'yes' },
            { id: 'no', label: 'No', value: 'no' }
          ],
          specKey: 'waterResistant'
        }
      ]
    }
  }
];