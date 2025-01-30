import React, { useState } from 'react';
import { useI18n } from '../../../I18nProvider';

const SearchSection = () => {
  const { translations } = useI18n();

  const [inputValue, setInputValue] = useState('');

  const handleClear = () => {
    setInputValue('');
  };

  return (
    <div className='flex items-center gap-6'>
      <div>
        <input
          type='text'
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className='border border-black w-[150px] h-[30px] sm:w-full bg-yellow-400 px-2'
          placeholder={translations.search}
        />
      </div>
      <div>
        <button
          onClick={handleClear}
          className='bg-yellow-400 text-black p-1 rounded-md'
        >
          {translations.clear}
        </button>
      </div>
    </div>
  );
};

export default SearchSection;
