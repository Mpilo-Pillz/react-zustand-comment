import create from "zustand";
import { Member } from "../types/types";

export const apiUrl = "http://localhost:1337/orgs/";

const useStore = create<any>((set) => ({
  comments: [],
  members: [],
  orgName: "fsociety",
  isLoading: false,
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
  },
  createComment: async (url: string, body: any) => {
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
