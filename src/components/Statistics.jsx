import { useContext } from "react";
import { FaChartSimple, FaMoneyBills, FaArrowTrendUp } from "react-icons/fa6";

import SalesContext from "../store/sales.context";
import { transformStatisticData } from "../utils/common";

const Statistics = ({ height }) => {
  const salesData = useContext(SalesContext);
  const transformedData = transformStatisticData(salesData);

  return (
    <div className="flex flex-col gap-3 justify-evenly" style={{ height: height }}>
      <div className="space-y-2">
        <label className="text-lg text-gray-500 font-normal">Total Penjualan</label>
        <div className="flex items-center justify-between gap-3">
          <h3 className="text-4xl font-semibold text-neutral-900">{transformedData?.total_sales?.toLocaleString()}</h3>
          <div className="h-11 w-11 aspect-square flex items-center justify-center rounded-full bg-primary-50">
            <FaChartSimple className="text-primary-300 w-full" />
          </div>
        </div>
      </div>
      <div className="h-[1px] w-full bg-neutral-300" />
      <div className="space-y-2">
        <label className="text-lg text-gray-500 font-normal">Total Pendapatan (dalam Miliar)</label>
        <div className="flex items-center justify-between gap-3">
          <h3 className="text-4xl font-semibold text-neutral-900">Rp{(transformedData?.total_revenue / 1000000000)?.toLocaleString()}</h3>
          <div className="h-11 w-11 aspect-square flex items-center justify-center rounded-full bg-primary-50">
            <FaMoneyBills className="text-primary-300 w-full" />
          </div>
        </div>
      </div>
      <div className="h-[1px] w-full bg-neutral-300" />
      <div className="space-y-2">
        <label className="text-lg text-gray-500 font-normal">Produk Terlaris</label>
        <div className="flex items-center justify-between gap-3">
          <h3 className="text-4xl font-semibold text-neutral-900">{transformedData?.most_sold_product}</h3>
          <div className="h-11 w-11 aspect-square flex items-center justify-center rounded-full bg-primary-50">
            <FaArrowTrendUp className="text-primary-300 w-full" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
