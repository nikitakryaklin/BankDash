import { ITransaction } from "./Transactions.type";

export interface IAboutData {
  fullname?: string
  username?: string
  email?: string
  dateOfBirth?: string
  postalCode?: string
  country?: string
  city?: string
}

export interface ICard {
  id: number;
  number: string;
  period: string;
  cvc: number;
  balance: string;
  bank?: string;
  transactions?: ITransaction[];
  type?: string; 
}

export interface avatar {
  url: string;
}

export interface IUser {
  id: number;
  email: string;
  userName: string;
  cards?: ICard[];
  avatar?: avatar;
  about?: IAboutData; 
}

export interface IUserData {
  blocked: boolean;
  confirmed: boolean;
  createdAt: string;
  documentId: string;
  email: string;
  fullname?: null;
  id: number;
  provider: string;
  publishedAt: string;
  updatedAt: string;
  username: string;
}
