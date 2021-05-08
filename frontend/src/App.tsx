import Navbar from "components/Navbar";
import Datatable from "components/Datatable";
import Footer from "components/Footer";
import Barchart from "components/Barchart";
import Donutchart from "components/Donutchart";

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <h1 className="text-primary">Dashboard</h1>
        <div className="row px-3">
          <div className="col-sm-6">
            <h5 className="text-center text-secondary">Taxa de Sucesso (%)</h5>
            <Barchart />
          </div>
          <div className="col-sm-6">
            <h5 className="text-center text-secondary">Todas vendas</h5>
            <Donutchart />
          </div>
        </div>

        <div className="py-3">
          <h2 className="text-primary">Todas as vendas</h2>
        </div>
        <Datatable />
      </div>
      <Footer />
    </>
  );
}

export default App;
