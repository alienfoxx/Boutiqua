import { SendOutlined } from "@material-ui/icons";
import styled from "styled-components";
import {mobile} from "../responsive"

const Container = styled.div`
  height: 60vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fcf5f5;
  flex-direction: column;
`;
const Title = styled.h1`
  font-size: 60px;
  margin-bottom: 20px;
`;
const Description = styled.div`
  font-size: 24px;
  font-weight: 300;
  margin-bottom: 20px;

  ${mobile({
    textAlign:"center"
  })}
`;
const InputContainer = styled.div`
  width: 50%;
  height: 40px;
  background: #fff;
  display: flex;
  justify-content: space-between;
  border: 1px solid lightgray;

  ${mobile({
    width:"80%"
  })}
`;
const Input = styled.input`
  border: none;
  flex: 8;
  padding-left: 20px;
`;
const Button = styled.button`
  flex: 2;
  border: none;
  background-color: teal;
  color: #fff;
  cursor:pointer;

  &:hover{
    transition: all 0.5s ease;
    background:#fcf5f5;
    color:teal;
  }
`;

const Newsletter = () => {
  return (
    <Container>
      <Title>Newsletter</Title>
      <Description> Get timely updates from your favorite products</Description>
      <InputContainer>
        <Input placeholder="Add your Email..." />
        <Button>
          <SendOutlined />
        </Button>
      </InputContainer>
    </Container>
  );
};

export default Newsletter;
