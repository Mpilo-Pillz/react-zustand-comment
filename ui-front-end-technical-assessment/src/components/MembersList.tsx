import { useEffect } from "react";
import useStore from "../store/store";

const MembersLists = () => {
  const members = useStore((state) => state.members);
  const getMembers = useStore((state) => state.getMembers);
  const orgName = useStore((state) => state.orgName);

  useEffect(() => {
    getMembers(`http://localhost:1337/orgs/${orgName}/members`);
  }, [orgName]);

  return (
    <ul>
      {members.map((member: any) => (
        <li key={member._id}>
          <span>{member.email}</span>
          <img src={member.avatar} alt={member.email} />
          <span>{member.followers}</span>
          <span>{member.following}</span>
          <span>{member.org}</span>
        </li>
      ))}
    </ul>
  );
};

export default MembersLists;
