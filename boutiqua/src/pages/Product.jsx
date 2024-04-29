import styled from "styled-components";
import Anounecment from "../componenet/Anouncement";
import Navbar from "../componenet/Navbar";
import Newsletter from "../componenet/Newsletter";
import Footer from "../componenet/Footer";
import { Add, Remove } from "@material-ui/icons";

const Container = styled.div``;

const Wrraper = styled.div`
  padding: 50px;
  display: flex;
`;

const ImageContainer = styled.div`
  flex: 1;
`;

const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: contain;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0 50px;
`;

const Title = styled.h1`
  font-weight: 200;
`;

const Description = styled.p`
  margin: 20px 0;
`;

const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;

const FilterContainer = styled.div`
  width: 50%;
  margin: 30px 0;
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  display: flex;
  align-items: center;
`;

const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
`;

const FiltreColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: ${(props) => props.color};
  margin: 0 5px;
  cursor: pointer;
`;

const FilterSize = styled.select`
  margin-left: 10px;
  padding: 10px;
`;

const FilterSizeOption = styled.option``;

const AddContainer = styled.div`
  width: 60%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 600;
`;

const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;

const Button = styled.button`
  padding: 15px;
  border: 2px solid teal;
  background: #fff;
  cursor: pointer;
  font-weight: 500;

  &:hover {
    color: #fff;
    background: teal;
    transition: all 0.5s ease;
    transform: scale(1.1);
    border-radius: 15px;
  }
`;

const Product = () => {
  return (
    <Container>
      <Anounecment />
      <Navbar />
      <Wrraper>
        <ImageContainer>
          <Image src="https://i.ibb.co/LrGRNCh/model-mal-1.png" />
        </ImageContainer>
        <InfoContainer>
          <Title>Pull & Bear Jacket</Title>
          <Description>
            Cotton Blue Jacket: Effortlessly stylish and comfortably snug, our
            Cotton Blue Jacket is your perfect companion for any occasion.
            Crafted from high-quality cotton, it offers a blend of durability
            and breathability. With its timeless design and versatile appeal,
            this jacket seamlessly transitions from casual outings to more
            formal events. Elevate your look with the understated elegance of
            our Cotton Blue Jacket.
          </Description>
          <Price>399DH</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              <FiltreColor color="blue" />
              <FiltreColor color="darkblue" />
              <FiltreColor color="skyblue" />
            </Filter>
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize>
                <FilterSizeOption>XS</FilterSizeOption>
                <FilterSizeOption>M</FilterSizeOption>
                <FilterSizeOption>L</FilterSizeOption>
                <FilterSizeOption>XL</FilterSizeOption>
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <Remove />
              <Amount>1</Amount>
              <Add />
            </AmountContainer>
            <Button>ADD TO CART</Button>
          </AddContainer>
        </InfoContainer>
      </Wrraper>
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default Product;
