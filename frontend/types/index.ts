export interface Product {
  id: string;
  name: string;
  category: 'gaming' | 'productivity' | 'daily';
  subcategory?: 'coding' | 'video' | 'photo' | 'animation' | '3d' | 'audio' | 'design';
  device: 'laptop' | 'mobile' | 'desktop' | 'tablet' | 'other';
  price: number;
  specs: Record<string, string | number | boolean>;
  image: string;
  description: string;
  tags: string[];
}

export type CategoryType = 'gaming' | 'productivity' | 'daily';
export type DeviceType = 'laptop' | 'mobile' | 'desktop' | 'tablet' | 'other';
export type SubcategoryType = 'coding' | 'video' | 'photo' | 'animation' | '3d' | 'audio' | 'design';

export interface Filter {
  id: string;
  name: string;
  type: 'checkbox' | 'radio' | 'range' | 'select';
  options?: Array<{
    id: string;
    label: string;
    value: string;
  }>;
  min?: number;
  max?: number;
  unit?: string;
  specKey: string;
}

export interface CategoryConfig {
  name: string;
  icon: string;
  description: string;
  path: string;
  devices: DeviceType[];
  subcategories?: Array<{
    name: string;
    icon: string;
    description: string;
    path: string;
  }>;
  filters: {
    [key in DeviceType]?: Filter[];
  };
}