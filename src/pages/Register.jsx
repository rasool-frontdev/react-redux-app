import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Input } from "../ui";
import {
  registerUserFailed,
  registerUserStart,
  registerUserSuccess,
} from "../slice/auth";
import AuthService from "../service/auth";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { isLoading } = useSelector((state) => state.auth);

  const registerHandler = async (e) => {
    e.preventDefault();
    dispatch(registerUserStart());
    const user = { username: name, email: email, password: password };
    try {
      const response = await AuthService.userRegister(user);
      console.log(response);
      console.log(user);
      dispatch(registerUserSuccess());
    } catch (error) {
      dispatch(registerUserFailed());
    }
  };

  return (
    <div className="text-center">
      <main className="form-signin w-25 m-auto">
        <form>
          <h1 className="h3 mb-3 fw-normal">Register</h1>
          <Input label={"Username"} state={name} setState={setName} />
          <Input
            label={"email"}
            state={email}
            setState={setEmail}
            type={"email"}
          />
          <Input
            label={"password"}
            state={password}
            setState={setPassword}
            type={"password"}
          />
          <button
            className="w-100 btn btn-lg btn-primary mt-3"
            type="submit"
            disabled={isLoading}
            onClick={registerHandler}>
            {isLoading ? "Loading..." : "Register"}
          </button>
          <p className="mt-5 mb-3 text-muted">© 2017–2022</p>
        </form>
      </main>
    </div>
  );
};

export default Register;
