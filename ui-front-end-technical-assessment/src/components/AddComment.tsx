import { Formik, Form } from "formik";
import ButtonInput from "./formComponents/ButtonInput";
import useAddComment from "./formComponents/formHooks/useAddComment";
import TextInput from "./formComponents/TextInput";

const AddComment = () => {
  const { initialValues, validationSchema, handleSubmit } = useAddComment();

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values, { resetForm }) => {
        handleSubmit(values);
        resetForm({});
      }}
    >
      {(formikProps) => {
        return (
          <Form>
            <TextInput
              dataTestId="add-comment"
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
        );
      }}
    </Formik>
  );
};

export default AddComment;
