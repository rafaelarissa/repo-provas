import React, { useState } from "react";
import { useNavigate } from "react-router";
import api from "../../../services/api";
import { ThreeDots } from "react-loader-spinner";
import { Container, TitleScreen, Form, Input, StyledLink } from "../style";
import logotipo from "../../../assets/logotipo.png";
import Button from "@mui/material/Button";

function Login() {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    username: "",
    pictureUrl: "",
  });
  const navigate = useNavigate();

  function handleChange({ target }) {
    setFormData({ ...formData, [target.name]: target.value });
  }

  async function handleLogin(e) {
    e.preventDefault();
    setIsLoading(true);

    const user = { ...formData };

    Object.keys(user).forEach((item) => {
      if (!user[item]) {
        alert("All fields must be filled");
      }
    });

    try {
      await api.Login(user);
      setIsLoading(false);
      navigate("/");
    } catch (error) {
      if (error.response.status === 409) {
        alert("E-mail already in use");
        setIsLoading(false);
      }
      console.log(error);
      alert("Please try again");
    }
  }

  return (
    <Container>
      <TitleScreen>
        <div>
          <img src={logotipo} alt="Logotipo" />
        </div>
      </TitleScreen>
      <Form onSubmit={handleLogin}>
        <Button variant="contained">Entrar com o github</Button>

        <Input
          placeholder="Email"
          type="email"
          onChange={(e) => handleChange(e)}
          name="email"
          value={formData.email}
          required
        />
        <Input
          placeholder="Senha"
          type="password"
          onChange={(e) => handleChange(e)}
          name="password"
          value={formData.password}
          required
        />
        <Button variant="contained" type="submit" disabled={isLoading}>
          {isLoading ? (
            <ThreeDots
              type="ThreeDots"
              color="#FFFFFF"
              height={50}
              width={50}
            />
          ) : (
            "Cadastrar"
          )}
        </Button>
        <div>
          Não tem cadastro? <StyledLink to="/sign-up">Cadastrar</StyledLink>
        </div>
      </Form>
    </Container>
  );
}

export default Login;
