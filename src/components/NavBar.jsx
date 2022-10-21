import React from "react";
import styled from "styled-components";

const NavBar = () => {
  return (
    <main>
      <Container>
        <Button>
          <HomeImage src="https://cdn.discordapp.com/attachments/1032989212271722587/1032989250540556298/logo.png"></HomeImage>
        </Button>
        <Name>Sparta Colosseum</Name>
        <LoginButton>login</LoginButton>
      </Container>
    </main>
  );
};

export default NavBar;
const Container = styled.div`
  align-items: center;
  display: flex;
  height: 50px;
  justify-content: space-between;
  padding-right: 10px;
  margin-top: 20px;
`;

const Button = styled.button`
  border: 0px;
`;

const HomeImage = styled.img`
  width: 37px;
  cursor: pointer;
`;

const LoginButton = styled.button`
  font-size: 20px;
  border: 0px;
  cursor: pointer;
`;

const Name = styled.div`
  font-size: xx-large;
`;
