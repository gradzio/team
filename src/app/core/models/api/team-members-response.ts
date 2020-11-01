type Url = string;
type Id = string;

export interface ImageUrls {
  w200: Url;
  w400: Url;
  w1080: Url;
  w1920: Url;
  w2560: Url;
}

export interface MemberData {
  title: string;
  description: string;
  link: Url;
  text: string;
}

export interface Membar {
  imageUrl: ImageUrls;
  block: MemberData;
}

export interface MemberCards {
  first: Membar;
  second: Membar;
  third: Membar;
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

export interface TeamMembersResponse {
  data: [Block];
}
