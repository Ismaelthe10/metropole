import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Router from "./Router";

export default function App() {
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
