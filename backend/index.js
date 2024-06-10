const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("./data/db.json");
const middlewares = jsonServer.defaults();

// Set default middlewares (logger, static, cors and no-cache)
server.use(middlewares);

// Add custom routes before JSON Server router
server.get("/sales", (req, res) => {
  const { product, start_date, end_date } = req.query;
  const sales = router.db.get("sales").value();

  const filteredSales = sales.filter((sale) => {
    const saleDate = new Date(sale.date);
    const startDate = start_date ? new Date(start_date) : null;
    const endDate = end_date ? new Date(end_date) : null;

    const isWithinDateRange = (!startDate || saleDate >= startDate) && (!endDate || saleDate <= endDate);
    const matchesProduct = !product || sale.product.toLowerCase().includes(product.toLowerCase());

    return isWithinDateRange && matchesProduct;
  });

  res.json(filteredSales);
});

// Use default router
server.use(router);
server.listen(8000, () => {
  console.log("JSON Server is running");
});
