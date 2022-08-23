import styled from "styled-components";
import { cartDb, menuDb } from "../../DB";

const Section = styled.section`
  padding: 100px 220px;
`;
const Container = styled.div`
  width: 100%;
`;
const ConWrap = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Con = styled.div`
  width: 20%;
`;
const Img = styled.img`
  width: 100%;
  height: 300px;
  margin-bottom: 30px;
`;
const Title = styled.div`
  font-size: 28px;
  font-weight: 600;
  margin-bottom: 20px;
`;
const Price = styled.div`
  color: brown;
  font-size: 20px;
  text-align: right;
  margin-bottom: 20px;
`;
const Button = styled.div`
  border: 1px solid gray;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const Home = () => {
  return (
    <Section>
      <Container>
        <ConWrap>
          {menuDb.map((menu) => (
            <Con key={menu.id}>
              <Img src={menu.url} />
              <Title>{menu.name}</Title>
              <Price>{menu.price} 원</Price>
              <Button
                onClick={() => {
                  const check = cartDb.filter((i) => i === menu);
                  if (check.length === 0) {
                    cartDb.push(menu);
                  }
                  console.log(cartDb);
                }}
              >
                장바구니 추가 +
              </Button>
            </Con>
          ))}
        </ConWrap>
      </Container>
    </Section>
  );
};