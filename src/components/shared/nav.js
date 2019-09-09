import React, { useEffect } from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";
import { useAuth } from "../../hooks/queries/useAuth";

const StyledNav = styled.nav`
  display: flex;
  justify-content: flex-end;
  width: 100vw;
  height: 5rem;
  padding: 0 2rem;
  border-bottom: 2px solid #222;

  ul {
    display: flex;
    align-items: center;
    list-style-type: none;

    .nav-link {
      color: #222;
      text-decoration: none;
      margin: 0 0.4rem;
    }

    .nav-link:hover {
      color: lime;
      cursor: pointer;
    }

    .nav-btn:hover {
      background: lime;
      cursor: pointer;
    }

    .nav-btn {
      padding: 0.8rem 1.5rem;
      margin: 0 0.4rem;
      border: 2px solid #222;
    }
  }
`;

function Nav() {
  const { currentUserId } = useAuth();

  if (currentUserId) {
    return (
      <StyledNav>
        <ul>
          <li>
            <Link className="nav-link" to="/pizzas">
              Pizzas
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/toppings">
              Toppings
            </Link>
          </li>
          <li>
            <button className="nav-btn">Logout</button>
          </li>
        </ul>
      </StyledNav>
    );
  }

  return (
    <StyledNav>
      <ul>
        <li>
          <Link to="/login">
            <button className="nav-btn">Login</button>
          </Link>
        </li>
        <li>
          <Link to="/signup">
            <button className="nav-btn">Signup</button>
          </Link>
        </li>
      </ul>
    </StyledNav>
  );
}

export default Nav;
