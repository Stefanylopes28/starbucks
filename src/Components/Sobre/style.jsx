import styled from "styled-components";

export const Section = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 80vh;
  color: #1e3932;
`;

export const Div = styled.div`
width: 30vw;

h2{
    font-size: 15px;
    font-family: "Inter", sans-serif;
}

h3{
font-size: 45px;
margin-top: -10px;
font-family: "Poppins", sans-serif;
}

p{
font-size: 20px;
margin-top: -28px;
font-family: "Poppins", sans-serif;
}
`

export const Button = styled.button`
  background-color: #037143;
  color: white;
  border: none;
  padding: 10px 30px;
  font-weight: bold;
  border-radius: 30px;
  width: 38%;
  cursor: pointer;
  font-family: "Inter", sans-serif;
`;

export const Footer = styled.footer `
  color: black;
  text-align: center;
  padding: 20px;
  font-size: 14px;
  font-family: "Inter", sans-serif;
  `;