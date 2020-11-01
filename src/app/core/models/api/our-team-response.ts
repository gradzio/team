import { Id, Url, ImageUrls } from '../common';

export interface MemberData {
  title: string;
  description: string;
  link: Url;
  text: string;
}

export interface MembarCard {
  imageUrl: ImageUrls;
  block: MemberData;
}

export interface MemberCards {
  first: MembarCard;
  second: MembarCard;
  third: MembarCard;
}

export interface Attributes {
  title: string;
  memberCards: MemberCards;
}

export interface Block {
  attributes: Attributes;
  id: Id;
  type: string;
}

export interface OurTeamResponse {
  data: [Block];
}
