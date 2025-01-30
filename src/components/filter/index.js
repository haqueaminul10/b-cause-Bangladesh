import React from 'react';

const MultiSelect = ({ name, options, selectedValue, onChange }) => {
  return (
    <div className='inline-block  '>
      <select
        id={name}
        name={name}
        value={selectedValue}
        onChange={onChange}
        className='w-[150px] sm:w-[140px] border border-black'
      >
        {options.map((option) => (
          <option
            key={option.value}
            value={option.value}
            className='text-right'
          >
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default MultiSelect;
