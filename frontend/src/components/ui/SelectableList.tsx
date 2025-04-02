import React from "react";

interface SelectableListProps {
  items: string[];
  selectedItem: string;
  onSelect: (item: string) => void;
  className?: string;
  error?: string;
}

const SelectableList: React.FC<SelectableListProps> = ({ 
  items, 
  selectedItem, 
  onSelect, 
  className = "",
  error
}) => {
  return (
    <div className={`${className}`}>
      <div className="space-y-2">
        {items.map((item) => (
          <div
            key={item}
            onClick={() => onSelect(item)}
            className={`p-3 border rounded-lg cursor-pointer transition-colors ${
              selectedItem === item
                ? "border-blue-500 bg-blue-50 dark:bg-gray-700"
                : "border-gray-300 hover:bg-gray-50 dark:border-gray-600 dark:hover:bg-gray-700"
            }`}
          >
            <span className="dark:text-white">{item}</span>
          </div>
        ))}
      </div>
      {error && (
        <p className="mt-1 text-sm text-red-600 dark:text-red-500">{error}</p>
      )}
    </div>
  );
};

export default SelectableList;