import useStore from "../store/store";
import { OrgName } from "../types/appEnums";

const SelectOrganization = () => {
  const setOrgName = useStore((state) => state.setOrgName);
  const orgName = useStore((state) => state.orgName);
  return (
    <>
      <form className="select-organization">
        <input
          checked={orgName === OrgName.ECORP}
          type="radio"
          id={OrgName.ECORP}
          data-testid={`radio-button-${OrgName.ECORP}`}
          name="orgName"
          value={OrgName.ECORP}
          onChange={(e) => {
            localStorage.setItem("orgName", e.target.value);
            setOrgName(e.target.value);
          }}
        />
         {" "}
        <label className="radio-org-label" htmlFor={OrgName.ECORP}>
          {OrgName.ECORP}
        </label>
         {" "}
        <input
          checked={orgName === OrgName.FSOCIETY}
          type="radio"
          id={OrgName.FSOCIETY}
          data-testid={`radio-button-${OrgName.FSOCIETY}`}
          name="orgName"
          value={OrgName.FSOCIETY}
          onChange={(e) => {
            localStorage.setItem("orgName", e.target.value);
            setOrgName(e.target.value);
          }}
        />
         {" "}
        <label className="radio-org-label" htmlFor={OrgName.FSOCIETY}>
          {OrgName.FSOCIETY}
        </label>
         
      </form>
    </>
  );
};

export default SelectOrganization;
