import React from "react";
import styled from "styled-components";


const AboutContainer = styled.div`
  background-color: #202a44;
  padding: 40px;
`;

const Title = styled.h2`
  color: #fff;
  font-size: 24px;
  margin-bottom: 20px;
`;

const Description = styled.p`
  color: #f5f5f5;
  font-size: 16px;
  line-height: 1.5;
`;

const LandingAbout = () => {
  return (
    <AboutContainer>
      <Title>About Us</Title>
      <Description>
        Buyer Side: Find your dream home effortlessly. Discover the perfect
        property with personalized recommendations and intuitive search filters.
      </Description>
      <Description>
        Seller Side: Sell your house effortlessly. Attract interested buyers,
        negotiate offers, and close deals efficiently with our user-friendly
        platform.
      </Description>
    </AboutContainer>
  );
};

export default LandingAbout;

import Navbar from "./Navbar";
import LandingAbout from "./LandingAbout";
import Services from "./Services";
import Contact from "./Contact";
const BackgroundImage = styled.div`
  background-image: url("https://images.unsplash.com/photo-1635108199650-8115b597e283?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzc0fHxyZWFsJTIwZXN0YXRlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60");
  background-size: cover;
  background-position: center;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ContentWrapper = styled.div`
  text-align: centre;
  color: white;
`;

const Title = styled.h1`
  font-size: 32px;
`;

const Subtitle = styled.p`
  font-size: 18px;
`;

const ButtonWrapper = styled.div`
  margin-bottom: 20px;
`;

const Button = styled.button`
  margin-right: 10px;
`;

const Quote = styled.p`
  font-style: italic;
`;

const LandingHome = () => {
  return (
    <div>
      <Navbar />
      <BackgroundImage>
        <ContentWrapper>
          <Title> SKYPROPERTIES</Title>
          <Subtitle>
            Welcome to our House Dealership. Find your dream home today
          </Subtitle>
          <Quote>"Home is where your story begins."</Quote>
        </ContentWrapper>
      </BackgroundImage>
      <Services />
      <LandingAbout />
      <Contact />
    </div>
  );
};
export default LandingHome;

