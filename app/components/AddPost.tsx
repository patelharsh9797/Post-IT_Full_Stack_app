"use client";
import { useState } from "react";

const AddPost = () => {
  const [title, setTitle] = useState("");

  return (
    <form className="my-8 rounded-md bg-white p-8">
      <div className="my-4 flex flex-col">
        <textarea
          name="title"
          placeholder="What's on your mind?"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="my-2 rounded-md bg-gray-200 p-4 text-lg"
        ></textarea>
      </div>
      <div className="flex items-center justify-between gap-2">
        <p
          className={`text-sm font-bold ${
            title.length > 300 ? "text-red-700" : "text-gray-700"
          }`}
        >{`${title.length}/300`}</p>
        <button
          //   disabled={}
          className="rounded-xl bg-teal-600 px-6 py-2 text-sm text-white disabled:opacity-25"
          type="submit"
        >
          Post
        </button>
      </div>
    </form>
  );
};

export default AddPost;
