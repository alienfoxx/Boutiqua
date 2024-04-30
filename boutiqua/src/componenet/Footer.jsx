import {
  Facebook,
  Instagram,
  LocalPhone,
  LocationOn,
  Mail,
  Pinterest,
  Twitter,
} from "@material-ui/icons";
import styled from "styled-components";

import {mobile} from "../responsive";

const Container = styled.div`
  display: flex;

  ${mobile({
    flexDirection:"column"
  })}
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;
const Logo = styled.h1``;

const Description = styled.p`
  margin: 20px 0;
`;

const SocialContainer = styled.div`
  display: flex;
`;

const SocialIcon = styled.div`
width:40px;
height:40px;
border-radius:50%;
display:flex;
justify-content:center;
align-items:center;
color:#fff;
cursor:pointer;
margin-right:10px;
background: ${(props) => props.color};#


`;
// you should nack here to work in links
const Center = styled.div`
  flex: 1;
  padding: 20px;

 
`;

const Title = styled.h3`
  margin-bottom: 30px;
`;
const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({
    backgroundColor:"#f6f6f6"
  })}

`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const Payemnt = styled.img`
  width: 50%;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>Boutiqua.</Logo>
        <Description>
          Boutiqua: Your go-to destination for chic fashion. Discover curated
          collections of trendy clothing and accessories that elevate your style
          effortlessly. From everyday essentials to statement pieces, we bring
          you the latest in fashion at affordable prices. Shop with confidence
          and express your unique personality through our diverse range of
          high-quality garments. Welcome to Boutiqua, where fashion meets flair!
        </Description>
        <SocialContainer>
          <SocialIcon color="#385999">
            <Facebook />
          </SocialIcon>
          <SocialIcon color="#E4405F">
            <Instagram />
          </SocialIcon>
          <SocialIcon color="#E60023">
            <Pinterest />
          </SocialIcon>
          <SocialIcon color="#55ACEE">
            <Twitter />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Man Fashion</ListItem>
          <ListItem>Woman Fashion</ListItem>
          <ListItem>Kids Fashion</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Privacy</ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact Us</Title>
        <ContactItem>
          <LocationOn style={{ marginRight: "10px" }} />
          Intersection of Nations-Unies Avenue, Al Abtal, Inaouin, and Av. Omar
          Ibn Al Khattab, Arribat Center, Rabat.
        </ContactItem>
        <ContactItem>
          <LocalPhone style={{ marginRight: "10px" }} /> +212 537 830 000
        </ContactItem>
        <ContactItem>
          <Mail style={{ marginRight: "10px" }} /> contact@boutiqua.ma
        </ContactItem>
        <Payemnt src="https://i.ibb.co/Qfvn4z6/payment.png"></Payemnt>
      </Right>
    </Container>
  );
};

export default Footer;
