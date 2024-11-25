
import styled from "styled-components";

export const HeaderStyle = styled.header`

display: flex;
justify-content: space-around;
align-items: center;
margin-top: 30px;
`

export const Ul = styled.ul`
  display: flex;
  width: 40vw;
  justify-content: space-around;
  list-style: none;
  font-family: "Poppins", sans-serif;

  a {
    text-decoration: none;
    color: #1e3932;

    &:hover{
        color:palevioletred;
    }
  }
`;
