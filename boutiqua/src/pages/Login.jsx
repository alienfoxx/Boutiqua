import { LockOutlined } from "@material-ui/icons";
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
    url("https://i.ibb.co/Hh2s7GK/pexels-micaasato-1082529.jpg") center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Wrapper = styled.div`
  padding: 20px;
  width: 25%;
  background: #fff;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;

  ${mobile({
    width: "75%",
  })}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
`;
const Input = styled.input`
flex:1
min-width:40%;
margin: 10px  0;
padding:10px;

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
const Link = styled.a`
  margin: 10px 0;
  font-size: 14px;
  text-decoration: underline;
  cursor: pointer;
`;

const Login = () => {
  return (
    <div>
      <Navbar />
      <Container>
        <Wrapper>
          <Title>Sing In</Title>
          <Form>
            <Input placeholder="username" />

            <Input type="password " placeholder="password" />
            <Button>LOGIN</Button>
            <Link>
              FORGET IT AGAIN ! NO PROBLEM RESET PASSWORD <LockOutlined />{" "}
            </Link>
            <Link>CREATE A NEW ACCOUNT</Link>
          </Form>
        </Wrapper>
      </Container>
    </div>
  );
};

export default Login;
