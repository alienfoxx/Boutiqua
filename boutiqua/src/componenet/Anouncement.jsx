import styled from "styled-components";

const Container = styled.div`
  height: 30px;
  background-color: #2C4E80;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 14px;
  font-weight: 600;
`;

const Anounecment = () => {
  return <Container>Super Deal! Free Shipping On Orders Over $50</Container>;
};

export default Anounecment;
