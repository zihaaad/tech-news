"use client";

import {useRouter} from "next/navigation";

const DeleteBtn = ({id}: {id: string}) => {
  const router = useRouter();
  const handleDelete = async () => {
    const confirmed = window.confirm(
      "Are You Sure You wanna delete this post?"
    );
    if (confirmed) {
      try {
        const res = await fetch(`/api/posts/${id}`, {
          method: "DELETE",
        });
        if (res.ok) {
          console.log("Post Deleted");
          router.refresh();
        }
      } catch (error) {
        console.log(error);
      }
    }
  };
  return (
    <button onClick={handleDelete} className="text-red-600 btn ">
      Delete
    </button>
  );
};

export default DeleteBtn;
