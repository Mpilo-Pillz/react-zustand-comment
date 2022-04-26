export type Comment = {
  deleted?: boolean;
  _id?: string;
  comment: string;
  org: string | null;
};
export interface Member {
  avatar: string;
  followers: number;
  following: number;
  _id: string;
  email: string;
  org: string;
}
export interface AppState {
  comments: Comment[];
  members: Member[];
  orgName: string | null;
  setOrgName?: (orgName: string) => void;
  setComments?: (comments: Comment[]) => void;
  deleteComments?: (url: string) => Promise<void>;
  createComment?: (url: string, body: Comment) => Promise<void>;
  setMembers?: (members: Member[]) => void;
}

export interface FormValues {
  comment: string;
  org: string | null;
}
