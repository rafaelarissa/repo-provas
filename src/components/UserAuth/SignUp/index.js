import React, { useState } from "react";
import { useNavigate } from "react-router";
import api from "../../../services/api";
import { ThreeDots } from "react-loader-spinner";
import {
  Container,
  TitleScreen,
  Form,
  Input,
  StyledLink,
  Divider,
} from "../style";
import logotipo from "../../../assets/logotipo.png";
import Button from "@mui/material/Button";

function SignUp() {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    checkPassword: "",
  });
  const navigate = useNavigate();

  function handleChange({ target }) {
    setFormData({ ...formData, [target.name]: target.value });
  }

  async function handleSignUp(e) {
    e.preventDefault();
    setIsLoading(true);

    if (formData.password !== formData.checkPassword)
      return alert("Passwords must match! Refresh and try again");

    delete formData.checkPassword;
    const user = { ...formData };

    Object.keys(user).forEach((item) => {
      if (!user[item]) {
        alert("All fields must be filled");
      }
    });

    try {
      await api.signUp(user);
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
      <Form onSubmit={handleSignUp}>
        <Button variant="contained">Entrar com o github</Button>
        <Divider>
          <div class="linha"></div>
          <div class="texto">ou</div>
          <div class="linha"></div>
        </Divider>

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
        <Input
          placeholder="Confirme a senha"
          type="password"
          onChange={(e) => handleChange(e)}
          name="checkPassword"
          value={formData.checkPassword}
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
          J?? possui uma conta? <StyledLink to="/">Entrar</StyledLink>
        </div>
      </Form>
    </Container>
  );
}

export default SignUp;
