import axios from "axios";
import { useQuery } from "react-query";
import "./App.css";
import { Footer } from "./components/Footer";

import { Products } from "./components/Products";

import { QUERY_KEYS } from "./query_keys";

function App() {
  const { refetch } = useQuery(QUERY_KEYS.supplier, () =>
    axios(`https://northwind.vercel.app/api/suppliers/${id}`).then(
      (res) => res.data
    )
  );

  return (
    <div className="app">
      <Products />
      <Footer />
    </div>
  );
}

export default App;
