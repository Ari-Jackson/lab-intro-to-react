import Post from "./Post";
import "./Posts.css";

export default function Posts() {
  return (
    <div className="posts">
      <h2>Posts</h2>
      <Post />
      <Post />
      <Post />
    </div>
  );
}
