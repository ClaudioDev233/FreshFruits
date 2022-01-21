import styled from "styled-components";

export const FruitContainer = styled.div`
display:flex;
flex-direction: column;
width: fit-content;
gap: 30px;
background-color: #F8FaFf;
border-radius: 10px;
color: #102a68;
align-items: center;



p{
    font-size:20px;
    font-weight: bold;
}

span {
    font-size: 20px;
    font-weight: normal;
}
img{
    width: 100%;
    border-radius: 10px;
}
`

export const ImageContainer = styled.div`
margin: 10px;
display:flex;
justify-content: center;

`
export const DetailsContainer = styled.div`
display:flex;
flex-direction: column;
gap: 10px;
padding: 10px;
`

export const H1 = styled.h1`
    font-size:30px;
    font-weight: bold;
`