import { MainLayout } from "layouts";
import { Home, About, Contacts } from "pages";
import { Route, Routes } from "react-router-dom";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}> 
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contacts" element={<Contacts />} />
      </Route>
    </Routes>
  );
};
