import { useEffect, useState } from "react";
import axios from "axios";

import SalesContext from "./store/sales.context";

import SalesChart from "./components/SalesChart";
import Statistics from "./components/Statistics";
import SalesTable from "./components/SalesTable";
import SectionCard from "./components/SectionCard";
import SearchBar from "./components/SearchBar";

const App = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    _fetchData();
  }, []);

  const _fetchData = () => {
    axios
      .get("http://localhost:8000/sales")
      .then((res) => setData(res.data))
      .catch((err) => console.error(err));
  };

  return (
    <SalesContext.Provider value={data}>
      <main className="flex flex-col min-h-screen gap-8 p-8">
        <header className="flex items-center justify-between h-10 gap-4">
          <h1 className="text-3xl font-bold text-neutral-800 whitespace-nowrap">Analitik Penjualan</h1>
          <div className="w-96">
            <SearchBar />
          </div>
        </header>

        <section className="grid grid-cols-4 grid-rows-2 gap-6 flex-1 h-[calc(100%-32px-40px-64px)]">
          <SectionCard classes="col-span-3" noOverflow>
            {(contentHeight, containerWidth) => {
              return contentHeight > 0 && containerWidth > 0 && <SalesChart height={contentHeight} />;
            }}
          </SectionCard>
          <SectionCard noOverflow>
            {(contentHeight, containerWidth) => {
              return contentHeight > 0 && containerWidth > 0 && <Statistics height={contentHeight} />;
            }}
          </SectionCard>
          <SectionCard classes="col-span-4">
            {(contentHeight, containerWidth) => {
              return contentHeight > 0 && containerWidth > 0 && <SalesTable height={contentHeight} />;
            }}
          </SectionCard>
        </section>
      </main>
    </SalesContext.Provider>
  );
};

export default App;
