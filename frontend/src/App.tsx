import Navbar from "components/Navbar";
import Datatable from "components/Datatable";
import Footer from "components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <div>
        <h1 className="text-primary">Olá Mundo</h1>
        <Datatable />
      </div>
      <Footer />
    </>
  );
}

export default App;
