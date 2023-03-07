import { useState } from "react";
import { Input } from "../ui";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
          <button className=" mt-4 w-100 btn btn-lg btn-primary" type="submit">
            Register
          </button>
          <p className="mt-5 mb-3 text-muted">© 2017–2022</p>
        </form>
      </main>
    </div>
  );
};

export default Register;
