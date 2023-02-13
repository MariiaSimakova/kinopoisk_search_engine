import { NavLink } from "react-router-dom";
import "../Navigation/navigation.scss";

function Navigation() {
  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <NavLink to="/home">
                <div className="logo">Kinopoisk</div>
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Navigation;
