"use client";

import { loginAtom } from "@/atom";
import { useAtom } from "jotai";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Home() {
  const [loginData, setLoginData] = useAtom(loginAtom);
  const router = useRouter();

  const handleLogout = () => {
    const resetData = {
      id: 0,
      username: "",
      image: "",
      token: "",
      route: "/",
    };
    setLoginData(resetData);
    router.push(resetData.route);
  };

  console.log(loginData);
  return (
    <>
      <h1>Halo {loginData.username}</h1>
      <ul>
        <li>
          <h1>{loginData.id}</h1>
        </li>
        <li>
          <h1>{loginData.token}</h1>
        </li>
      </ul>
      <img src={loginData.image} />
      <Link href={`/dashboard/${loginData.id}`}>Detail User</Link>
      <button onClick={() => handleLogout()}>Keluar</button>
    </>
  );
}
