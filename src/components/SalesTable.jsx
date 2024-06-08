const SalesTable = ({ height }) => {
  return (
    <div style={{ width: "100%", height: height }}>
      <div className="flex flex-col">
        <div className="-m-1.5 overflow-x-auto">
          <div className="p-1.5 min-w-full inline-block align-middle">
            <div className="border rounded-lg divide-y divide-gray-200">
              <div className="py-3 px-4">
                <div className="relative max-w-xs">
                  <label for="hs-table-search" className="sr-only">
                    Search
                  </label>
                  <input
                    type="text"
                    name="hs-table-search"
                    id="hs-table-search"
                    className="py-2 px-3 ps-9 block w-full border-gray-200 shadow-sm rounded-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                    placeholder="Search for items"
                  />
                  <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none ps-3">
                    <svg
                      className="size-4 text-gray-400"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <circle cx="11" cy="11" r="8"></circle>
                      <path d="m21 21-4.3-4.3"></path>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="overflow-hidden">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">
                        Produk
                      </th>
                      <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">
                        Tanggal
                      </th>
                      <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">
                        Jumlah Penjualan
                      </th>
                      <th scope="col" className="px-6 py-3 text-end text-xs font-medium text-gray-500 uppercase">
                        Pendapatan
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">John Brown</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">45</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">New York No. 1 Lake Park</td>
                      <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                        <button
                          type="button"
                          className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>

                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">Jim Green</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">27</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">London No. 1 Lake Park</td>
                      <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                        <button
                          type="button"
                          className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>

                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">Joe Black</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">31</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">Sidney No. 1 Lake Park</td>
                      <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                        <button
                          type="button"
                          className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>

                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">Edward King</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">16</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">LA No. 1 Lake Park</td>
                      <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                        <button
                          type="button"
                          className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>

                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">Jim Red</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">45</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">Melbourne No. 1 Lake Park</td>
                      <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                        <button
                          type="button"
                          className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
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
