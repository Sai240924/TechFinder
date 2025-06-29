import React from 'react';
import * as LucideIcons from 'lucide-react';
import { DeviceType } from '../../types';

interface DeviceSelectorProps {
  devices: DeviceType[];
  selectedDevice: DeviceType;
  onSelectDevice: (device: DeviceType) => void;
}

const DeviceSelector: React.FC<DeviceSelectorProps> = ({
  devices,
  selectedDevice,
  onSelectDevice,
}) => {
  // Map device types to icons
  const deviceIcons: Record<DeviceType, string> = {
    laptop: 'Laptop',
    desktop: 'Monitor',
    mobile: 'Smartphone',
    tablet: 'Tablet',
    other: 'Headphones',
  };

  // Map device types to display names
  const deviceNames: Record<DeviceType, string> = {
    laptop: 'Laptops',
    desktop: 'Desktops',
    mobile: 'Mobiles',
    tablet: 'Tablets',
    other: 'Accessories',
  };

  return (
    <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-8">
      {devices.map((device) => {
        const isSelected = device === selectedDevice;
        const IconComponent = ((LucideIcons as unknown) as Record<string, React.FC<React.SVGProps<SVGSVGElement> & { size?: number }>>)[
          deviceIcons[device]
        ];

        return (
          <button
            key={device}
            onClick={() => onSelectDevice(device)}
            className={`
              flex flex-col items-center px-4 py-3 rounded-lg transition-all duration-300
              ${isSelected 
                ? 'bg-teal-100 text-teal-700 shadow-md' 
                : 'bg-white text-slate-600 hover:bg-slate-50'}
            `}
          >
            {IconComponent && (
              <IconComponent
                size={24}
                className={`mb-2 ${isSelected ? 'text-teal-600' : 'text-slate-500'}`}
              />
            )}
            <span className="text-sm font-medium">{deviceNames[device]}</span>
          </button>
        );
      })}
    </div>
  );
};

export default DeviceSelector;