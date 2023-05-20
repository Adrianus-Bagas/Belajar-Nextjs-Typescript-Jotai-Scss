import { atom } from "jotai"

interface ILogin {
    id: number
    username: string
    image: string
    token: string
    route: string
};

const loginData: ILogin = {
    id: 0,
    username: "",
    image: "",
    token: "",
    route: "/",
}

export const loginAtom = atom(loginData)