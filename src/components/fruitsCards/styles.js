import styled from "styled-components";


export const FruitCard = styled.div`
    display:flex;
    align-items: center;
    flex-direction: column;
    width: 180px;
    padding: 10px;
    background-color: #F7FBFD;
    border-radius: 10px;
    box-shadow: 2px 7px 22px -2px rgba(14,92,92,0.67);

    h2{
        font-size: 24px;
        font-weight: bold;
        color: #023047;
    }
    h3{
        color: #8ECAE6;
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
align-items: center;
background-color: #FFB703;
font-size: 15px;
color: #F7FBFD;
border: none;
border-radius: 50%;

&:hover{
    background-color: #FB8500;
    cursor:pointer;
}

`

export const AddCartButton = styled.button`

`