// import { useSupplierContext } from "../../context/supplier";

import { useQueryClient } from "react-query";
import { QUERY_KEYS } from "../../query_keys";

export const Footer = () => {
  //   const { supplier } = useSupplierContext();
  const queryClient = useQueryClient();
  const supplierData = queryClient.getQueryData(QUERY_KEYS.supplier);

  console.log(supplierData.companyName);

  return (
    <footer>
      <nav>Home</nav>
      <h3>Something</h3>
    </footer>
  );
};
