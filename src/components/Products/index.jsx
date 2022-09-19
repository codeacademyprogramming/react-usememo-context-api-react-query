import { useMemo } from "react";

import { useQuery, useQueryClient } from "react-query";
import axios from "axios";
import { Loading } from "../Loading";
import { QUERY_KEYS } from "../../query_keys";
// import { useSupplierContext } from "../../context/supplier";

export const Products = () => {
  //   const { supplier } = useSupplierContext();

  const queryClient = useQueryClient();
  const { isLoading, error, data } = useQuery("products", () =>
    axios
      .get("https://northwind.vercel.app/api/products")
      .then((res) => res.data)
  );

  const sortedData = useMemo(() => {
    // if (sort === "id") {
    //   return [];
    // } else if (sort === "name") {
    //   return [];
    // } else if (sort === "price") {
    // }
    return data?.sort((a, b) => Number(a.id) - Number(b.id));
  }, [data]);

  const supplierData = queryClient.getQueryData(QUERY_KEYS.supplier);

  return (
    <>
      <h1>Bu productlari {supplierData?.companyName} supply edib</h1>
      <Loading condition={isLoading}>products loading</Loading>

      {data && (
        <>
          <table>
            <caption>Products</caption>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Quantity per unit</th>
              </tr>
            </thead>
            <tbody>
              {sortedData &&
                sortedData.map((product) => {
                  return (
                    <tr key={product.id}>
                      <td>{product.id}</td>
                      <td>{product.name}</td>
                      <td>{product.quantityPerUnit}</td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </>
      )}

      <button
        onClick={() => {
          queryClient.invalidateQueries([
            QUERY_KEYS.supplier,
            QUERY_KEYS.products,
            QUERY_KEYS.customers,
          ]);
        }}
      >
        Refetch supplier
      </button>

      {error && <h5>{error}</h5>}
    </>
  );
};
