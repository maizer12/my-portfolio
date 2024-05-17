'use client';
import React, { useState, useEffect, useRef } from 'react';
import { Icon } from '../common/Icon';
import { cibCodeClimate } from '@coreui/icons';
import {
  cibReact,
  cibNextJs,
  cibVueJs,
  cibTypescript,
  cibNodeJs,
  cibSocketIo,
  cibElectron,
  cibJquery,
} from '@coreui/icons';

import { SelectItemType } from '@/models/SelectItem.type';
import useUpdateQueryParams from '@/utils/updateQueryParams';

function Dropdown() {
  const [selectedItem, setSelectedItem] = useState({ value: '', label: 'All', icon: cibCodeClimate });
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const updateQueryParams = useUpdateQueryParams();

  const options: SelectItemType[] = [
    { value: '', label: 'All', icon: cibCodeClimate, fill: 'fill-slate-200' },
    { value: 'react', label: 'React', icon: cibReact, fill: 'fill-blue-600' },
    { value: 'next', label: 'Next', icon: cibNextJs, fill: 'fill-white' },
    { value: 'vue', label: 'Vue', icon: cibVueJs, fill: 'fill-green-500' },
    { value: 'ts', label: 'TS', icon: cibTypescript, fill: 'fill-blue-400' },
    { value: 'node', label: 'Node', icon: cibNodeJs, fill: 'fill-green-600' },
    { value: 'websocket', label: 'Websocket', icon: cibSocketIo, fill: 'fill-gray-400' },
    { value: 'electron', label: 'Electron', icon: cibElectron, fill: 'fill-blue-700' },
    { value: 'jquery', label: 'Jquery', icon: cibJquery, fill: 'fill-blue-500' },
  ];

  const handleSelect = (option: SelectItemType) => {
    setSelectedItem(option);
    setIsOpen(false);
    updateQueryParams('filter', option.value);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div ref={dropdownRef}>
      <button
        className="text-light-900 p-2.5 text-[16px] bg-dark-700 min-w-[144px] border-primary-200 border flex items-center gap-3 justify-center"
        onClick={() => setIsOpen(!isOpen)}
      >
        {selectedItem.label} <Icon icon={selectedItem.icon} className="w-6 fill-primary-200" />
      </button>
      {isOpen && (
        <ul className="absolute bg-dark-700 border border-primary-200 mt-2 min-w-[180px] gap-10 max-h-[220px] overflow-auto">
          {options.map((option, index) => (
            <li
              key={index}
              className={`hover:bg-dark-500 cursor-pointer flex text-light-900 justify-between p-4 py-2 fill-primary-200 
              ${option.value === selectedItem.value ? ' bg-primary-700 fill-light-900' : ''}`}
              onClick={() => handleSelect(option)}
            >
              {option.label}
              {!!option.icon && <Icon icon={option.icon} className={`w-6 ${option.fill}`} />}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Dropdown;
