import { Formik, Field, Form } from "formik";
import useStore from "../store/store";

const SelectOrganization = () => {
  const setOrgName = useStore((state) => state.setOrgName);
  return (
    <>
      <form>
        <input
          type="radio"
          id="ecorp"
          name="orgName"
          value="ecorp"
          onChange={(e) => setOrgName(e.target.value)}
        />
          <label htmlFor="ecorp">ecorp</label> {" "}
        <input
          checked
          type="radio"
          id="fsociety"
          name="orgName"
          value="fsociety"
          onChange={(e) => setOrgName(e.target.value)}
        />
          <label htmlFor="fsociety">fsociety</label> 
      </form>
    </>
  );
};

export default SelectOrganization;
