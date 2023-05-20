import { getUserDetailById } from "@/service/UserService";
import Link from "next/link";

async function UserId({ params: { userId } }: { params: { userId: number } }) {
  const dataUser = getUserDetailById(userId);
  const user = await Promise.resolve(dataUser);
  return (
    <>
      <h1 className="meal-box first-name">{user.firstName}</h1>
      <h1 className="meal-box last-name">{user.lastName}</h1>
      <h1 className="meal-box maiden-name">{user.maidenName}</h1>
      <Link href={"/dashboard"}>Kembali</Link>
    </>
  );
}

export default UserId;

