import React, { useState } from 'react';
import MultiSelect from './index';
import { useI18n } from '../../../I18nProvider';

const MainComponent = () => {
  const { translations } = useI18n();
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
      { value: 'trading on', label: `${translations.Trading_On}` },
      { value: 'trading off', label: `${translations.Trading_Off}` },
    ],
    department: [
      { value: 'Department1', label: `${translations.Department1}` },
      { value: 'Department2', label: `${translations.Department2}` },
      { value: 'Department3', label: `${translations.Department3}` },
    ],
    clientType: [
      { value: 'Client type1', label: `${translations.Client_type1}` },
      { value: 'Client type2', label: `${translations.Client_type2}` },
      { value: 'Client type3', label: `${translations.Client_type3}` },
    ],
    clientStatus: [
      { value: 'Client status1', label: `${translations.Client_status1}` },
      { value: 'Client status2', label: `${translations.Client_status2}` },
      { value: 'Client status3', label: `${translations.Client_status3}` },
    ],
  };

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
    <>
      <div className='grid sm:grid-cols-[1fr,1fr] gap-6 lg:w-[700px] lg:grid-cols-[1fr,1fr,1fr] lg:gap-8'>
        <div className='flex items-center gap-4 '>
          <div>
            <MultiSelect
              name='year'
              label={translations.filter1}
              options={categories.year}
              selectedValue={selectYear}
              onChange={handleCarChange}
            />
          </div>
          <div>
            <MultiSelect
              name='month'
              label={translations.filter2}
              options={categories.month}
              selectedValue={selectedMonth}
              onChange={handleFoodChange}
            />
          </div>
        </div>
        <div className='flex items-center gap-4 '>
          <div>
            <MultiSelect
              name='trading'
              label={translations.filter3}
              options={categories.trading}
              selectedValue={selectedTrading}
              onChange={handleTradding}
            />
          </div>
          <div>
            <MultiSelect
              name='department'
              label={translations.filter4}
              options={categories.department}
              selectedValue={selectedDepartment}
              onChange={handleDepartment}
            />
          </div>
        </div>
        <div className='flex items-center gap-4 '>
          <div>
            <MultiSelect
              name='clientType'
              label={translations.filter5}
              options={categories.clientType}
              selectedValue={selectedClientType}
              onChange={handleClientType}
            />
          </div>
          <div>
            <MultiSelect
              name='clientStatus'
              label={translations.filter6}
              options={categories.clientStatus}
              selectedValue={selectedClientStatus}
              onChange={handleClientStatus}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default MainComponent;
