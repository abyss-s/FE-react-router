import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./containers/Header";
import Main from "./pages/Main";
import Menu from "./pages/Menu";
import Product from "./pages/Product";
import NotFound from "./pages/NotFound"; 

const App = () => {
  return (
    <>
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/main" element={<Main />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/product/:name" element={<Product />} />
        <Route path="/*" element={<NotFound />} />
        <Route/>
      </Routes>
    </BrowserRouter>
    </>
  );
};

export default App;