import { useContext, useMemo, useState } from "react";
import dayjs from "dayjs";

import SalesContext from "../store/sales.context";

import SearchBar from "./SearchBar";

const SalesTable = ({ height }) => {
  const salesData = useContext(SalesContext);

  const [searchProduct, setSearchProduct] = useState("");

  const filteredSalesData = useMemo(() => {
    return searchProduct ? salesData.filter((dt) => dt?.product.toLowerCase().includes(searchProduct.toLowerCase())) : salesData;
  }, [salesData, searchProduct]);

  return (
    <div style={{ width: "100%", height }}>
      <div className="flex flex-col gap-3">
        <header className="flex items-center justify-between gap-3">
          <h1 className="text-2xl font-semibold text-neutral-900">Tabel Sales</h1>
          <div className="w-96">
            <SearchBar value={searchProduct} onChange={(v) => setSearchProduct(v)} />
          </div>
        </header>
        <div className="!overflow-auto" style={{ height: height - 54 - 12 }}>
          <div className="inline-block min-w-full align-middle">
            <div className="border divide-y divide-gray-200 rounded-2xl">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="sticky top-0 left-0 bg-primary-50">
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
                  {filteredSalesData?.map((item, i) => (
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
  );
};

export default SalesTable;
