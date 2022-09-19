// import { createContext, useContext, useEffect, useState } from "react";

// const SupplierContext = createContext({
//   supplier: null,
// });

// export const SupplierProvider = ({ children }) => {
//   const [supplierInfo, setSupplierInfo] = useState({});

//   useEffect(() => {
//     fetch("https://northwind.vercel.app/api/suppliers/1")
//       .then((res) => res.json())
//       .then((res) => setSupplierInfo(res));
//   }, []);

//   return (
//     <SupplierContext.Provider value={{ supplier: supplierInfo }}>
//       {children}
//     </SupplierContext.Provider>
//   );
// };

// export const useSupplierContext = () => useContext(SupplierContext);
