import styled from "styled-components";

export const CartDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: #f8faff;
  padding: 20px;
  gap: 30px;
  border-radius: 10px;
  font-size: 20px;
`;

export const CartDescription = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  color: #102a68;
  h1 {
    font-size: 50px;
  }
  h2 {
    font-size: 25px;
  }
`;

export const CartTableDiv = styled.div`
  width: 100%;
  color: #102a68;
`;

export const Table = styled.table`
  width: 75%;
  border: 5px solid #a8eecf;
  height: 100px;
  text-align: center;
  margin: 0 auto;

  td {
    vertical-align: middle;
  }
`;

export const TBody = styled.tbody`
  td {
    border-top: 1px solid #a8eecf;
  }
`;

export const CartImage = styled.img`
  height: 100px;
`;

export const ButtonsAddRemove = styled.button`
  border: none;
  background-color: #fe9d34;
  color: #f7fbfd;
  margin: 5px;
  &:active {
    background-color: #fb8550;
    box-shadow: 0 4px 4px black;
    transition: all 0.1s ease-in-out;
    border-radius: 10px;
  }
`;

export const QuantitySpan = styled.span`
  padding: 10px;
`;

export const Th = styled.th`
  font-size: 25px;
  font-weight: bold;
`;
