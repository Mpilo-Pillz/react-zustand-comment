import "./App.css";
import AddComment from "./components/AddComment";
import CommentsList from "./components/CommentsList";
import MembersLists from "./components/MembersList";
import SelectOrganization from "./components/SelectOrganization";
import useStore from "./store/store";

function App() {
  const orgName = useStore((state) => state.orgName);
  return (
    <>
      <SelectOrganization />
      <h1>{orgName}</h1>
      <CommentsList />
      <AddComment />
      <hr />
      <MembersLists />
    </>
  );
}

export default App;
