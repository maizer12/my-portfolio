'use client';
import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { Icon } from '../common/Icon';
import { cibCodeClimate, cibCodeigniter, cibXcode } from '@coreui/icons';

function Dropdown() {
  const [selectedItem, setSelectedItem] = useState('Выберите элемент');
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const options = ['one', 'two', 'Опция 3'];

  const handleSelect = (option: string) => {
    setSelectedItem(option);
    setIsOpen(false);
    window.history.pushState(null, '', `?filter=${option}`);
    window.dispatchEvent(new Event('popstate'));
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
        {selectedItem} <Icon icon={cibCodeigniter} className="w-6 fill-primary-200" />
      </button>
      {isOpen && (
        <ul className="absolute bg-dark-700 border border-primary-200 mt-2">
          {options.map((option, index) => (
            <li key={index} className="p-2 hover:bg-dark-500 cursor-pointer" onClick={() => handleSelect(option)}>
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Dropdown;
