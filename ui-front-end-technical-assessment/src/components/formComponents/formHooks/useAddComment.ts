import { useMemo } from "react";
import * as Yup from "yup";
import useStore from "../../../store/store";

const useAddComment = () => {
  const createComment = useStore((state) => state.createComment);
  const setComments = useStore((state) => state.setComments);
  const orgName = useStore((state) => state.orgName);
  const comments = useStore((state) => state.comments);
  const initialValues = useMemo(
    () => ({
      comment: "",
    }),
    []
  );

  const validationSchema = Yup.object({
    comment: Yup.string().required("Required"),
  });

  const handleSubmit = (newComment: { comment: string }) => {
    console.log(newComment);
    createComment(`${orgName}/comments`, newComment);
    setComments([...comments, newComment]);
  };

  return { initialValues, validationSchema, handleSubmit };
};

export default useAddComment;
