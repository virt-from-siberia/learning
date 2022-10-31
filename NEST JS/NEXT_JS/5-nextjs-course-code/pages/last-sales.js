import { useEffect, useState } from "react";
import useSWR from "swr";

const API_PATH = `https://next-js-course-80933-default-rtdb.firebaseio.com/sales.json`;

function LastSalesPage(props) {
  const [sales, setSales] = useState(props.sales);
  //   const [isLoading, setIsLoading] = useState(false);

  const { data, error } = useSWR(API_PATH);

  useEffect(() => {
    if (data) {
      const transformedSales = [];

      for (const key in data) {
        transformedSales.push({
          id: key,
          username: data[key].username,
          value: data[key].value,
        });
      }
      setSales(transformedSales);
    }
  }, [data]);

  if (error) return <p>Something went wrong reload this page</p>;
  if (!data) return <p>Loading..</p>;

  return (
    <ul>
      {sales && sales.length
        ? sales.map((sale) => (
            <li key={sale.id}>
              {sale.username} - ${sale.value}
            </li>
          ))
        : null}
    </ul>
  );
}

export async function getStaticProps() {
  const response = await fetch(API_PATH);
  const data = await response.json();

  const transformedSales = [];

  for (const key in data) {
    transformedSales.push({
      id: key,
      username: data[key].username,
      value: data[key].value,
    });
  }
  return {
    props: {
      sales: transformedSales,
    },
    revalidate: 10,
  };
}

export default LastSalesPage;
