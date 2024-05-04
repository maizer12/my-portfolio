'use client';
import React, { useState } from 'react';
import { Icon } from './Icon';
import { cibCodeClimate, cibCodeigniter, cibXcode } from '@coreui/icons';

function Dropdown() {
  // Состояние для отслеживания выбранного элемента
  const [selectedItem, setSelectedItem] = useState('Выберите элемент');

  // Массив опций для выпадающего списка
  const options = ['Опция 1', 'Опция 2', 'Опция 3'];

  // Функция для изменения выбранного элемента
  const handleSelect = (event) => {
    setSelectedItem(event.target.value);
  };

  return (
    <div>
      <button className="text-light-900 p-2.5 text-[16px] bg-dark-700 min-w-[144px] border-primary-200 border flex items-center gap-3 justify-center">
        Filter: ALL <Icon icon={cibCodeigniter} />
      </button>
    </div>
  );
}

export default Dropdown;
