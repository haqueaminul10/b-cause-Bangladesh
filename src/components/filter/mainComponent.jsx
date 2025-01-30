import React, { useState } from 'react';
import MultiSelect from './index';

const categories = {
  year: [
    { value: '2025', label: '2025' },
    { value: '2024', label: '2024' },
    { value: '2023', label: '2023' },
    { value: '2022', label: '2022' },
  ],
  month: [
    { value: '1', label: '1' },
    { value: '2', label: '2' },
    { value: '3', label: '3' },
    { value: '4', label: '4' },
    { value: '5', label: '5' },
    { value: '6', label: '6' },
    { value: '7', label: '7' },
    { value: '8', label: '8' },
    { value: '9', label: '9' },
    { value: '10', label: '10' },
    { value: '11', label: '11' },
    { value: '12', label: '12' },
  ],
  trading: [
    { value: 'trading on', label: 'Trading On' },
    { value: 'trading off', label: 'Trading Off' },
  ],
  department: [
    { value: 'Department1', label: 'Department1' },
    { value: 'Department2', label: 'Department2' },
    { value: 'Department3', label: 'Department3' },
  ],
  clientType: [
    { value: 'Client type1', label: 'Client type1' },
    { value: 'Client type2', label: 'Client type2' },
    { value: 'Client type3', label: 'Client type3' },
  ],
  clientStatus: [
    { value: 'Client status1', label: 'Client status1' },
    { value: 'Client status2', label: 'Client status2' },
    { value: 'Client status3', label: 'Client status3' },
  ],
};

const MainComponent = () => {
  const [selectYear, setSelectYear] = useState('');
  const [selectedMonth, setSelectedMonth] = useState('');
  const [selectedTrading, setSelectedTrading] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('');
  const [selectedClientType, setSelectedClientType] = useState('');
  const [selectedClientStatus, setSelectedClientStatus] = useState('');

  const handleCarChange = (event) => setSelectYear(event.target.value);
  const handleFoodChange = (event) => setSelectedMonth(event.target.value);
  const handleTradding = (event) => setSelectedTrading(event.target.value);
  const handleDepartment = (event) => setSelectedDepartment(event.target.value);
  const handleClientType = (event) => setSelectedClientType(event.target.value);
  const handleClientStatus = (event) =>
    setSelectedClientStatus(event.target.value);

  return (
    <div className='flex justify-center lg:justify-start '>
      <div className='lg:flex lg:items-center gap-4'>
        <div className='sm:flex sm:items-center sm:gap-4 sm:justify-center'>
          <div className='flex items-center gap-4 mb-4 sm:gap-2'>
            <div>
              <MultiSelect
                name='year'
                options={categories.year}
                selectedValue={selectYear}
                onChange={handleCarChange}
              />
            </div>
            <div>
              <MultiSelect
                name='month'
                options={categories.month}
                selectedValue={selectedMonth}
                onChange={handleFoodChange}
              />
            </div>
          </div>

          <div className='flex items-center gap-4 mb-4 sm:gap-2 '>
            <div>
              <MultiSelect
                name='trading'
                options={categories.trading}
                selectedValue={selectedTrading}
                onChange={handleTradding}
              />
            </div>
            <div>
              <MultiSelect
                name='department'
                options={categories.department}
                selectedValue={selectedDepartment}
                onChange={handleDepartment}
              />
            </div>
          </div>
        </div>
        <div className='flex items-center gap-4 mb-4 sm:justify-center lg:gap-2'>
          <div>
            <MultiSelect
              name='clientType'
              options={categories.clientType}
              selectedValue={selectedClientType}
              onChange={handleClientType}
            />
          </div>
          <div>
            <MultiSelect
              name='clientStatus'
              options={categories.clientStatus}
              selectedValue={selectedClientStatus}
              onChange={handleClientStatus}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainComponent;
