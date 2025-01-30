import DayTable from '@/components/day';
import FilterComponent from '@/components/filter/mainComponent';
import MonthTable from '@/components/month';
import SearchSection from '@/components/search';
import WeekTable from '@/components/week';
import { useI18n } from '../../I18nProvider';
import LanguageSwitcher from '@/components/language/LanguageSwitcher';

export default function Home() {
  const { translations } = useI18n();
  return (
    <div className='py-4 px-4'>
      <div className='flex justify-end'>
        <LanguageSwitcher />
      </div>

      <div className='mb-4'>
        <h1 className='text-center font-semibold text-[20px]'>
          {translations.heading}
        </h1>
      </div>
      <div className='mb-2'>
        <SearchSection />
      </div>
      <div className='mb-2 '>
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
