import styled from "styled-components";
import Navbar from "../componenet/Navbar";
import Anounecment from "../componenet/Anouncement";
import Footer from "../componenet/Footer";
import { Add, Remove } from "@material-ui/icons";

const Container = styled.div``;
const Wrapper = styled.div`
  padding: 20px;
`;
const Title = styled.h2`
 font-weight=200;
 text-align:center;
 `;
const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

const TopButton = styled.button`
  padding: 20px;
  cursor: pointer;
  font-weight: 600;
  border: ${(props) => props.type === "filled" && "none"};
  background: ${(props) => (props.type === "filled" ? "black" : "transparent")};
  color: ${(props) => props.type === "filled" && "white"};
`;
const TopTexts = styled.div``;
const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0 10px;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Info = styled.p`
  flex: 3;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
`;
const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;
const Image = styled.img`
  width: 200px;
`;
const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
const ProductName = styled.span``;

const ProductId = styled.span``;

const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: ${(props) => props.color};
`;
const ProductSize = styled.span``;
const PriceDetail = styled.span`
  flex: 1;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;
const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;
const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
`;

const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
`;
const Hr = styled.hr`
  background: #eee;
  border: none;
  height: 1px;
`;
const Summray = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
`;
const SummrayTitle = styled.h1`
  font-weight: 200;
`;
const SummaryItem = styled.div`
  margin: 30px 0;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;

const SummaryItemText = styled.span``;

const SummaryItemprice = styled.span``;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background: black;
  cursor: pointer;
  color: #fff;
  font-weight: 500;
`;

const Cart = () => {
  return (
    <Container>
      <Anounecment />
      <Navbar />
      <Wrapper>
        <Title>YOUR BAG</Title>
        <Top>
          <TopButton>CONTINUE SHOPPING</TopButton>
          <TopTexts>
            <TopText>Shopping bag(4)</TopText>
            <TopText>Your Wishlist(0)</TopText>
          </TopTexts>
          <TopButton type="filled">CHECKOUT NOW</TopButton>
        </Top>
        <Bottom>
          <Info>
            <Product>
              <ProductDetail>
                <Image src="https://i.ibb.co/5FtJrhR/pic-2.png" />
                <Details>
                  <ProductName>
                    <b>Product: </b>Pull & Bear Cotton
                  </ProductName>
                  <ProductId>
                    <b>ID: </b>15061953
                  </ProductId>
                  <ProductColor color="darkblue" />
                  <ProductSize>
                    <b>Size:</b>S
                  </ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  <Add />
                  <ProductAmount>2</ProductAmount>

                  <Remove />
                </ProductAmountContainer>
                <ProductPrice>169Dh</ProductPrice>
              </PriceDetail>
            </Product>
            <Hr />
            <Product>
              <ProductDetail>
                <Image src="https://i.ibb.co/p07Zprp/pic-1.png" />
                <Details>
                  <ProductName>
                    <b>Product: </b>LEVIS JEANS
                  </ProductName>
                  <ProductId>
                    <b>ID: </b>30101994
                  </ProductId>
                  <ProductColor color="skyblue" />
                  <ProductSize>
                    <b>Size:</b>32-33-35
                  </ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  <Add />
                  <ProductAmount>2</ProductAmount>

                  <Remove />
                </ProductAmountContainer>
                <ProductPrice>299Dh</ProductPrice>
              </PriceDetail>
            </Product>
          </Info>
          <Summray>
            <SummrayTitle>ORDER SUMMARY</SummrayTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemprice>468 Dh</SummaryItemprice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Estimated Shipping</SummaryItemText>
              <SummaryItemprice>40 Dh</SummaryItemprice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Shipping Discount</SummaryItemText>
              <SummaryItemprice>-14 Dh</SummaryItemprice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>total</SummaryItemText>
              <SummaryItemprice>494 Dh</SummaryItemprice>
            </SummaryItem>
            <Button>CHECKOUT NOW</Button>
          </Summray>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Cart;
