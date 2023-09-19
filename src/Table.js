import React from "react";

function Table({ menu, setMenu }) {
  function deleteItem(index) {
    setMenu(menu.filter((menu, i) => i !== index));
  }

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Kind</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {menu.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.kind}</td>
              <td>{item.price}</td>
              <td>
                <button onClick={() => deleteItem(index)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
