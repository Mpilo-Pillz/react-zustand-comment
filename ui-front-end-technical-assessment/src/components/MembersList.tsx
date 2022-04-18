import { useEffect } from "react";
import useFetch from "../hooks/useFetch";
import useStore, { apiUrl } from "../store/store";
import MemberCard from "./MemberCard";

const MembersLists = () => {
  const members = useStore((state) => state.members);
  const setMembers = useStore((state) => state.setMembers);
  const orgName = useStore((state) => state.orgName);
  const { data, isLoading, error } = useFetch(`${apiUrl}${orgName}/members`);

  useEffect(() => {
    setMembers(data);
  }, [orgName, data]);

  return (
    <section className="flex-layout">
      {members &&
        members.map((member: any) => (
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
