import create from "zustand";

const apiUrl = "http://localhost:1337/orgs/";
const useStore = create<any>((set) => ({
  comments: [],
  members: [],
  orgName: "fsociety",
  isLoading: false,
  setOrgName: (orgName: string) => set({ orgName }),
  getComments: async (url: string) => {
    set({ isLoading: true });
    const res = await fetch(`${apiUrl}${url}`);
    set({ comments: await res.json() });
    set({ isLoading: false });
  },
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
  getMembers: async (url: string) => {
    const res = await fetch(`${apiUrl}${url}`);
    set({ members: await res.json() });
  },
}));

export default useStore;
