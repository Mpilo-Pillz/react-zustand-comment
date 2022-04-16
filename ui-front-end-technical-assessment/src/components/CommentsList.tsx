import { useEffect } from "react";
import useStore from "../store/store";
import { Comment } from "../types/types";
import Button from "./formComponents/Button";

const CommentsList = () => {
  const comments = useStore((state) => state.comments);
  const getComments = useStore((state) => state.getComments);
  const deleteComments = useStore((state) => state.deleteComments);

  useEffect(() => {
    getComments("http://localhost:1337/orgs/fsociety/comments");
  }, []);
  return (
    <>
      <Button
        buttonText="Delete All Comments"
        isDisabled={false}
        buttonType="button"
        dataTestId={`delete`}
        onClick={(e) => {
          deleteComments(`http://localhost:1337/orgs/fsociety/comments`);
        }}
      />
      <ul>
        {comments.map((comment: Comment) => (
          <li key={comment._id}>
            <span>{comment.comment}</span>
          </li>
        ))}
      </ul>
    </>
  );
};

export default CommentsList;
