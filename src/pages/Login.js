import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../features/authSlice";
import { useNavigate } from "react-router-dom";
import Input from "../components/Input";
import Button from "../components/Button";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === "admin@test.com" && password === "password") {
      dispatch(login({ email }));
      navigate("/home");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Login</h2>
        <Input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button type="submit" className="login-button">Login</Button>
      </form>
    </div>
  );
};

export default Login;
