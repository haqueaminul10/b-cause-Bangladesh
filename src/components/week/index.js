// import data from './week.json';
import { useI18n } from '../../../I18nProvider';

const WeekTable = () => {
  const { translations } = useI18n();
  const data = [
    {
      id: 1,
      day: `${translations.Monday}`,
      estimated_number: 100,
      estimated_amount: 1500,
      number_of_order: 90,
      order_amount: 1350,
      percent_number: 90,
      parcent_amount: 97,
      siteestimation_number: 110,
      siteestimationpe: 0.75,
    },
    {
      id: 2,
      day: `${translations.Tuesday}`,
      estimated_number: 120,
      estimated_amount: 1800,
      number_of_order: 110,
      order_amount: 1650,
      percent_number: 91.67,
      parcent_amount: 97,
      siteestimation_number: 130,
      siteestimationpe: 0.76,
    },
    {
      id: 3,
      day: `${translations.Wednesday}`,
      estimated_number: 130,
      estimated_amount: 1950,
      number_of_order: 120,
      order_amount: 1800,
      percent_number: 92.31,
      parcent_amount: 97,
      siteestimation_number: 140,
      siteestimationpe: 0.77,
    },
    {
      id: 4,
      day: `${translations.Thursday}`,
      estimated_number: 140,
      estimated_amount: 2100,
      number_of_order: 130,
      order_amount: 1950,
      percent_number: 92.86,
      parcent_amount: 97,
      siteestimation_number: 150,
      siteestimationpe: 0.78,
    },
    {
      id: 5,
      day: `${translations.Friday}`,
      estimated_number: 150,
      estimated_amount: 2250,
      number_of_order: 140,
      order_amount: 2100,
      percent_number: 93.33,
      parcent_amount: 97,
      siteestimation_number: 160,
      siteestimationpe: 0.79,
    },
    {
      id: 6,
      day: `${translations.Saturday}`,
      estimated_number: 160,
      estimated_amount: 2400,
      number_of_order: 150,
      order_amount: 2250,
      percent_number: 93.75,
      parcent_amount: 97,
      siteestimation_number: 170,
      siteestimationpe: 0.8,
    },
    {
      id: 7,
      day: `${translations.Sunday}`,
      estimated_number: 170,
      estimated_amount: 2550,
      number_of_order: 160,
      order_amount: 2400,
      percent_number: 94.12,
      parcent_amount: 97,
      siteestimation_number: 180,
      siteestimationpe: 0.81,
    },
  ];

  return (
    <>
      <div className='overflow-x-auto max-w-full'>
        <table className='min-w-full bg-white border border-black'>
          <thead className=''>
            <tr>
              <th className='  lg:py-2 lg:px-4 border-b text-center border border-black lg:w-[150px] '>
                {translations.week}
              </th>
              <th className='py-2 px-4 border-b text-center border border-black'>
                {translations.Estimated_Number}
              </th>
              <th className='py-2 px-4 border-b text-center border border-black'>
                {translations.Estimated_Amount}
              </th>
              <th className='py-2 px-4 border-b text-center border border-black'>
                {translations.Number_of_Order}
              </th>
              <th className='py-2 px-4 border-b text-center border border-black'>
                {translations.Order_Amount}
              </th>

              <th className='py-2 px-4 border-b text-center border border-black'>
                {translations.pNumber}
              </th>
              <th className='py-2 px-4 border-b text-center border border-black'>
                {translations.pAmount}
              </th>
              <th className='py-2 px-4 border-b text-center border border-black'>
                {translations.Site_Estimation_Number}
              </th>
              <th className='py-2 px-4 border-b text-center border border-black'>
                {translations.Site_Estimation_PE}
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id}>
                <td className='lg:py-2 lg:px-4 border-b border border-black text-center'>
                  {item.day}
                </td>
                <td className='py-2 px-4 border-b border border-black text-center bg-[#ffc000]'>
                  {item.estimated_number}
                </td>
                <td className='py-2 px-4 border-b border border-black text-center bg-[#ffc000]'>
                  {item.estimated_amount}
                </td>
                <td className='py-2 px-4 border-b border border-black text-center bg-[#ffc000]'>
                  {item.number_of_order}
                </td>
                <td className='py-2 px-4 border-b border border-black text-center bg-[#ffc000]'>
                  {item.order_amount}
                </td>
                <td className='py-2 px-4 border-b border border-black text-center bg-[#ffc000]'>
                  {item.percent_number}%
                </td>
                <td className='py-2 px-4 border-b border border-black text-center bg-[#ffc000]'>
                  {item.percent_amount}%
                </td>
                <td className='py-2 px-4 border-b border border-black text-center bg-[#ffc000]'>
                  {item.siteestimation_number}
                </td>
                <td className='py-2 px-4 border-b border border-black text-center bg-[#ffc000]'>
                  {item.siteestimationpe}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default WeekTable;
