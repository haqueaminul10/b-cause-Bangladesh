import data from './month';
import { useI18n } from '../../../I18nProvider';
const MonthTable = () => {
  const { translations } = useI18n();
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
