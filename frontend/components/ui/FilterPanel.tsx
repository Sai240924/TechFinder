import React, { useState } from 'react';
import { Filter } from '../../types';
import { ChevronDown, ChevronUp, Filter as Filters, X } from 'lucide-react';

interface FilterPanelProps {
  filters: Filter[];
  activeFilters: Record<string, string>;
  onFilterChange: (filterId: string, value: string) => void;
  onClearFilters: () => void;
}

const FilterPanel: React.FC<FilterPanelProps> = ({
  filters,
  activeFilters,
  onFilterChange,
  onClearFilters,
}) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const activeFilterCount = Object.keys(activeFilters).length;

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden mb-6">
      <div 
        className="flex items-center justify-between p-4 bg-slate-100 cursor-pointer"
        onClick={() => setIsCollapsed(!isCollapsed)}
      >
        <div className="flex items-center gap-2">
          <Filters size={18} className="text-slate-700" />
          <h3 className="font-medium text-slate-800">Filters</h3>
          {activeFilterCount > 0 && (
            <span className="bg-teal-500 text-white text-xs font-medium px-2 py-1 rounded-full">
              {activeFilterCount}
            </span>
          )}
        </div>
        <div className="flex items-center gap-3">
          {activeFilterCount > 0 && (
            <button 
              onClick={(e) => {
                e.stopPropagation();
                onClearFilters();
              }}
              className="text-sm text-slate-600 hover:text-red-500 flex items-center gap-1"
            >
              <X size={14} />
              Clear all
            </button>
          )}
          {isCollapsed ? (
            <ChevronDown size={18} className="text-slate-600" />
          ) : (
            <ChevronUp size={18} className="text-slate-600" />
          )}
        </div>
      </div>

      {!isCollapsed && (
        <div className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filters.map((filter) => (
            <div key={filter.id} className="space-y-2">
              <label className="block text-sm font-medium text-slate-700">
                {filter.name}
              </label>
              
              {filter.type === 'select' && filter.options && (
                <select
                  value={activeFilters[filter.id] || ''}
                  onChange={(e) => onFilterChange(filter.id, e.target.value)}
                  className="w-full p-2 border border-slate-300 rounded-md text-sm focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                >
                  <option value="">All options</option>
                  {filter.options.map((option) => (
                    <option key={option.id} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              )}
              
              {filter.type === 'checkbox' && filter.options && (
                <div className="space-y-1">
                  {filter.options.map((option) => (
                    <div key={option.id} className="flex items-center">
                      <input
                        type="radio"
                        id={`${filter.id}-${option.id}`}
                        name={filter.id}
                        checked={activeFilters[filter.id] === option.value}
                        onChange={() => onFilterChange(filter.id, option.value)}
                        className="h-4 w-4 text-teal-500 focus:ring-teal-400"
                      />
                      <label
                        htmlFor={`${filter.id}-${option.id}`}
                        className="ml-2 text-sm text-slate-700"
                      >
                        {option.label}
                      </label>
                    </div>
                  ))}
                </div>
              )}
              
              {filter.type === 'range' && (
                <input
                  type="range"
                  min={filter.min}
                  max={filter.max}
                  value={activeFilters[filter.id] || filter.min}
                  onChange={(e) => onFilterChange(filter.id, e.target.value)}
                  className="w-full"
                />
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FilterPanel;