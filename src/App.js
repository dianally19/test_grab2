import React from "react";
const userData = [
  {
    id: 10,
    name: "Diana",
    age: 21,
    gender: "f"
  },
  {
    id: 20,
    name: "Robin",
    age: 50,
    gender: "m"
  }
];

const salesData = [
  {
    userId: 10,
    qty: 5,
    pricePerQty: 1000,
    productId: 1,
    productName: "Kacang"
  },
  {
    userId: 10,
    qty: 10,
    pricePerQty: 2000,
    productId: 2,
    productName: "Tempe"
  }
];

/**
 * ========================
 * | id | name | gender | age | action |
 * =========================
 *  | 10 | Diana | Female | 21 | <update> |
 *  | 20 | Robin | Male | 50 | <update> |
 * =========================
 * */
const ids = [];
const idss = () => {
  for (let i = 0; i < userData.length; i++) {
    const row = (
      <tr>
        <td>{userData[i].id}</td>
        <td>{userData[i].name}</td>
        <td>{userData[i].gender}</td>
        <td>{userData[i].age}</td>
        <td>
          <button>Update</button>
        </td>
      </tr>
    );

    ids.push(row);
  }
  return ids;
};

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <table>
        <tr>
          <th>ID</th>
          <th>NAME</th>
          <th>AGE</th>
          <th>GENDER</th>
          <th>ACTION</th>
        </tr>
        {idss()}
      </table>
    </div>
  );
}
