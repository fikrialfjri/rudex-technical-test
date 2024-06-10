import { useContext } from "react";
import dayjs from "dayjs";

import SalesContext from "../store/sales.context";

const SalesTable = ({ height }) => {
  const salesData = useContext(SalesContext);

  return (
    <div style={{ width: "100%", height: height }}>
      <div className="flex flex-col">
        <div className="overflow-x-auto">
          <div className="p-1.5 min-w-full inline-block align-middle">
            <div className="border divide-y divide-gray-200 rounded-2xl">
              <div className="overflow-hidden">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-primary-50">
                    <tr>
                      <th scope="col" className="w-10 px-6 py-3 text-xs font-medium uppercase rounded-tl-2xl text-primary-300 text-start">
                        No.
                      </th>
                      <th scope="col" className="px-6 py-3 text-xs font-medium uppercase text-primary-300 text-start">
                        Produk
                      </th>
                      <th scope="col" className="px-6 py-3 text-xs font-medium uppercase text-primary-300 text-start">
                        Tanggal
                      </th>
                      <th scope="col" className="px-6 py-3 text-xs font-medium uppercase text-primary-300 text-start">
                        Jumlah Penjualan
                      </th>
                      <th scope="col" className="px-6 py-3 text-xs font-medium uppercase text-primary-300 text-start rounded-tr-2xl">
                        Pendapatan (dalam Rupiah)
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {salesData?.map((item, i) => (
                      <tr key={i}>
                        <td className="w-10 px-6 py-4 text-sm text-gray-800 whitespace-nowrap">{i + 1}</td>
                        <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">{item.product}</td>
                        <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">{dayjs(item.date).format("DD MMMM YYYY")}</td>
                        <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">{item.sales}</td>
                        <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">{item.revenue.toLocaleString()}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SalesTable;
