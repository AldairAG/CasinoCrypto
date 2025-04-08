import React from "react";
import { twMerge } from "tailwind-merge";

interface SelectableListProps {
  items: string[];
  selectedItem: string;
  onSelect: (item: string) => void;
  className?: string;
  itemClassName?: string;
  activeItemClassName?: string;
  error?: string;
}

const SelectableList: React.FC<SelectableListProps> = ({ 
  items, 
  selectedItem, 
  onSelect, 
  className = "",
  itemClassName = "",
  activeItemClassName = "",
  error
}) => {
  return (
    <div className={twMerge("space-y-2", className)}>
      {items.map((item) => (
        <div
          key={item}
          onClick={() => onSelect(item)}
          className={twMerge(
            "p-3 border border-gray-300 rounded-lg cursor-pointer transition-colors hover:bg-gray-50",
            selectedItem === item && "border-blue-500 bg-blue-50",
            selectedItem === item && activeItemClassName,
            itemClassName
          )}
        >
          <span className="text-gray-900">{item}</span>
        </div>
      ))}
      {error && (
        <p className="mt-1 text-sm text-red-600">{error}</p>
      )}
    </div>
  );
};

export default SelectableList;