export interface NotifyItem {
  id: string;
  title: string;
  body: string;
  read: boolean;
  userGroup: string;
  createdDate: string;
}

export interface TestimonyItem {
  createdDate: string;
  id: string;
  testimony: string;
  user: {
    firstName: string;
    lastName: string;
    role: string;
  };
}
