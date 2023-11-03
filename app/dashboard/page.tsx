import Post from "@/components/Post";
import Link from "next/link";
import {getServerSession} from "next-auth";
import {authOptions} from "../api/auth/[...nextauth]/route";
import {redirect} from "next/navigation";
import {TPost} from "../types";

const getPosts = async (email: string) => {
  try {
    const res = await fetch(`${process.env.NEXTAUTH_URL}/api/authors/${email}`);
    const {posts} = await res.json();
    return posts;
  } catch (error) {
    console.log(error);
  }
};

const DashboardPage = async () => {
  const session = await getServerSession(authOptions);
  if (!session) redirect("/sign-in");

  let posts = [];

  if (session.user?.email) {
    posts = await getPosts(session.user?.email);
  }

  return (
    <div>
      <h1>My Posts</h1>
      {posts && posts.length > 0 ? (
        posts.map((post: TPost) => (
          <Post
            key={post.id}
            id={post.id}
            author={""}
            authorEmail={post.authorEmail}
            date={post.createdAt}
            thumbnail={post.imageUrl}
            category={post.catName}
            title={post.title}
            content={post.content}
            links={post.links || []}
          />
        ))
      ) : (
        <div className=" py-6">
          No Posts Created yet.{" "}
          <Link className="underline" href={"/create-post"}>
            Create New
          </Link>
        </div>
      )}
    </div>
  );
};

export default DashboardPage;
