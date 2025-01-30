// import data from './month';
import { useI18n } from '../../../I18nProvider';
const MonthTable = () => {
  const { translations } = useI18n();

  const data = [
    {
      id: 1,
      month: `${translations.January}`,
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
      month: `${translations.February}`,
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
      month: `${translations.March}`,
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
      month: `${translations.April}`,
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
      month: `${translations.May}`,
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
      month: `${translations.June}`,
      estimated_number: 160,
      estimated_amount: 2400,
      number_of_order: 150,
      order_amount: 2250,
      percent_number: 93.75,
      parcent_amount: 90,
      siteestimation_number: 170,
      siteestimationpe: 0.8,
    },
    {
      id: 7,
      month: `${translations.July}`,
      estimated_number: 170,
      estimated_amount: 2550,
      number_of_order: 160,
      order_amount: 2400,
      percent_number: 94.12,
      parcent_amount: 97,
      siteestimation_number: 180,
      siteestimationpe: 0.81,
    },
    {
      id: 8,
      month: `${translations.August}`,
      estimated_number: 170,
      estimated_amount: 2550,
      number_of_order: 160,
      order_amount: 2400,
      percent_number: 94.12,
      parcent_amount: 97,
      siteestimation_number: 180,
      siteestimationpe: 0.81,
    },
    {
      id: 9,
      month: `${translations.September}`,
      estimated_number: 170,
      estimated_amount: 2550,
      number_of_order: 160,
      order_amount: 2400,
      percent_number: 94.12,
      parcent_amount: 97,
      siteestimation_number: 180,
      siteestimationpe: 0.81,
    },
    {
      id: 10,
      month: `${translations.October}`,
      estimated_number: 170,
      estimated_amount: 2550,
      number_of_order: 160,
      order_amount: 2400,
      percent_number: 94.12,
      parcent_amount: 97,
      siteestimation_number: 180,
      siteestimationpe: 0.81,
    },
    {
      id: 11,
      month: `${translations.November}`,
      estimated_number: 170,
      estimated_amount: 2550,
      number_of_order: 160,
      order_amount: 2400,
      percent_number: 94.12,
      parcent_amount: 97,
      siteestimation_number: 180,
      siteestimationpe: 0.81,
    },
    {
      id: 12,
      month: `${translations.December}`,
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
              <th className='px-[17px]   lg:py-2 lg:px-4 border-b text-center border border-black  lg:w-[150px]  '>
                {translations.month}
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
                  {item.month}
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
                  {item.parcent_amount}%
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
export default MonthTable;
