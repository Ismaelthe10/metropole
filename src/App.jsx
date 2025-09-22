import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Router from "./Router";
import { useGlobalSchema } from "./hooks/useGlobalSchema";
export default function App() {
  useGlobalSchema();
  return (
    <>
      <Header />
      <main>
        <Router />
      </main>
      <Footer />
    </>
  );
}
