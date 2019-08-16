import React, { useEffect, useState } from "react";
import "./styles.scss";
import { Link, Route } from "react-router-dom";

export default function Header() {
  const [menus, setMenus] = useState([]);

  useEffect(() => {
    const menus = [
      {
        titulo: "Home",
        rota: "/",
        isExact: true
      },
      {
        titulo: "Sign in",
        rota: "/login",
        isExact: false
      },
      {
        titulo: "Sign up",
        rota: "/register",
        isExact: false
      }
    ];
    setMenus(menus);
  }, []);

  return (
    <header>
      <Link to="/" className="logo">
        conduit
      </Link>
      <nav>
        <ul>
          {menus.map(menu => (
            <Route
              key={menu.rota}
              path={menu.rota}
              exact={menu.isExact}
              children={({ match }) => (
                <li className={match ? "active" : ""}>
                  <Link to={menu.rota}>{menu.titulo}</Link>
                </li>
              )}
            />
          ))}
        </ul>
      </nav>
    </header>
  );
}
