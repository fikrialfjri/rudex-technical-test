const Statistics = ({ height }) => {
  return (
    <div className="flex flex-col gap-4 justify-evenly" style={{ height: height }}>
      <div className="space-y-2">
        <label className="text-lg text-gray-500 font-normal">Total Penjualan</label>
        <h3 className="text-5xl font-semibold text-neutral-900">{(100000).toLocaleString()}</h3>
      </div>
      <div className="space-y-2">
        <label className="text-lg text-gray-500 font-normal">Total Pendapatan</label>
        <h3 className="text-5xl font-semibold text-neutral-900">{(100000).toLocaleString()}</h3>
      </div>
      <div className="space-y-2">
        <label className="text-lg text-gray-500 font-normal">Produk Terlaris</label>
        <h3 className="text-5xl font-semibold text-neutral-900">{(100000).toLocaleString()}</h3>
      </div>
    </div>
  );
};

export default Statistics;
