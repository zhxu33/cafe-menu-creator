import "./App.css";
import Table from "./Table";
import { useState, useEffect } from "react";
import jsonData from "./menu.json";

function App() {
  //menu state variables
  const [menu, setMenu] = useState(() => {
    const storedMenu = localStorage.getItem("menu_data");
    return storedMenu ? JSON.parse(storedMenu) : jsonData.menu;
  });
  const [name, setName] = useState("item name");
  const [kind, setKind] = useState("drink");
  const [price, setPrice] = useState(0.99);

  //save menu items on update
  useEffect(() => {
    localStorage.setItem("menu_data", JSON.stringify(menu));
  }, [menu]);

  //item kinds
  const kinds = ["drink", "food", "other"];

  //form submission
  function submitForm(event) {
    event.preventDefault();
    setMenu([...menu, { name: name, kind: kind, price: price.toFixed(2) }]);
  }

  return (
    <div>
      <h1>Cafe Menu Creator</h1>
      <form onSubmit={submitForm}>
        <div>
          <label>Name: </label>
          <input
            required
            type="text"
            name="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </div>
        <div>
          <label>Kind: </label>
          <select
            required
            value={kind}
            onChange={(event) => setKind(event.target.value)}
          >
            {kinds.map((kind) => (
              <option key={kind} value={kind}>
                {kind}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label>Price: </label>
          <input
            required
            type="number"
            value={price}
            onChange={
              (event) => setPrice(Math.round(event.target.value * 100) / 100) //round to nearest hundreth
            }
          />
        </div>
        <input type="submit" value="Submit" />
      </form>
      <h2>Table</h2>
      <Table menu={menu} setMenu={setMenu} />
    </div>
  );
}

export default App;
