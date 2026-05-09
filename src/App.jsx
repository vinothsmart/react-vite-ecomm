import { useCallback, useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");

  const handleChange = useCallback((event) => {
    const value = event.target.value;
    setName(value);
  }, []);

  return (
    <div>
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={handleChange}
      />
      {name && <p>Hello, {name}!</p>}
    </div>
  );
}

export default App;
