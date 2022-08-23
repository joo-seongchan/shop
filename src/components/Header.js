import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { cartDb } from "../DB";

const SHeader = styled.div`
  padding: 0 220px;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
`;
const Logo = styled.div`
  font-size: 32px;
  font-weight: 600;
`;
const Cart = styled.div`
  font-size: 20px;
  position: relative;
`;

export const Header = () => {
  return (
    <SHeader>
      <Logo>
        <Link to="/">Logo</Link>
      </Logo>
      <Cart>
        <Link to="cart">
          <FontAwesomeIcon icon={faCartShopping} />
        </Link>
      </Cart>
    </SHeader>
  );
};
