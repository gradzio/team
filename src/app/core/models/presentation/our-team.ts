import { Url } from 'url';
import { ImageUrls, Email } from '../common';

export interface TeamMember {
  images: ImageUrls;
  name: string;
  position: string;
  email: Email;
  phoneNumber: string;
}
export interface OurTeamPage {
  title: string;
  teamMembers: TeamMember[];
}
