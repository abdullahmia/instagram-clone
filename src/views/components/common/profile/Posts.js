import Post from "./Post";

const Posts = () => {
  return (
    <div className="grid grid-cols-3 lg:gap-5 gap-1">
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </div>
  );
};

export default Posts;
