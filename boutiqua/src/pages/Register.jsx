import styled from "styled-components";
import { mobile } from "../responsive";
import Navbar from "../componenet/Navbar";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://i.ibb.co/bN5YJWJ/pexels-olly-974911.jpg") center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Wrapper = styled.div`
  padding: 20px;
  width: 40%;
  background: #fff;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;

  ${mobile({
    width:"75%"
  })}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;
const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;
const Input = styled.input`
flex:1
min-width:40%;
margin:25px 10px 0 0;
padding:10px;

`;
const Agreement = styled.span`
  font-size: 18px;
  margin: 20px 0px;
`;
const Button = styled.button`
  width: 40%;
  border: 2px solid teal;
  background: #d9edbf;
  padding: 15px 20px;
  font-weight: 700;
  transition: all ease 0.5s;
  color: #2c7865;
  &:hover {
    background: #fff;
    color: teal;
    border-radius: 10px;

    transform: scale(1.1);
  }
`;

const Register = () => {
  return (
    <>
    <Navbar/>
    <Container>
      <Wrapper>
        <Title>CREAT ACCOUNT</Title>
        <Form>
          <Input placeholder="name" />
          <Input placeholder="username" />
          <Input type="number" placeholder="phone number" />
          <Input placeholder="email" />
          <Input type="password " placeholder="password" />
          <Input type="password" placeholder=" confirm password" />
          <Agreement>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </Agreement>
          <Button>CREAT ACCOUNT</Button>
        </Form>
      </Wrapper>
    </Container>
    
    
    </>
  );
};

export default Register;
