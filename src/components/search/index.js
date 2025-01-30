import React, { useState } from 'react';

const SearchSection = () => {
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
        />
      </div>
      <div>
        <button
          onClick={handleClear}
          className='bg-yellow-400 text-black p-1 rounded-md'
        >
          Clear
        </button>
      </div>
    </div>
  );
};

export default SearchSection;
