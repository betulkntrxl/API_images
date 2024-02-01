import { useState } from "react";
import "./App.css";
import searchImages from "./api";
import Imagelist from "./components/Imagelist";
import Search from "./components/Search"; // Assuming Search.js is inside the components folder

function App() {
  const [images, setimages] = useState([]);
  const handlesubmit = async (term) => {
    const result = await searchImages(term);

    setimages(result);
  };

  return (
    <div>
      {/* it can be called anything not just onSubmit */}
      <Search onSubmit={handlesubmit} />
      <Imagelist images={images} />
    </div>
  );
}

export default App;
