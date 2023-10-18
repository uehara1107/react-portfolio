import { ABOUT_CONTENTS_CODE } from "./constants";

export interface AboutContent {
  id: (typeof ABOUT_CONTENTS_CODE)[number];
  img: string;
  detail: string;
  comment: number;
}

export interface WorkContent {
  id: string;
  img: string;
  detail: string;
  tag?: string[];
}
