import { State } from "zustand";

export type Comment = {
  deleted: boolean;
  _id: string;
  comment: string;
  org: Organization;
};
export interface CommentState extends State {
  comments: Comment[];
  getComments: any;
  //   getComments: (url: string) => Promise<void>;
}

export type Organization = "fsociety" | "ecorp";
