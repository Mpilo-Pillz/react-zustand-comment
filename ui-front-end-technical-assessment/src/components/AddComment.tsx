import { Formik, Form } from "formik";
import Button from "./formComponents/Button";
import useAddComment from "./formComponents/formHooks/useAddComment";
import TextInput from "./formComponents/TextInput";

const AddComment = () => {
  const { initialValues, validationSchema, handleSubmit } = useAddComment();

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values) => handleSubmit(values)}
    >
      {(formikProps) => {
        return (
          <Form>
            <TextInput
              dataTestId="add-comment"
              name="comment"
              type="text"
              placeholder="Addd a new Comment"
            />
            <Button
              buttonText="Post Comment"
              isDisabled={!formikProps.isValid}
              buttonType="submit"
              dataTestId="post-comment-button"
            />
          </Form>
        );
      }}
    </Formik>
  );
};

export default AddComment;
