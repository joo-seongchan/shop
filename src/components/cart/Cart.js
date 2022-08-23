import { useState } from "react";
import styled from "styled-components";
import { cartDb } from "../../DB";

const Section = styled.div`
  padding: 100px 220px;
`;
const TTitle = styled.div`
  font-size: 60px;
  text-align: center;
  margin-bottom: 50px;
`;
const ConWrap = styled.div``;

const Con = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 50px;
  border: 1px solid gray;
`;
const Img = styled.img`
  width: 15%;
  height: 200px;
`;
const Title = styled.div`
  width: 50%;
  padding-left: 50px;
  font-size: 32px;
  font-weight: 600;
`;
const Price = styled.div`
  width: 15%;
  font-size: 20px;
  color: brown;
  text-align: center;
`;
const Button = styled.div`
  width: 20%;
  text-align: center;
  cursor: pointer;
`;

export const Cart = () => {
  const [cart, setCartDb] = useState(cartDb);
  return (
    <Section>
      <TTitle>장바구니</TTitle>
      <ConWrap>
        {cart.map((menu) => (
          <Con key={menu.id}>
            <Img src={menu.url} />
            <Title>{menu.name}</Title>
            <Price>{menu.price} 원</Price>
            <Button
              onClick={() => {
                const carts = cart.filter((i) => i !== menu);
                setCartDb(carts);
                cartDb.splice(0);
                if (carts.length !== 0) {
                  cartDb.push(carts);
                }
                console.log(cartDb);
              }}
            >
              삭제
            </Button>
          </Con>
        ))}
      </ConWrap>
    </Section>
  );
};
