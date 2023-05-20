export const getUserDetailById = async (id: number) => {
    const res = await fetch(`https://dummyjson.com/users/${id}`)
    if (!res.ok) {
        throw new Error("User tidak ditemukan")
    }
    return res.json()
}