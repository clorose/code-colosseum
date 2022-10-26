import { BrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";
import "./App.css";
import RoutesComponents from "./components/RoutesComponents";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Layout />
        <RoutesComponents />
      </BrowserRouter>
    </div>
  );
}

export default App;
