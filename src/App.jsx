import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import NotFound from "./pages/notFound/NotFound.jsx";
import ProductsPage from "./pages/ProductsPage.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<span>Home Page</span>} />
            <Route path='products' element={<ProductsPage/>}/>
          <Route
            path="*"
            element={<NotFound/>}
          />
        </Route>
      </Routes>
    </>
  );
}

export default App;
