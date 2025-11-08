import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];
function App() {
  return (
    <>
      <section className="container">
        <Header />
        <Menu />
        <Footer />
      </section>
    </>
  );
}

function Header() {
  // const style = { color: "red", fontSize: "50px", textTransform: "uppercase" };
  const style = {};
  return (
    <header className="header">
      <h1 style={style}>Guo Guo Pizza Co.</h1>;
    </header>
  );
}
function Menu() {
  const pizzas = pizzaData;
  const pizzasNumber = pizzas.length;
  return (
    <main className="menu">
      <h2>Our Menu</h2>
      {pizzasNumber > 0 && (
        <ul className="pizzas">
          {pizzas.map((item) => {
            return <Pizza key={item.name} data={item} />;
          })}
        </ul>
      )}
    </main>
  );
}
function Footer() {
  const hour = new Date().getHours();
  const openHour = 0;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;
  return (
    <footer className="footer">
      {isOpen && (
        <div className="order">
          <p>
            We are open until {closeHour}:00. Come visit us or order online.
          </p>
          <button className="btn">Order</button>
        </div>
      )}
    </footer>
  );
}

function Pizza({ data }) {
  return (
    <>
      <li className="pizza">
        <img src={data.photoName} alt={data.name} />
        <div>
          <h3>{data.name}</h3>
          <p>{data.ingredients}</p>
          <span>{data.price}</span>
        </div>
      </li>
    </>
  );
}
// React v18
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// React before v18
// React.render(<App />);
