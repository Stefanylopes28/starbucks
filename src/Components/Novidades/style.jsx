import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: #004040;
  min-height: 100vh; /* Garante que cobre toda a altura da janela */
  display: flex;
  flex-direction: column;
  padding: 20px 20px 20px 20px;
  margin-top: 20px


`;

export const Section = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-grow: 1; /* Faz a section ocupar o espaço disponível */
  background-color: #004040;
  flex-direction: row-reverse;
  

`;

export const Div = styled.div`
  width: 30vw;
  color: white;
  

h2 {
font-family: "Inter", sans-serif;
font-size: 15px;

}
  

  h3 {
    font-size: 50px;
    margin-top: -10px;
    font-family: "Poppins", sans-serif;
  }

  p {
  font-size: 20px;
  margin-top: -40px;
  font-family: "Poppins", sans-serif;
  }

`;

export const Button = styled.button`
  background-color: #037143;
  color: white;
  border: none;
  padding: 10px 30px;
  font-weight: bold;
  border-radius: 30px;
  cursor: pointer;
  width: 38%;
  font-family: "Inter", sans-serif;
  

`;

export const Footer = styled.footer`
  background-color: #004040;
  color: white;
  text-align: center;
  padding: 20px;
  font-size: 14px;
  font-family: "Inter", sans-serif;

`;
