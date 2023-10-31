import SignInBtns from "@/components/SignInBtns";
import {getServerSession} from "next-auth";
import {authOptions} from "../api/auth/[...nextauth]/route";
import {redirect} from "next/navigation";

const SignInPage = async () => {
  const session = await getServerSession(authOptions);

  if (session) redirect("/dashboard");
  return <SignInBtns />;
};

export default SignInPage;
