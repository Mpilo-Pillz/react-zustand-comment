import { useState } from "react";
import "./App.css";
import AddComment from "./components/AddComment";
import CommentsList from "./components/CommentsList";

function App() {
  return (
    <>
      <CommentsList />
      <AddComment />
    </>
  );
}

export default App;
