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
        <label className="text-lg font-normal text-gray-500">Total Penjualan</label>
        <div className="flex items-center justify-between gap-3">
          <h3 className="text-3xl font-semibold text-neutral-900">{transformedData?.total_sales?.toLocaleString() || 0}</h3>
          <div className="flex items-center justify-center rounded-full h-11 w-11 aspect-square bg-primary-50">
            <FaChartSimple className="w-full text-primary-300" />
          </div>
        </div>
      </div>
      <div className="h-[1px] w-full bg-neutral-300" />
      <div className="space-y-2">
        <label className="text-lg font-normal text-gray-500">Total Pendapatan (dalam Miliar)</label>
        <div className="flex items-center justify-between gap-3">
          <h3 className="text-3xl font-semibold text-neutral-900">Rp{(transformedData?.total_revenue / 1000000000 || 0)?.toLocaleString()}</h3>
          <div className="flex items-center justify-center rounded-full h-11 w-11 aspect-square bg-primary-50">
            <FaMoneyBills className="w-full text-primary-300" />
          </div>
        </div>
      </div>
      <div className="h-[1px] w-full bg-neutral-300" />
      <div className="space-y-2">
        <label className="text-lg font-normal text-gray-500">Produk Terlaris</label>
        <div className="flex items-center justify-between gap-3">
          <h3 className="text-3xl font-semibold text-neutral-900">{transformedData?.most_sold_product || "No data"}</h3>
          <div className="flex items-center justify-center rounded-full h-11 w-11 aspect-square bg-primary-50">
            <FaArrowTrendUp className="w-full text-primary-300" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
