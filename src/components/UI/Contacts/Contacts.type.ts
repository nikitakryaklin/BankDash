interface Iavatar {
  url: string;
}

export interface IContact {
  id: number;
  avatar: Iavatar[];
  name: string;
  role: string;
}
