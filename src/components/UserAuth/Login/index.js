import React, { useEffect, useState } from "react";
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
import useAuth from "../../../hooks/userAuth";

function Login() {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const login = useAuth();

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
      const { data } = await api.signIn(user);
      login(data);

      setIsLoading(false);
    } catch (error) {
      if (error.response.status === 401)
        alert("Email or password incorrect, please try again");
      else {
        alert(`Please check your login info or try again later`);
      }

      setIsLoading(false);

      console.log(error);
      alert("Please try again");
    }
  }

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("auth"));
    if (token) navigate("/exams");
  }, []);

  return (
    <Container>
      <TitleScreen>
        <div>
          <img src={logotipo} alt="Logotipo" />
        </div>
      </TitleScreen>
      <Form onSubmit={handleLogin}>
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
        <Button variant="contained" type="submit" disabled={isLoading}>
          {isLoading ? (
            <ThreeDots
              type="ThreeDots"
              color="#FFFFFF"
              height={50}
              width={50}
            />
          ) : (
            "Entrar"
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
