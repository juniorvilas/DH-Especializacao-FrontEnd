import { Routes, Route } from "react-router-dom";
import Inicio from "./components/Inicio";
import Formulario from "./components/Formulario";
import "./App.css";
import { QueryClientProvider, QueryClient} from "react-query"

//importar QueryClientProvider, QueryClient e encapsular a div

const queryCliente = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryCliente}>
    <div className="App">
      <Routes>
        <Route path="/" exact element={<Inicio />} />
        <Route path="/formularioEntrada" element={<Formulario />} />
      </Routes>
    </div>
    </QueryClientProvider>
  );
}

export default App;
