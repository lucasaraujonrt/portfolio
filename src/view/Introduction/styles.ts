import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.colors.background};
  height: 90vh;
  width: 100vw;
  flex-direction: column;
`;

export const NavBar = styled.nav`
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const AboutMeContainer = styled.div`
  display: flex;
  width: 100%;
  height: 450px;
  justify-content: center;
  align-items: center;
`;

export const WrapperMe = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const WrapperAnimation = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
