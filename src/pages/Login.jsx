import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Input } from "../ui";
import { signUserFailure, signUserStart, signUserSuccess } from "../slice/auth";
import AuthService from "../service/auth";
import ValidationError from "../components/ValidationError";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoggedIn } = useSelector((state) => state.auth);

  const loginHandler = async (e) => {
    e.preventDefault();
    dispatch(signUserStart());
    const user = { email, password };
    const response = await AuthService.userLogin(user);
    try {
      dispatch(signUserSuccess(response.user));
      navigate("/");
    } catch (error) {
      dispatch(signUserFailure(error.response.data.errors));
    }
  };

  return (
    <div className="text-center">
      <main className="form-signin w-25 m-auto">
        <form>
          <h1 className="h3 mb-3 fw-normal">Login</h1>
          <ValidationError />
          <Input
            label={"Email"}
            state={email}
            setState={setEmail}
            type={"email"}
          />

          <Input
            label={"Password"}
            state={password}
            setState={setPassword}
            type={"password"}
          />

          <button
            className="w-100 btn btn-lg btn-primary mt-3"
            type="submit"
            disabled={isLoggedIn}
            onClick={loginHandler}>
            {isLoggedIn ? "Loading..." : "Sign in"}
          </button>
          <p className="mt-5 mb-3 text-muted">© 2017–2023</p>
        </form>
      </main>
    </div>
  );
};

export default Login;
