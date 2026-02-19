import MenuSection from "./components/sections/MenuSection";
import CategoryLanding from "./components/sections/CategoryLanding";
import { Container } from "./components/layout/Container";
import { Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <Container>
      <Routes>
        <Route path="/" element={<CategoryLanding />} />
        <Route path="/menu/:category" element={<MenuSection />} />
      </Routes>
    </Container>
  );
}
