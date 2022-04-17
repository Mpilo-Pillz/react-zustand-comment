import { useEffect } from "react";
import useStore from "../store/store";
import MemberCard from "./MemberCard";

const MembersLists = () => {
  const members = useStore((state) => state.members);
  const getMembers = useStore((state) => state.getMembers);
  const orgName = useStore((state) => state.orgName);

  useEffect(() => {
    getMembers(`${orgName}/members`);
  }, [orgName]);

  return (
    <section className="flex-layout">
      {members.map((member: any) => (
        <div key={member._id} className="margin-sm">
          <MemberCard
            imgAltText={member.avatar}
            cardDescription={member.org}
            cardTitle={member.email}
            imgUrl={member.avatar}
            numOfFollowers={member.followers}
            numOfFollowing={member.following}
          />
        </div>
      ))}
    </section>
  );
};

export default MembersLists;
