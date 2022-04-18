export type Comment = {
  deleted: boolean;
  _id: string;
  comment: string;
  org: Organization;
};
export type Member = {
  avatar: string;
  followers: number;
  following: number;
  _id: string;
  email: string;
  org: Organization;
};
export interface AppStore {
  comments: Comment[];
  members: Member[];
  orgName: Organization;
  setOrgName: () => void;
  setComments: () => void;
  deleteComments: () => void;
  createComment: () => void;
  setMembers: () => void;
}

export type Organization = "fsociety" | "ecorp";
