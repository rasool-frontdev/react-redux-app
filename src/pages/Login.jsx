import { useState } from "react";
import { Input } from "../ui";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="text-center">
      <main className="form-signin w-25 m-auto">
        <form>
          <h1 className="h3 mb-3 fw-normal">Login</h1>

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

          {/* <div className="checkbox mb-3">
            <label>
              <input type="checkbox" value="remember-me" /> Remember me
            </label>
          </div> */}
          <button className="w-100 btn btn-lg btn-primary mt-3" type="submit">
            Sign in
          </button>
          <p className="mt-5 mb-3 text-muted">© 2017–2022</p>
        </form>
      </main>
    </div>
  );
};

export default Login;
