import { Avatar, Divider, List, Skeleton } from "antd";
import Meta from "antd/lib/card/Meta";
import { useEffect } from "react";
import useFetch from "../hooks/useFetch";
import useStore, { apiUrl } from "../store/store";
import { Comment } from "../types/types";
import ErrorCard from "./Error";
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
      <section className="skeleton-loading">
        {Array.from({ length: 5 }).map((_, index) => (
          <div key={index}>
            {isLoading && (
              <>
                <Skeleton
                  loading={isLoading}
                  avatar
                  active
                  className="bg-white"
                ></Skeleton>
                <Divider />
              </>
            )}
          </div>
        ))}
      </section>
      {error && <ErrorCard errorParagraph="Error getting comments" />}
      {comments && (
        <List
          itemLayout="horizontal"
          dataSource={comments}
          renderItem={(comment: Comment) => (
            <List.Item className="comment-list">
              <Meta
                key={"index"}
                avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                title={comment.comment}
                description={comment.org}
              />
            </List.Item>
          )}
        />
      )}
    </>
  );
};

export default CommentsList;
