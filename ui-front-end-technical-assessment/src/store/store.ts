import create from "zustand";
import { AppState, Comment, Member } from "../types";

export const apiUrl = "http://localhost:1337/orgs/";

const initialState: AppState = {
  comments: [],
  members: [],
  orgName: localStorage.getItem("orgName")
    ? localStorage.getItem("orgName")
    : "fsociety",
};

const useStore = create<AppState>((set) => ({
  ...initialState,
  setOrgName: (orgName: string) => set({ orgName }),
  setComments: (comments: Comment[]) =>
    set((state) => ({
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
    set((state) => ({
      ...state,
      comments: [...state.comments, body],
    }));
  },
  setMembers: (members: Member[]) =>
    set((state) => ({
      ...state,
      members,
    })),
}));

export default useStore;
