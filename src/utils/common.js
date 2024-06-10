import { IoMdArrowRoundUp, IoMdArrowRoundDown } from "react-icons/io";

export const joinClassnames = (classes) => {
  return classes.filter(Boolean).join(" ");
};

export const transformChartData = (data) => {
  const result = {};

  data?.forEach((item) => {
    if (!result[item.date]) {
      result[item.date] = {
        date: item.date,
        sales: 0,
      };
    }

    const productKey = `revenue_${item.product.split(" ").join("_").toLowerCase()}`;

    if (!result[item.date][productKey]) {
      result[item.date][productKey] = 0;
    }

    result[item.date][productKey] += item.revenue;
    result[item.date].sales += item.sales;
  });

  const sortedData = Object.values(result).sort((a, b) => new Date(a.date) - new Date(b.date));

  for (let i = 0; i < sortedData.length; i++) {
    const currentSales = sortedData[i].sales;
    const previousSales = i > 0 ? sortedData[i - 1].sales : 0;
    sortedData[i].salesDifference = i === 0 ? 0 : currentSales - previousSales;
  }

  return sortedData;
};

export const getProductName = (key) => {
  if (key.startsWith("revenue_")) {
    const productName = key.replace("revenue_", "");
    return productName
      .split("_")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  }
  return key;
};

export const getSalesDifferences = (value) => {
  if (value > 0) return { classes: "bg-success-50 text-success-300", icon: <IoMdArrowRoundUp className="text-success-300" /> };
  if (value < 0) return { classes: "bg-danger-50 text-danger-300", icon: <IoMdArrowRoundDown className="text-danger-300" /> };
  else return { classes: "bg-neutral-200 text-neutral-600", icon: null };
};

export const transformStatisticData = (data) => {
  const reducedData = data?.reduce(
    (acc, item) => {
      acc.total_sales += item.sales;
      acc.total_revenue += item.revenue;
      acc.product_sales[item.product] += item.sales;
      return acc;
    },
    {
      total_sales: 0,
      total_revenue: 0,
      product_sales: {
        "Iphone 15 Pro Max": 0,
        "Iphone 15 Pro": 0,
        "Iphone 15 Plus": 0,
      },
    }
  );

  if (!reducedData) return null;

  const { total_sales, total_revenue, product_sales } = reducedData;

  const most_sold_product = Object.keys(product_sales).reduce((a, b) => (product_sales[a] > product_sales[b] ? a : b));

  return {
    total_sales,
    total_revenue,
    most_sold_product,
  };
};
