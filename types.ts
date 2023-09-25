export interface IBurgers {
  id: string;
  name: string;
  image: string;
  desc: string;
  price: number;
}
export interface IComments {
  id: number;
  name: string;
  email: string;
  body: string;
}
export interface GetComments {
  comments: IComments[];
}
export interface GetComment {
  comments: IComments;
}
export interface IComment {
  id: string;
}
export interface IPosts {
  id: string;
  title: string;
  body: string;
}
export interface GetPosts {
  data: IPosts[];
}
