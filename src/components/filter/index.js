import React from 'react';

const MultiSelect = ({ name, label, options, selectedValue, onChange }) => {
  return (
    <div className='inline-block  '>
      <label
        htmlFor={name}
        className='block text-sm font-medium text-gray-700 mb-1'
      >
        {label}
      </label>
      <select
        id={name}
        name={name}
        value={selectedValue}
        onChange={onChange}
        className='w-[130px] sm:w-[130px] border border-black'
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
