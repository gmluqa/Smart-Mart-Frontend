import Header from "./layouts/Header/Header";
import { Route, Routes } from "react-router-dom";
import "./App.scss";
import IndexPage from "./pages/IndexPage/IndexPage";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<IndexPage />} />
      </Routes>
    </div>
  );
}

export default App;
