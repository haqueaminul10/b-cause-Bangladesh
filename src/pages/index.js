import DayTable from '@/components/day';
import FilterComponent from '@/components/filter/mainComponent';
import MonthTable from '@/components/month';
import SearchSection from '@/components/search';
import WeekTable from '@/components/week';

export default function Home() {
  return (
    <div className='py-4 px-4'>
      <div className='mb-4'>
        <h1 className='text-center font-semibold text-[20px]'>
          Monthly, daily, by day Sales
        </h1>
      </div>
      <div className='mb-2'>
        <SearchSection />
      </div>
      <div className='mb-2'>
        <FilterComponent />
      </div>
      <div className='mb-4'>
        <DayTable />
      </div>
      <div className='mb-4'>
        <MonthTable />
      </div>
      <div>
        <WeekTable />
      </div>
    </div>
  );
}
