import styled from "styled-components";


export const FruitCard = styled.div`
    display:flex;
    align-items: center;
    flex-direction: column;
    width: 180px;
    padding: 10px;
    gap: 10px;
    background-color: #F8FaFf;
    border-radius: 10px;
    box-shadow: 2px 7px 22px -2px rgba(14,92,92,0.67);

    h2{
        font-size: 24px;
        font-weight: bold;
        color: #102a68;
    }
    h3{
        color: #8ECAE6;
        font-size: 15px;
        font-weight: bold;
    }

 img{
    
   height: 100px;
   border-radius: 10px;
   
 }

 a{
     text-decoration: none;
 }

 &:hover{
    top:-4px;box-shadow:0 4px 4px #999;
        transition: all .2s ease-in-out;
        background-color: #E7F4FA;
 }
`

export const ButtonInfo = styled.button`
display: flex;
background-color: #fe9d34;
font-size: 15px;
color: #F7FBFD;
border: none;
border-radius: 50px;

&:hover{
    background-color: #FB8500;
    cursor:pointer;
}

`

export const ButtonBox = styled.div`
display:flex;
gap: 30px;

`

export const FruitBasket = styled.div`
display:flex;
flex-wrap: wrap;
gap: 20px;
justify-content: center;
padding: 30px;
background-color: #A8EECF;
height: 100%;
`

export const Fruits = styled.p`
display:flex;
font-weight: bold;
font-size: 30px;
color: #60a196;
`;

export const FruitPage= styled.div`
display:flex;
flex-direction: column;
justify-content: center;
align-items: center;

`