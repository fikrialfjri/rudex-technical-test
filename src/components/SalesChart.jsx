import { useContext } from "react";
import { ComposedChart, Line, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from "recharts";
import dayjs from "dayjs";

import SalesContext from "../store/sales.context";
import { getProductName, getSalesDifferences, joinClassnames, transformChartData } from "../utils/common";

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    const salesDifference = payload[0].payload.salesDifference;
    return (
      <div className="px-4 py-3 space-y-2 border shadow-xl border-neutral-300 rounded-2xl bg-white/95 min-w-60">
        <header className="flex items-center justify-between gap-3">
          <div>
            <label className="text-xs text-gray-500">{dayjs(label).format("DD MMMM YYYY")}</label>
            <h6 className="text-3xl font-semibold text-neutral-900">{payload[0].payload.sales}</h6>
          </div>
          <div className={joinClassnames(["font-medium py-1 px-3 rounded-md flex items-center gap-1", getSalesDifferences(salesDifference).classes])}>
            {getSalesDifferences(salesDifference).icon}
            <p className="text-sm">{salesDifference < 0 ? String(salesDifference).slice(1) : salesDifference}</p>
          </div>
        </header>
        <div className="h-[1px] bg-neutral-300 w-full" />
        <ul className="space-y-1">
          {payload.map((el, i) => {
            return (
              el.name !== "sales" && (
                <li key={i} className="flex items-center justify-between gap-10 text-base">
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: el.color }} />
                    <p className="text-gray-500">{getProductName(el.name)}</p>
                  </div>
                  <p className="font-semibold text-neutral-900">Rp{el.value.toLocaleString()}</p>
                </li>
              )
            );
          })}
        </ul>
      </div>
    );
  }

  return null;
};

const SalesChart = ({ height }) => {
  const salesData = useContext(SalesContext);
  const transformedData = transformChartData(salesData);

  return (
    <div style={{ width: "100%", height: height }}>
      <ResponsiveContainer>
        <ComposedChart data={transformedData}>
          <XAxis dataKey="date" tickFormatter={(tick) => dayjs(tick).format("DD MMM")} />
          <YAxis yAxisId="left" type="number" orientation="left" dataKey="sales" />
          <YAxis yAxisId="right" type="number" orientation="right" unit="jt" tickFormatter={(tick) => tick / 1000000} />
          <Tooltip content={<CustomTooltip />} />
          <CartesianGrid stroke="#f5f5f5" />
          <Bar yAxisId="right" dataKey="revenue_iphone_15_pro_max" barSize={5} fill="#6d3cf4" />
          <Bar yAxisId="right" dataKey="revenue_iphone_15_pro" barSize={5} fill="#03D0FB" />
          <Bar yAxisId="right" dataKey="revenue_iphone_15_plus" barSize={5} fill="#ff80c4" />
          <Line yAxisId="left" type="monotone" dataKey="sales" strokeWidth={2} stroke="#FC9107" />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SalesChart;
