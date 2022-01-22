import styled from "styled-components";

export const NavMenu = styled.nav`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 15px 30px;
  color: #50a196;
  font-size: 24px;

  span {
    width: 48%;
    display: flex;
  }

  ul {
    display: flex;
    width: 51%;
    justify-content: space-between;
  }
  a {
    text-decoration: none;
    &:visited {
      color: #50a196;
    }
  }
`;
