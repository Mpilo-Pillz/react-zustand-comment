import { Formik, Form } from "formik";
import { FormValues } from "../types";
import ButtonInput from "./formComponents/ButtonInput";
import useAddComment from "./formComponents/formHooks/useAddComment";
import TextInput from "./formComponents/TextInput";

const AddComment = () => {
  const { initialValues, validationSchema, handleSubmit } = useAddComment();

  return (
    <Formik<FormValues>
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {(formikProps) => {
        return (
          <>
            <Form className="add-form">
              <TextInput
                dataTestId="add-comment-text-input"
                name="comment"
                type="text"
                placeholder="Add a new Comment"
              />
              <ButtonInput
                buttonText="Post Comment"
                isDisabled={!formikProps.isValid}
                buttonType="submit"
                dataTestId="post-comment-button"
                buttonClass="btn-primary"
              />
            </Form>
          </>
        );
      }}
    </Formik>
  );
};

export default AddComment;
