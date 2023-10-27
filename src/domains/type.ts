import { ABOUT_CONTENTS_CODE } from "./constants";

export interface AboutContent {
  id: (typeof ABOUT_CONTENTS_CODE)[number];
  img: string;
  detail: string;
  comment: number;
}

export interface WorkContent {
  id: string;
  title: string;
  productImg: string;
  iconImg: string;
  date: string;
  fav: number;
  comment: number;
  detail: string;
  tag: string[];
}
