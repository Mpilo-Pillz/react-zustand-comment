import { FormikHelpers } from "formik";
import { useMemo } from "react";
import * as Yup from "yup";
import useStore from "../../../store/store";
import { FormValues } from "../../../types";

const useAddComment = () => {
  const createComment = useStore((state) => state.createComment);
  const orgName = useStore((state) => state.orgName);

  const initialValues = useMemo(
    () => ({
      comment: "",
      org: orgName,
    }),
    []
  );

  const validationSchema = Yup.object({
    comment: Yup.string().required("Required"),
  });

  const handleSubmit = (
    newComment: FormValues,
    { resetForm }: FormikHelpers<FormValues>
  ) => {
    createComment?.(`${orgName}/comments`, newComment);
    resetForm({});
  };

  return { initialValues, validationSchema, handleSubmit };
};

export default useAddComment;
