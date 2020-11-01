import { OurTeamPage, TeamMember } from '../models/presentation/our-team';
import { OurTeamResponse, MemberCards, MembarCard } from '../models/api/our-team-response';

export function mapToOurTeamPage(apiResponse: OurTeamResponse): OurTeamPage {
  const teamMembers = mapToTeamMembers(apiResponse.data[0].attributes.memberCards);
  return {
    title: apiResponse.data[0].attributes.title,
    teamMembers,
  };
}

export function mapToTeamMembers(memberCards: MemberCards): TeamMember[] {
  return Object.keys(memberCards)
    .map((key) => memberCards[key])
    .map((memberCard) => mapToTeamMember(memberCard));
}

export function mapToTeamMember(memberCard: MembarCard): TeamMember {
  return {
    images: memberCard.imageUrl,
    name: memberCard.block.title,
    position: memberCard.block.description,
    email: memberCard.block.link,
    phoneNumber: memberCard.block.text,
  };
}
