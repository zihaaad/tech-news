import CreatePostForm from "@/components/CreatePostForm";
import {getServerSession} from "next-auth";
import {authOptions} from "../api/auth/[...nextauth]/route";
import {redirect} from "next/navigation";

const CreatePostPage = async () => {
  const session = await getServerSession(authOptions);

  if (!session) redirect("/sign-in");

  return <CreatePostForm />;
};

export default CreatePostPage;
