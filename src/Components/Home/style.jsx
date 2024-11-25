import styled from "styled-components";

export const MainStyle = styled.main`
  display: flex;
  margin-bottom: 50px;
  padding-left: 200px;
  min-height: 100vh;
  margin-top: 0px;
 overflow-y: hidden;

`;

export const Section = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  

  h2{
  font-size: 40px;
  margin-right: 290px;
  margin-top: 10px;
  font-family: "Inter", sans-serif;
  
  }

  h3{
  font-size: 40px;
  margin-right: 170px;
  margin-top: -470px;
  font-family: "Poppins", sans-serif;
  

  
  }

  span{
  font-size: 60px;
  color: green;
  
  }

  p {
  font-size: 20px;
  margin-top: -470px;
  line-height: 1.4;
  white-space: pre-line;
  padding-right: 60px;
  font-family: "Poppins", sans-serif;
  
  }

  button {
  color: white;
  background-color: green;
  border: none;
  padding: 10px 30px;
  font-weight: bold;
  border-radius: 30px;
  width: 30%;
  margin-top: -460px;
  margin-right: 380px;
  cursor: pointer;
  font-family: "Inter", sans-serif;
  
}

`;

export const Div = styled.div`
  display: flex;
  gap: 10px;
  cursor: pointer;
  
  

  
`;

export const Footer = styled.footer`
color: black;
  text-align: center;
  padding: 20px;
  font-size: 14px;
  margin-top: 1300px;
  margin-left: -690px;
  font-family: "Inter", sans-serif;

  

`;

export const ImageType1 = styled.img`
position: absolute; /* Para posicionar no meio do círculo */
  z-index: 2; /* Garante que fique acima do círculo */
  width: 450px; /* Ajuste o tamanho do copo */
  height: auto;
  bottom: -520px;
  right: 30px;
transition: background-color 0.3s ease;
  
  

`;

export const ImageType2 = styled.img`
position: relative; /* A base do layout */
  z-index: 1; /* Atrás do copo */
  width: 500px; /* Ajuste o tamanho do círculo */
  height: auto;
  bottom: -300px;
  left: 260px;
  transition: background-color 0.3s ease;

`;