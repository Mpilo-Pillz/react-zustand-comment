import { useMemo } from "react";
import * as Yup from "yup";
import useStore from "../../../store/store";

const useAddComment = () => {
  const createComment = useStore((state) => state.createComment);
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
    createComment("http://localhost:1337/orgs/fsociety/comments", newComment);
  };

  return { initialValues, validationSchema, handleSubmit };
};

export default useAddComment;
