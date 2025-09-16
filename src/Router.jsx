import { Route, Routes } from "react-router";
import About from "./pages/About/About";
import Home from "./pages/Home/Home";
import PrivacyPolicyPage from "./components/PrivacyPolicyPage/PrivacyPolicyPage";
import TermsOfUsePage from "./components/TermsOfUsePage/TermsOfUsePage";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sobre" element={<About />} />
      <Route path="/politica-de-privacidade" element={<PrivacyPolicyPage />} />
      <Route path="/termos-de-uso" element={<TermsOfUsePage />} />
      <Route path="*" element={<Home />} />
    </Routes>
  );
}
