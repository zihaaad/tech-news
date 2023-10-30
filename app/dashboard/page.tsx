import Post from "@/components/Post";
import {postsData} from "@/data";
import Link from "next/link";

const DashboardPage = () => {
  return (
    <div>
      <h1>My Posts</h1>
      {postsData && postsData.length > 0 ? (
        postsData.map((post) => (
          <Post
            key={post.id}
            id={post.id}
            author={post.author}
            authorEmail={"text@gmail.com"}
            date={post.datapublished}
            thumbnail={post.thumbnail}
            category={post.catergory}
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