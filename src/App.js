import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Main from "../src/components/Main/Main";
import SearchResults from "../src/components/SearchResults/SearchResults";

function App() {
  return (
    <BrowserRouter>
      <>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="home" element={<Main />} />
            <Route path="results" element={<SearchResults />} />
            <Route index element={<Main />} />
          </Route>
        </Routes>
      </>
    </BrowserRouter>
  );
}

export default App;
