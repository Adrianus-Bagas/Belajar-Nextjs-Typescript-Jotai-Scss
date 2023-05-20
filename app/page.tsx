"use client";

import { loginAtom } from "@/atom";
import { LoginAction } from "@/service/LoginService";
import { useAtom } from "jotai";
import { useRouter } from "next/navigation";
import { useState } from "react";

function Login() {
  const [username, setUsername] = useState<string>("kminchelle");
  const [password, setPassword] = useState<string>("0lelplR");
  const router = useRouter();
  const [loginData, setLoginData] = useAtom(loginAtom);

  const handleLogin = async (event: any) => {
    event.preventDefault();
    const res = await LoginAction({ username: username, password: password });
    const resJson = await res.json();
    const resAuthData = {
      id: resJson.id,
      username: resJson.username,
      image: resJson.image,
      token: resJson.token,
      route: "/dashboard",
    };
    setLoginData(resAuthData);
    router.push(resAuthData.route);
  };

  console.log(loginData);
  return (
    <>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
        <input
          type="text"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <button>Login</button>
      </form>
    </>
  );
}

export default Login;
