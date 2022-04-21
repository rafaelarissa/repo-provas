import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 430px) {
    width: 100%;
  }
`;

const TitleScreen = styled.div`
  display: flex;

  margin: 50px;
  @media (max-width: 430px) {
    height: 175px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
`;

const StyledLink = styled(Link)`
  margin-top: 22px;
  line-height: 24px;
  font-weight: bold;
  color: #3f51b5;
  text-decoration-line: none;
  cursor: pointer;

  @media (max-width: 430px) {
    font-size: 17px;
    line-height: 20px;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 564px;

  padding: 0 51px 0 55px;

  h2 {
    font-size: 24px;
    color: #9d9e9f;
  }

  button {
    background-color: #3f51b5;
    margin: 15px 0;
  }

  @media (max-width: 430px) {
    width: 90%;
    margin-top: 40px;
    justify-content: start;
    padding: 0px;
  }
`;

const Input = styled.input`
  height: 45px;
  width: 100%;

  border: 1px solid #434343;
  background-color: #242424;

  padding: 14px;
  margin-bottom: 10px;
  border-radius: 5px;

  font-size: 20px;

  ::placeholder {
    color: #7e7e7f;
    font-size: 20px;
  }
`;

const Divider = styled.div`
  display: flex;
  position: relative;
  justify-content: space-between;

  width: 100%;
  padding: 25px 0;

  .linha {
    width: 50%;
    height: 1px;
    background-color: #434343;
  }

  .texto {
    position: absolute;
    left: 50%;
    transform: translateY(-50%);
    color: black;
    color: #d4d4d4;
  }
`;

export { Container, Form, Input, TitleScreen, StyledLink, Divider };
