export interface Login {
    username: string
    password: string
}

export const LoginAction = ({ username, password }: Login) => {
    return fetch('https://dummyjson.com/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({

            username: username,
            password: password,
            // expiresInMins: 60, // optional
        })
    })
}