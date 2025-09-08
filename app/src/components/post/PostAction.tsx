import { FaRegThumbsUp, FaRegCommentDots, FaShare } from "react-icons/fa";

const PostActions = () => {
  return (
    <div className="flex justify-around border-t border-[var(--border-color)] py-2 text-[var(--foreground)]">
      <button className="flex items-center space-x-1  hover:text-blue-600">
        <FaRegThumbsUp /> <span>Like</span>
      </button>
      <button className="flex items-center space-x-1  hover:text-green-600">
        <FaRegCommentDots /> <span>Comment</span>
      </button>
      <button className="flex items-center space-x-1  hover:text-purple-600">
        <FaShare /> <span>Share</span>
      </button>
    </div>
  );
};

export default PostActions;