export interface IUser {
  id: number;
  name: string;
  email: string;
  isAdmin: boolean;
  isActivated: boolean;
}

export interface ICategory {
  id: number;
  name: string;
  icon: string;
  events?: IEvent[];
}

export interface IEvent {
  id: number;
  title: string;
  description: string;
  place: string;
  price: number;
  posterUrl?: string;
  photos?: string[];
  users?: IUser[] | null;
  category: ICategory;
  artists: IArtist[] | null | string;
}

export interface IArtist {
  id: number;
  name: string;
  surname: string;
  nickname: string;
  bio: string;
  city: string;
  users: IUser[] | null;
  events: IEvent[] | null;
}
