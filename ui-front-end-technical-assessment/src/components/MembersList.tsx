import { useEffect } from "react";
import useStore from "../store/store";
import MemberCard from "./MemberCard";

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
          <MemberCard
            imgAltText={member.avatar}
            cardDescription={member.org}
            cardTitle={member.email}
            imgUrl={member.avatar}
            numOfFollowers={member.followers}
            numOfFollowing={member.following}
          />
        </li>
      ))}
    </ul>
  );
};

export default MembersLists;
