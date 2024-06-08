import SalesChart from "./components/SalesChart";
import Statistics from "./components/Statistics";
import SalesTable from "./components/SalesTable";
import SectionCard from "./components/SectionCard";

const App = () => {
  return (
    <main className="p-8 min-h-screen flex flex-col gap-8">
      <header className="h-10 flex items-center justify-between">
        <h1 className="text-3xl font-bold text-neutral-800">Analitik Penjualan</h1>
      </header>

      <section className="grid grid-cols-4 grid-rows-2 gap-6 flex-1 h-[calc(100%-32px-40px-64px)]">
        <SectionCard classes="col-span-3" noOverflow>
          {(contentHeight, containerWidth) => {
            return contentHeight > 0 && containerWidth > 0 && <SalesChart height={contentHeight} />;
          }}
        </SectionCard>
        <SectionCard>
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
  );
};

export default App;
