import { Badge } from "@material-ui/core";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import {mobile} from '../responsive'

const Container = styled.div`
  height: 60px;
  ${mobile({
    height:"50px",
    
  })}
  `;
const Wrraper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  ${mobile({
    padding:"10px 0"
  })}
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  cursor: pointer;
  align-items: center;
`;
const Language = styled.span`
  font-size: 14px;
  ${mobile({
    display:"none"
  })}
`;
const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;
const Input = styled.input`
  border: none;
  ${mobile({
    width:"50px"
  })}
`;

const Center = styled.div`
  text-align: center;
  flex: 1;
`;

const Logo = styled.h1`
  font-weight: bold;

  ${mobile({
    fontSize:"24px"
  })}
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  ${mobile({
    flex: 2,justifyContent: "center"
   
  })}
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;

  ${mobile({
    fontSize:"12px",marginLeft:"10px"
  })}
`;

const Navbar = () => {
  return (
    <Container>
      <Wrraper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input  placeholder="Searche"/>
            <Search style={{ color: "gray", fontSize: "16px" }} />
          </SearchContainer>
        </Left>
        <Center>
          <Logo>Botiqua.</Logo>
        </Center>
        <Right>
          <MenuItem>Register</MenuItem>
          <MenuItem>Sign In</MenuItem>
          <MenuItem>
            <Badge badgeContent={4} color="primary">
              <ShoppingCartOutlined />
            </Badge>
          </MenuItem>
        </Right>
      </Wrraper>
    </Container>
  );
};

export default Navbar;
