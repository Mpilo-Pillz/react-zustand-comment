import useStore from "../store/store";

const organizations = ["ecorp", "fsociety"];

const SelectOrganization = () => {
  const setOrgName = useStore((state) => state.setOrgName);
  const orgName = useStore((state) => state.orgName);
  return (
    <>
      <form className="select-organization">
        {organizations.map((organization) => (
          <div key={organization}>
            <input
              checked={orgName === organization}
              type="radio"
              id={organization}
              data-testid={`radio-button-${organization}`}
              name="orgName"
              value={organization}
              onChange={(e) => {
                localStorage.setItem("orgName", e.target.value);
                setOrgName?.(e.target.value);
              }}
            />
             {" "}
            <label className="radio-org-label" htmlFor={organization}>
              {organization}
            </label>
          </div>
        ))}
      </form>
    </>
  );
};

export default SelectOrganization;
