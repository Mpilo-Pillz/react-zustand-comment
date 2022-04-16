import create from "zustand";

const useStore = create<any>((set) => ({
  comments: [],
  getComments: async (url: string) => {
    const res = await fetch(url);
    set({ comments: await res.json() });
  },
  deleteComments: async (url: string) => {
    const res = await fetch(url, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
  },
  createComment: async (url: string, body: any) => {
    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
  },
}));

export default useStore;
