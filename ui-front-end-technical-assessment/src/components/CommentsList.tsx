import { List } from "antd";
import { useEffect } from "react";
import useFetch from "../hooks/useFetch";
import useStore, { apiUrl } from "../store/store";
import { Comment } from "../types/types";
import ButtonInput from "./formComponents/Button";

const CommentsList = () => {
  const orgName = useStore((state) => state.orgName);
  const { data, isLoading, error } = useFetch(`${apiUrl}${orgName}/comments`);
  const comments = useStore((state) => state.comments);
  const setComments = useStore((state) => state.setComments);
  const deleteComments = useStore((state) => state.deleteComments);

  useEffect(() => {
    setComments(data);
  }, [orgName, deleteComments, data]);
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
      {comments && (
        <List
          itemLayout="horizontal"
          dataSource={comments}
          renderItem={(comment: Comment) => (
            <List.Item className="comment-list">
              <List.Item.Meta
                title={comment.org}
                description={comment.comment}
              />
            </List.Item>
          )}
        />
      )}
    </>
  );
};

export default CommentsList;
