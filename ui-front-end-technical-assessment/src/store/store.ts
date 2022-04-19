import create from "zustand";
import { Comment, Member, Organization } from "../types/types";

export const apiUrl = "http://localhost:1337/orgs/";

const initialState = {
  comments: [] as Comment[],
  members: [] as Member[],
  orgName: localStorage.getItem("orgName")
    ? (localStorage.getItem("orgName") as Organization)
    : ("fsociety" as Organization),
};

const useStore = create<any>((set) => ({
  ...initialState,
  setOrgName: (orgName: string) => set({ orgName }),
  setComments: (comments: Comment[]) =>
    set((state: Comment[]) => ({
      ...state,
      comments,
    })),
  deleteComments: async (url: string) => {
    const res = await fetch(`${apiUrl}${url}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (res.ok) {
      set({ comments: [] });
    }
  },
  createComment: async (url: string, body: Comment) => {
    const res = await fetch(`${apiUrl}${url}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
  },
  setMembers: (members: Member[]) =>
    set((state: Member[]) => ({
      ...state,
      members,
    })),
}));

export default useStore;
