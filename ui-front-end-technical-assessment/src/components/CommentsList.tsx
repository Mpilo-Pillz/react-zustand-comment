import { List } from "antd";
import { useEffect } from "react";
import useStore from "../store/store";
import { Comment } from "../types/types";
import ButtonInput from "./formComponents/Button";

const CommentsList = () => {
  const comments = useStore((state) => state.comments);
  const getComments = useStore((state) => state.getComments);
  const deleteComments = useStore((state) => state.deleteComments);
  const orgName = useStore((state) => state.orgName);

  useEffect(() => {
    getComments(`${orgName}/comments`);
  }, [orgName, deleteComments]);
  return (
    <>
      <ButtonInput
        buttonText="Delete All Comments"
        isDisabled={false}
        buttonType="button"
        dataTestId={`delete`}
        buttonClass="btn-outline"
        onClick={(e) => {
          deleteComments(`${orgName}/comments`);
        }}
      />
      <List
        itemLayout="horizontal"
        dataSource={comments}
        renderItem={(comment: Comment) => (
          <List.Item className="comment-list">
            <List.Item.Meta title={comment.org} description={comment.comment} />
          </List.Item>
        )}
      />
    </>
  );
};

export default CommentsList;
